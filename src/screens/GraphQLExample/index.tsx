// React
import React, { memo } from 'react'

// Components
import { TouchableOpacity, Text, ScrollView } from 'react-native'

// Apollo
import { useQuery, useMutation } from '@apollo/client'
import * as graph from '@graphql/graph'


export default memo(() => {

    // Mutation
    //https://api.tesla-key.com/api/1/vehicles/:id/command/flash_lights
    const [flashLights] = useMutation<
        graph.FlashLightsResult,
        graph.FlashLightsArgs
    >(graph.FLASH_LIGHTS);
    
    // Query
    const { data, loading, error } = useQuery<
        graph.DriverStateResult,
        graph.DriverStateArgs
    >(
        graph.DRIVER_STATE,
        { variables: { id: '3' } }
    );

    if (error) {
        return (
            <ScrollView>
                <Text>
                    {JSON.stringify(error, null, 4)}
                </Text>
            </ScrollView>
        )
    }

    if (loading) {
        return (
            <Text>LOADING ...</Text>
        )
    }

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 20,
                paddingTop: 50,
            }}
        >
            <TouchableOpacity
                onPress={async () => {
                    const result = await flashLights({
                        variables: {
                            input: { foo: 'foo', bar: 8 },
                            id: '3',
                        },
                    });
                    console.log(result);
                }}
                style={{
                    backgroundColor: 'yellow',
                    padding: 20,
                }}
            >
                <Text>
                    FLASH LIGHTS
                </Text>
            </TouchableOpacity>

            <Text>
                {JSON.stringify(data, null, 4)}
            </Text>
        </ScrollView>
    )
})