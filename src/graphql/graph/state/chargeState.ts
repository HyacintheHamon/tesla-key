// Graphql
import { gql } from '@apollo/client'

export const CHARGE_STATE = gql`
    query ChargeState($id: String!) {
        state(id: $id) @rest(
            path: "/api/1/vehicles/{args.id}/data_request/charge_state"
            type: "VehicleChargeState"
            method: "GET"
        ) {
              battery_heater_on
              battery_level
              battery_range 
              charge_current_request 
              charge_current_request_max 
              charge_enable_request 
              charge_energy_added 
              charge_limit_soc 
              charge_limit_soc_max 
              charge_limit_soc_min 
              charge_limit_soc_std
              charge_miles_added_ideal 
              charge_miles_added_rated 
              charge_port_cold_weather_mode 
              charge_port_door_open 
              charge_port_latch 
              charge_rate 
              charge_to_max_range 
              charger_actual_current
              charger_phases
              charger_pilot_current
              charger_power
              charger_voltage
              charging_state
              conn_charge_cable
              est_battery_range
              fast_charger_brand
              fast_charger_present
              fast_charger_type
              ideal_battery_range
              managed_charging_active
              managed_charging_start_time
              managed_charging_user_canceled
              max_range_charge_counter
              minutes_to_full_charge
              not_enough_power_to_heat
              scheduled_charging_pending
              scheduled_charging_start_time
              time_to_full_charge
              timestamp
              trip_charging
              usable_battery_level 
              user_charge_enable_request 
        }
    }
`
/* SAMPLE RESPONSE
// Information on the state of charge in the battery and its various settings.
{
  "response": {
    "battery_heater_on": false,
    "battery_level": 64,
    "battery_range": 167.96,
    "charge_current_request": 48,
    "charge_current_request_max": 48,
    "charge_enable_request": true,
    "charge_energy_added": 12.41,
    "charge_limit_soc": 90,
    "charge_limit_soc_max": 100,
    "charge_limit_soc_min": 50,
    "charge_limit_soc_std": 90,
    "charge_miles_added_ideal": 50.0,
    "charge_miles_added_rated": 40.0,
    "charge_port_cold_weather_mode": false,
    "charge_port_door_open": false,
    "charge_port_latch": "Engaged",
    "charge_rate": 0.0,
    "charge_to_max_range": false,
    "charger_actual_current": 0,
    "charger_phases": null,
    "charger_pilot_current": 48,
    "charger_power": 0,
    "charger_voltage": 0,
    "charging_state": "Disconnected",
    "conn_charge_cable": "<invalid>",
    "est_battery_range": 116.67,
    "fast_charger_brand": "<invalid>",
    "fast_charger_present": false,
    "fast_charger_type": "<invalid>",
    "ideal_battery_range": 209.95,
    "managed_charging_active": false,
    "managed_charging_start_time": null,
    "managed_charging_user_canceled": false,
    "max_range_charge_counter": 0,
    "minutes_to_full_charge": 0,
    "not_enough_power_to_heat": false,
    "scheduled_charging_pending": false,
    "scheduled_charging_start_time": null,
    "time_to_full_charge": 0.0,
    "timestamp": 1543187621530,
    "trip_charging": false,
    "usable_battery_level": 64,
    "user_charge_enable_request": null
  }
}
*/