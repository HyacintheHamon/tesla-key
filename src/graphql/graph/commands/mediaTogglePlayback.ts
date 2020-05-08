// Graphql
import { gql } from '@apollo/client'


export type MediaTogglePlaybackArgs = {
    id: string,
}

export type MediaTogglePlaybackPayload = {
    reason: string,
    result: boolean,
}

export type MediaTogglePlaybackResult = {
    mediaTogglePlayback: MediaTogglePlaybackPayload,
}

export const MEDIA_TOGGLE_PLAYBACK = gql`
    mutation MediaTogglePlayback(
        $input: MediaTogglePlaybackInput!
        $id: String!
    ) {
        MediaTogglePlayback(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/media_toggle_playback"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Toggles the media between playing and paused. For the radio, this mutes or unmutes the audio.
{
  "reason": "",
  "result": true
}
*/