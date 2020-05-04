// Requests
import { VEHICLE_STATE } from '../graph/vehicle'

// Helpers
import update from 'immutability-helper'

// Utils
const delay = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
);

async function vehicleState() {
    try {

        // Fetching from API ...
        await delay(3000);

        return {
            __typename: 'VehicleState',
            temperature: 38,
        };
    } catch (e) {
        console.error(e);
        return null;
    }
}

async function setTemperature(_, { input }, { cache }) {
    try {

        const previous = cache.readQuery({
            query: VEHICLE_STATE,
        });

        // POST update ...
        await delay(2000);

        // Update store locally
        const data = update(previous, {
            vehicleState: {
                temperature: {
                    $set: input.temperature,
                }
            },
        });

        cache.writeQuery({ data, query: VEHICLE_STATE });

        return {
            vehicleState: data.vehicleState,
            __typename: 'SetTemperaturePayload',
        };

    } catch (e) {
        console.error(e);
        return null;
    }
}

export default {
    Mutation: {
        setTemperature,
    },
    Query: {
        vehicleState,
    },
}