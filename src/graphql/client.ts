// Apollo
import { RestLink } from 'apollo-link-rest'
import {
    enableExperimentalFragmentVariables,
    InMemoryCache,
    ApolloClient,
    ApolloLink,
    HttpLink,
} from '@apollo/client'

// Env
import env from '@env'

// Store
import { initializeStore } from './store'

// Utils
import { authorization } from './helpers'

// Local cache
import resolvers from './resolvers'


// Cache
const cache = new InMemoryCache();

// Links
const httpLink = new HttpLink({ uri: env.GRAPHQL_URI });
const restLink = new RestLink({ uri: env.API_URI });

// Auth middleware
const auth = new ApolloLink(
    (operation, forward) => {
        // add the authorization to the headers
        operation.setContext(authorization());
        return forward(operation);
    }
);

const client = new ApolloClient({
    cache,
    resolvers: resolvers,
    link: ApolloLink.from([auth, restLink, httpLink]),
});

// Features
enableExperimentalFragmentVariables()

// Initialize store
initializeStore(cache)

// Set reset store callback
client.onResetStore(
    () => initializeStore(cache)
)

export default client