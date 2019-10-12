import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

// setup your `RestLink` with your endpoint
const restLink = new RestLink({ uri: "https://owner-api.teslamotors.com/api/1/vehicles/" });

// setup your client
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const getVehicleData = gql`
    query postTitle {
      get @rest(type: "Get", path: "${vehicleId}/vehicle_data", endpoint: "v1") {
        id
        title
      }
    }
  `;