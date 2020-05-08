// Graphql
import { gql } from '@apollo/client'

export type CancelSoftwareUpdateArgs = {
    id: string,
}

export type CancelSoftwareUpdatePayload = {
    reason: string,
    result: boolean,
}

export type CancelSoftwareUpdateResult = {
    cancelSoftwareUpdate: CancelSoftwareUpdatePayload,
}

export const CANCEL_SOFTWARE_UPDATE = gql`
    mutation CancelSoftwareUpdate(
        $input: CancelSoftwareUpdateInput!
        $id: String!
    ) {
        cancelSoftwareUpdate(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/cancel_software_update"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Cancels a software update, if one is scheduled and has not yet started.
{
  "reason": "",
  "result": true
}
*/