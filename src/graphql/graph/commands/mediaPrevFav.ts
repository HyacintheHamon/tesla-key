// Graphql
import { gql } from '@apollo/client'


export type MediaPrevFavArgs = {
    id: string,
}

export type MediaPrevFavPayload = {
    reason: string,
    result: boolean,
}

export type MediaPrevFavResult = {
    mediaPrevFav: MediaPrevFavPayload,
}

export const MEDIA_PREV_FAV = gql`
    mutation MediaPrevFav(
        $input: MediaPrevFavInput!
        $id: String!
    ) {
        mediaPrevFav(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/media_prev_fav"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Skips to the previous saved favorite in the media system.
{
  "reason": "",
  "result": true
}
*/