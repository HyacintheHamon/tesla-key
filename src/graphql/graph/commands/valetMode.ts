// Graphql
import { gql } from '@apollo/client'

export type ValetModeArgs = {
    input: {
        on: Boolean, // true to activate, false to deactivate.
        password: String // A PIN to deactivate Valet Mode. 
        // The password parameter isn't required to turn on or off Valet Mode, even with a previous PIN set.
        // If you clear the PIN and activate Valet Mode without the parameter, you will only be able to deactivate it from your car's screen by signing into your Tesla account
    },
    id: string,
}

export type ValetModePayload = {
    reason: string,
    result: boolean,
}

export type ValetModeResult = {
    valetMode: ValetModePayload,
}

export const VALET_MODE = gql`
    mutation ValetMode(
        $input: ValetModeInput!
        $id: String!
    ) {
        valetMode(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/set_valet_mode"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Activates or deactivates Valet Mode.
{
  "reason": "",
  "result": true
}
*/