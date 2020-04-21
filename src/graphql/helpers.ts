// Utils
import { AsyncStorage } from 'react-native'


// Auth middleware
export const authorization = () => (
    new Promise<object>((resolve, reject) => {
        AsyncStorage
            .getItem('accessToken')
            .then(token =>
                resolve(token ? {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                } : null)
            ).catch(reason =>
                resolve(null)
            )
    })
)