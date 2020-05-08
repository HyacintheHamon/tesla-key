// Graphql
import { gql } from '@apollo/client'

export type SunroofControlArgs = {
    state: String, // "vent" or "close"
    // The amount to open the sunroof. Currently this only allows the values "vent" and "close." 
    // There were state options for open (100%), comfort (~80%), and move (combined with a percent parameter), 
    // but they have since been disabled server side. It is unknown if they will return at a later time.
    id: string,
}

export type SunroofControlPayload = {
    reason: string,
    result: boolean,
}

export type SunroofControlResult = {
    sunroofControl: SunroofControlPayload,
}

export const SUNROOF_CONTROL = gql`
    mutation SunroofControl(
        $input: SunroofControlInput!
        $id: String!
    ) {
        sunroofControl(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/sun_roof_control"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Controls the panoramic sunroof on the Model S.
{
  "reason": "",
  "result": true
}
*/