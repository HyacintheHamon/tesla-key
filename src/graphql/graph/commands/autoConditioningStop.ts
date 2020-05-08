// Graphql
import { gql } from '@apollo/client'

export type AutoConditioningStopArgs = {
    id: string,
}

export type AutoConditioningStopPayload = {
    reason: string,
    result: boolean,
}

export type AutoConditioningStopResult = {
    autoConditioningStop: AutoConditioningStopPayload,
}

export const AUTO_CONDITIONING_STOP = gql`
    mutation AutoConditioningStop(
        $input: AutoConditioningStopInput!
        $id: String!
    ) {
        autoConditioningStop(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/auto_conditioning_stop"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Stop the climate control (HVAC) system.
{
  "reason": "",
  "result": true
}
*/