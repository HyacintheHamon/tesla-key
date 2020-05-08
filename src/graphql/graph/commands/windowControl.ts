// Graphql
import { gql } from '@apollo/client'

export type WindowControlArgs = {
    input: {
        command: String, // What action to take with the windows. Allows the values "vent" and "close"
        lat: Number, // Your current latitude
        lon: Number // Your current longitude.
        // lat and lon values must be near the current location of the car for close operation to succeed. 
        // For vent, the lat and lon values are ignored, and may both be 0 (which has been observed from the app itself).
    },
    id: string,
}

export type WindowControlPayload = {
    reason: string,
    result: boolean,
}

export type WindowControlResult = {
    windowControl: WindowControlPayload,
}

export const WINDOW_CONTROL = gql`
    mutation WindowControl(
        $input: WindowControlInput!
        $id: String!
    ) {
        windowControl(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/window_control"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Controls the windows. Will vent or close all windows simultaneously.
{
  "reason": "",
  "result": true
}
*/