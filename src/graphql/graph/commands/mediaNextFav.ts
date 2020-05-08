// Graphql
import { gql } from '@apollo/client'


export type MediaNextFavArgs = {
    id: string,
}

export type MediaNextFavPayload = {
    reason: string,
    result: boolean,
}

export type MediaNextFavResult = {
    MediaNextFav: MediaNextFavPayload,
}

export const MEDIA_NEXT_FAV = gql`
    mutation MediaNextFav(
        $input: MediaNextFavInput!
        $id: String!
    ) {
        MediaNextFav(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/media_next_fav"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Skips to the next saved favorite in the media system.
{
  "reason": "",
  "result": true
}
*/