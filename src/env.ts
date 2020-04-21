// Retrieve channel
const channel = process.env.REACT_NATIVE_CHANNEL || 'local';

const shared = {
    // SENTRY_DSN, ...
}

const environments = {

    local: {
        GRAPHQL_WS_URI: 'http://localhost:3000/graphql',
        GRAPHQL_URI: 'http://localhost:3000/graphql',
        OAUTH_URI: 'http://localhost:3000',
        API_URI: 'http://localhost:3000',
    },
    prod: {
        GRAPHQL_WS_URI: 'http://localhost:3000/graphql',
        GRAPHQL_URI: 'http://localhost:3000/graphql',
        OAUTH_URI: 'http://localhost:3000',
        API_URI: 'http://localhost:3000',
    },
}

const current = { ...shared, ...environments[channel] }

export default current

console.log(`channel: ${channel}`);