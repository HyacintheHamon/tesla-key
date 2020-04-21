// Apollo
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import { getMainDefinition } from 'apollo-utilities'
import { setContext } from 'apollo-link-context'
import { split, ApolloLink } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { RestLink } from 'apollo-link-rest'

// Types
// import introspectionQueryResultData from './types.json'

// Env
import env from '../env'

// Utils
import { authorization } from './helpers'

// Local cache
import resolvers from './resolvers'
import defaults from './defaults'


// Cache
// const fragmentMatcher = new IntrospectionFragmentMatcher({
//     introspectionQueryResultData,
// });

const cache = new InMemoryCache({ /*fragmentMatcher*/ });

// GraphQL endpoint
const httpLink = new HttpLink({ uri: env.GRAPHQL_URI });

const restLink = new RestLink({ uri: env.API_URI });
// const restLink = new RestLink({ uri: 'https://swapi.co/api' });

const useWS = !!env.GRAPHQL_WS_URI;

if (useWS) {
    const wsLink = new WebSocketLink({
        uri: env.GRAPHQL_WS_URI,
        options: {
            reconnect: true,
            connectionParams: () => (
                authorization()
            )
        },
    });

    var link = split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return definition.kind === 'OperationDefinition'
                && (definition as any).operation === 'subscription';
        },
        wsLink,
        httpLink,
    );
}

// Auth middleware
const auth = setContext(
    (request, previousContext) => (
        authorization()
    )
);

const client = new ApolloClient({
    cache,
    resolvers,
    link: !useWS ? (
        ApolloLink.from([auth, restLink, httpLink])
    ) : (
        ApolloLink.from([auth, restLink, link])
    ),
});

cache.writeData({ data: defaults });

export default client