// Utils
import * as OAuth from '../Utils/oauth'


// Auth middleware
export const authorization = () => (
    new Promise<object>((resolve, reject) => {

        OAuth.getAuthorization()
            .then(authorization => {
                if (!authorization) return null;
                return { headers: { authorization } };
            })
            .catch(reason => resolve(null));
    })
)