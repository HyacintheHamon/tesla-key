// Storage
import AsyncStorage from '@react-native-community/async-storage'

// Utils
import qs from 'qs'


export async function authorize(input: AuthorizeInput) {

    const accessTokenExpirationDate = new Date;

    const rawResponse = await fetch(
        `${input.issuer}/oauth/token`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
            },
            body: qs.stringify({
                client_id: input.clientId,
                password: input.password,
                username: input.username,
                grant_type: 'password',
            }),
        }
    );

    const response: AuthorizeResponse = await rawResponse.json();

    if (!rawResponse.ok) {
        throw Error('Unauthorized');
    }

    accessTokenExpirationDate.setSeconds(
        accessTokenExpirationDate.getSeconds() +
        response.expires_in
    );

    const state: OAuthState = {
        authorizeConfig: {
            clientId: input.clientId,
            issuer: input.issuer,
        },
        refreshToken: response.refresh_token,
        accessToken: response.access_token,
        tokenType: response.token_type,
        accessTokenExpirationDate,
    };

    await AsyncStorage.setItem(
        '@OAuth:state', JSON.stringify(state)
    );

    return state;
}

export async function refresh(state?: OAuthState) {
    
    // Can refresh from a state already retrieved
    if (!state) state = await getState();

    const { authorizeConfig } = state;

    const accessTokenExpirationDate = new Date;

    const rawResponse = await fetch(
        `${authorizeConfig.issuer}/oauth/token`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
            },
            body: qs.stringify({
                client_id: authorizeConfig.clientId,
                grant_type: 'refresh_token',
            }),
        }
    );

    if (!rawResponse.ok) {
        throw Error('Unauthorized');
    }

    const response: AuthorizeResponse = await rawResponse.json();

    const refreshToken = response.refresh_token || state.refreshToken;

    accessTokenExpirationDate.setSeconds(
        accessTokenExpirationDate.getSeconds() +
        response.expires_in
    );

    const newState: OAuthState = {
        ...state,
        accessToken: response.access_token,
        tokenType: response.token_type,
        accessTokenExpirationDate,
        refreshToken,
    };

    await AsyncStorage.setItem(
        '@OAuth:state', JSON.stringify(newState)
    );

    return newState;
}

export async function refreshIfExpired() {
    
    const state = await getState();
    const now = new Date;

    const expired = now < state.accessTokenExpirationDate;
    
    if (!expired) return state;

    return await refresh(state);
}

export async function revoke() {

    const state = await getState();

    const { authorizeConfig } = state;

    await fetch(
        `${authorizeConfig.issuer}/revoke`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
            },
            body: qs.stringify({
                client_id: authorizeConfig.clientId,
                token_type_hint: 'refresh_token',
                token: state.refreshToken,
            }),
        }
    );

    await AsyncStorage.removeItem('@OAuth:state');
}

export async function getState() {
    const state = await AsyncStorage.getItem('@OAuth:state');
    return state && JSON.parse(state) as OAuthState;
}

export async function clearCache() {
    await AsyncStorage.removeItem('@OAuth:state');
}

export async function getAuthorization() {
    const state = await getState();
    return state && `${state.tokenType} ${state.accessToken}`;
}

// Types
export type AuthorizeInput = {
    username: string,
    password: string,
    clientId: string,
    issuer: string,
}

export type AuthorizeResponse = {
    token_type: AccessTokenType,
    refresh_token: string,
    access_token: string,
    expires_in: number,
}

export type OAuthState = {
    authorizeConfig: {
        clientId: string,
        issuer: string,
    },
    accessTokenExpirationDate: Date,
    tokenType: AccessTokenType,
    refreshToken: string,
    accessToken: string,
}

type AccessTokenType = 'Bearer'