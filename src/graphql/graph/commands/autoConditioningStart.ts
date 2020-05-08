// Graphql
import { gql } from '@apollo/client'

export type AutoConditioningStartArgs = {
    id: string,
}

export type AutoConditioningStartPayload = {
    reason: string,
    result: boolean,
}

export type AutoConditioningStartResult = {
    autoConditioningStart: AutoConditioningStartPayload,
}

export const AUTO_CONDITIONING_START = gql`
    mutation AutoConditioningStart(
        $input: AutoConditioningStartInput!
        $id: String!
    ) {
        autoConditioningStart(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/auto_conditioning_start"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Start the climate control (HVAC) system. Will cool or heat automatically, depending on set temperature.
{
  "reason": "",
  "result": true
}
*/