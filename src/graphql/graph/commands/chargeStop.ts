// Graphql
import { gql } from '@apollo/client'

export type ChargeStopArgs = {
    id: string,
}

export type ChargeStopPayload = {
    reason: string,
    result: boolean,
}

export type ChargeStopResult = {
    chargeStop: ChargeStopPayload,
}

export const CHARGE_STOP = gql`
    mutation ChargeStop(
        $input: ChargeStopInput!
        $id: String!
    ) {
        chargeStop(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/charge_stop"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// If the car is currently charging, this will stop it.
{
  "reason": "",
  "result": true
}
*/