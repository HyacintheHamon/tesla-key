// Graphql
import { gql } from '@apollo/client'

export type ChargeStartArgs = {
    id: string,
}

export type ChargeStartPayload = {
    reason: string,
    result: boolean,
}

export type ChargeStartResult = {
    chargeStart: ChargeStartPayload,
}

export const CHARGE_START = gql`
    mutation ChargeStart(
        $input: ChargeStartInput!
        $id: String!
    ) {
        chargeStart(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/charge_start"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// If the car is plugged in but not currently charging, this will start it charging.
{
  "reason": "",
  "result": true
}
*/