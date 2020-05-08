// Graphql
import { gql } from '@apollo/client'


export type MediaVolumeDownArgs = {
    id: string,
}

export type MediaVolumeDownPayload = {
    reason: string,
    result: boolean,
}

export type MediaVolumeDownResult = {
    mediaVolumeDown: MediaVolumeDownPayload,
}

export const MEDIA_VOLUME_DOWN = gql`
    mutation MediaVolumeDown(
        $input: MediaVolumeDownInput!
        $id: String!
    ) {
        mediaVolumeDown(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/media_volume_down"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Turns down the volume of the media system.
{
  "reason": "",
  "result": true
}
*/