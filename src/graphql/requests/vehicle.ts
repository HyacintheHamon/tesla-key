// Graphql
import gql from 'graphql-tag'


export const VEHICLE_STATE = gql`
    query VehicleState {
        vehicleState @client {
            temperature
        }
    }
`

export const SET_TEMPERATURE = gql`
    mutation SetTemperature(
        $input: SetTemperatureInput!
    ) {
        setTemperature(
            input: $input
        ) @client {
            temperature
        }
    }
`