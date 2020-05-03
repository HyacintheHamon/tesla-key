// Apollo
import { gql, InMemoryCache } from '@apollo/client'

// App
import app from '../../app.json'

// Types
import { Store } from './types'


const store: Store = {
    appName: app.name,
}

export const initializeStore = async (
    cache: InMemoryCache
) => {
    cache.writeQuery({
        data: store,
        query: gql`
            query {
                appName
            }
        `,
  });
}