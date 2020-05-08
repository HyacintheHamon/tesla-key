// Graphql
import { gql } from '@apollo/client'

export const GUI_SETTINGS = gql`
    query GuiSettings($id: String!) {
        state(id: $id) @rest(
            path: "/api/1/vehicles/{args.id}/data_request/gui_settings"
            type: "VehicleGuiSettings"
            method: "GET"
        ) {
                gui_24_hour_time
                gui_charge_rate_units
                gui_distance_units
                gui_range_display
                gui_temperature_units
                show_range_units
                timestamp
        }
    }
`
/* SAMPLE RESPONSE
// Returns various information about the GUI settings of the car, such as unit format and range display.
{
  "response": {
    "gui_24_hour_time": false,
    "gui_charge_rate_units": "mi/hr",
    "gui_distance_units": "mi/hr",
    "gui_range_display": "Rated",
    "gui_temperature_units": "F",
    "show_range_units": true,
    "timestamp": 1543187561462
  }
}
*/