// Graphql
import { gql } from '@apollo/client'

export type ChargePortDoorCloseArgs = {
    id: string,
}

export type ChargePortDoorClosePayload = {
    reason: string,
    result: boolean,
}

export type ChargePortDoorCloseResult = {
    chargePortDoorClose: ChargePortDoorClosePayload,
}

export const CHARGE_PORT_DOOR_CLOSE = gql`
    mutation ChargePortDoorClose(
        $input: ChargePortDoorCloseInput!
        $id: String!
    ) {
        chargePortDoorClose(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/charge_port_door_close"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// For vehicles with a motorized charge port, this closes it.
{
  "reason": "",
  "result": true
}
*/