// Graphql
import { gql } from '@apollo/client'


export type MediaVolumeUpArgs = {
    id: string,
}

export type MediaVolumeUpPayload = {
    reason: string,
    result: boolean,
}

export type MediaVolumeUpResult = {
    mediaVolumeUp: MediaVolumeUpPayload,
}

export const MEDIA_VOLUME_UP = gql`
    mutation MediaVolumeUp(
        $input: MediaVolumeUpInput!
        $id: String!
    ) {
        mediaVolumeUp(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/media_volume_up"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Turns up the volume of the media system.
{
  "reason": "",
  "result": true
}
*/