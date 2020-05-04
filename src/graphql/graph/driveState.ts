// Graphql
import { gql } from '@apollo/client'


export type DriverStateArgs = {
    id: string,
}

export type DriverStatePayload = {
    nativeLocationSupported: number,
    nativeLongitude: number,
    nativeLatitude: number,
    shiftState: unknown,
    nativeType: string,
    timestamp: number,
    longitude: number,
    latitude: number,
    heading: number,
    gpsAsOf: number,
    speed: number,
    power: number,
}

export type DriverStateResult = {
    driverState: DriverStatePayload,
}

export const DRIVER_STATE = gql`
    query DriverState($id: String!) {
        driverState(id: $id) @rest(
            path: "/api/1/vehicles/{args.id}/data_request/drive_state"
            type: "DriverState"
            method: "GET"
        ) {
            nativeLocationSupported: native_location_supported
            nativeLongitude: native_longitude
            nativeLatitude: native_latitude
            nativeType: native_type
            shiftState: shift_state
            gpsAsOf: gps_as_of
            timestamp
            longitude
            latitude
            heading
            speed
            power
        }
    }
`