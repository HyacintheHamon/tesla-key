// Graphql
import { gql } from '@apollo/client'


export type RemoteStartDriveArgs = {
    password: String // The password for the authenticated tesla.com account.
    id: string,
}

export type RemoteStartDrivePayload = {
    reason: string,
    result: boolean,
}

export type RemoteStartDriveResult = {
    remoteStartDrive: RemoteStartDrivePayload,
}

export const REMOTE_START_DRIVE = gql`
    mutation RemoteStartDrive(
        $input: RemoteStartDriveInput!
        $id: String!
    ) {
        remoteStartDrive(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/remote_start_drive"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Enables keyless driving. There is a two minute window after issuing the command to start driving the car.
{
  "reason": "",
  "result": true
}
*/