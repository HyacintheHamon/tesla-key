// Resolvers
import VehicleResolvers from './vehicle'

export default {
    Mutation: {
        ...VehicleResolvers.Mutation,
    },
    Query: {
        ...VehicleResolvers.Query,
    },
}