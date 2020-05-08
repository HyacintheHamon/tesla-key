// Graphql
import { gql } from '@apollo/client'


export type MediaPrevTrackArgs = {
    id: string,
}

export type MediaPrevTrackPayload = {
    reason: string,
    result: boolean,
}

export type MediaPrevTrackResult = {
    mediaPrevTrack: MediaPrevTrackPayload,
}

export const MEDIA_PREV_TRACK = gql`
    mutation MediaPrevTrack(
        $input: MediaPrevTrackInput!
        $id: String!
    ) {
        mediaPrevTrack(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/media_prev_track"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Skips to the previous track in the current playlist. Does nothing for streaming from Stitcher.
{
  "reason": "",
  "result": true
}
*/