// Graphql
import { gql } from '@apollo/client'

export type remoteSeatHeaterRequestArgs = {
    heater: Number, // The desired seat to heat. (0-5)
    level: Number, // The desired level for the heater. (0-3)
    // The heater parameter maps to the following seats:
    // 0 Driver
    // 1 Passenger
    // 2 Rear left
    // 4 Rear center
    // 5 Rear right
    id: string,
}

export type remoteSeatHeaterRequestPayload = {
    reason: string,
    result: boolean,
}

export type remoteSeatHeaterRequestResult = {
    remoteSeatHeaterRequest: remoteSeatHeaterRequestPayload,
}

export const REMOTE_SEAT_HEATER_REQUEST = gql`
    mutation remoteSeatHeaterRequest(
        $input: remoteSeatHeaterRequestInput!
        $id: String!
    ) {
        remoteSeatHeaterRequest(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/remote_seat_heater_request"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Sets the specified seat's heater level.
{
  "reason": "",
  "result": true
}
*/