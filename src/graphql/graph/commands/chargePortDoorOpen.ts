// Graphql
import { gql } from '@apollo/client'

export type ChargePortDoorOpenArgs = {
    id: string,
}

export type ChargePortDoorOpenPayload = {
    reason: string,
    result: boolean,
}

export type ChargePortDoorOpenResult = {
    chargePortDoorOpen: ChargePortDoorOpenPayload,
}

export const CHARGE_PORT_DOOR_OPEN = gql`
    mutation ChargePortDoorOpen(
        $input: ChargePortDoorOpenInput!
        $id: String!
    ) {
        chargePortDoorOpen(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/charge_port_door_open"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Opens the charge port.
{
  "reason": "",
  "result": true
}
*/