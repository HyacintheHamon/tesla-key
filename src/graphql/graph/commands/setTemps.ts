// Graphql
import { gql } from '@apollo/client'

export type SetTempsArgs = {
    driver_temp: Number // Value in Celsius. Example: 23.4
    passenger_temp: Number // Value in Celsius. Example: 23.4
    // The parameters are always in celsius, regardless of the region the car is in or the display settings of the car.
    id: string,
}

export type SetTempsPayload = {
    reason: string,
    result: boolean,
}

export type SetTempsResult = {
    setTemps: SetTempsPayload,
}

export const SET_TEMPS = gql`
    mutation SetTemps(
        $input: SetTempsInput!
        $id: String!
    ) {
        setTemps(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/set_temps"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Sets the target temperature for the climate control (HVAC) system.
{
  "reason": "",
  "result": true
}
*/