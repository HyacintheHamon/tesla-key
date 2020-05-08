// Graphql
import { gql } from '@apollo/client'

export const VEHICLE_CONFIG = gql`
    query VehicleConfig($id: String!) {
        state(id: $id) @rest(
            path: "/api/1/vehicles/{args.id}/data_request/vehicle_config"
            type: "VehicleConfig"
            method: "GET"
        ) {
            can_accept_navigation_requests
            can_actuate_trunks
            car_special_type
            car_type
            charge_port_type
            eu_vehicle
            exterior_color
            has_air_suspension
            has_ludicrous_mode
            key_version
            motorized_charge_port
            perf_config
            plg
            rear_seat_heaters
            rear_seat_type
            rhd
            roof_color
            seat_type
            spoiler_type
            sun_roof_installed
            third_row_seats
            timestamp
            trim_badging
            wheel_type
        }
    }
`
/* SAMPLE RESPONSE
// Returns the vehicle's configuration information including model, color, badging and wheels.
{
  "response": {
    "can_accept_navigation_requests": true,
    "can_actuate_trunks": true,
    "car_special_type": "base",
    "car_type": "models2",
    "charge_port_type": "US",
    "eu_vehicle": false,
    "exterior_color": "White",
    "has_air_suspension": true,
    "has_ludicrous_mode": false,
    "key_version": 1,
    "motorized_charge_port": true,
    "perf_config": "P2",
    "plg": true,
    "rear_seat_heaters": 0,
    "rear_seat_type": 0,
    "rhd": false,
    "roof_color": "None",
    "seat_type": 2,
    "spoiler_type": "None",
    "sun_roof_installed": 2,
    "third_row_seats": "None",
    "timestamp": 1538364666096,
    "trim_badging": "p90d",
    "wheel_type": "AeroTurbine19"
  }
}
*/