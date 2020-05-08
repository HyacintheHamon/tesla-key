// Graphql
import { gql } from '@apollo/client'


export type RemoteSteeringWheelHeaterRequestArgs = {
    on: Boolean // Value: true or false. True to turn on, false to turn off.
    id: string,
}

export type RemoteSteeringWheelHeaterRequestPayload = {
    reason: string,
    result: boolean,
}

export type RemoteSteeringWheelHeaterRequestResult = {
    remoteSteeringWheelHeaterRequest: RemoteSteeringWheelHeaterRequestPayload,
}

export const REMOTE_STEERING_WHEEL_HEATER_REQUEST = gql`
    mutation RemoteSteeringWheelHeaterRequest(
        $input: RemoteSteeringWheelHeaterRequestInput!
        $id: String!
    ) {
        remoteSteeringWheelHeaterRequest(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/remote_steering_wheel_heater_request"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Turn steering wheel heater on or off.
{
  "reason": "",
  "result": true
}
*/