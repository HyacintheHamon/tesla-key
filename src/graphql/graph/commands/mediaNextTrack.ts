// Graphql
import { gql } from '@apollo/client'


export type MediaNextTrackArgs = {
    id: string,
}

export type MediaNextTrackPayload = {
    reason: string,
    result: boolean,
}

export type MediaNextTrackResult = {
    MediaNextTrack: MediaNextTrackPayload,
}

export const MEDIA_NEXT_TRACK = gql`
    mutation MediaNextTrack(
        $input: MediaNextTrackInput!
        $id: String!
    ) {
        MediaNextTrack(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/media_next_track"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Skips to the next track in the current playlist.
{
  "reason": "",
  "result": true
}
*/