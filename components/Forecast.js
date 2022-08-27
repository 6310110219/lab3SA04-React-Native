import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default function Forecast(props) {
    return (
        <View>
            <View style= {{flexDirection: 'row', justifyContent: 'center',}}>
                <Text style={styles.temp}>{props.temp}</Text>
                <Text style={styles.unit}>°C</Text>
            </View>

            <View>
                <Text style={styles.main}>{props.main}</Text>
                
            </View>
                <Text style={styles.description}>{props.description}</Text>

            <View style= {{flexDirection: 'row', justifyContent: 'space-evenly',}}>
                <View style={{marginTop: Constants.statusBarHeight,}}>
                    <Text style={styles.text}>Feel like</Text>
                    <Text style={styles.value}> {props.feels_like} °C</Text>
                    <Text style={styles.text}>Humidity</Text>
                    <Text style={styles.value}> {props.humidity}%</Text>
                </View>
                <View style={{marginTop: Constants.statusBarHeight,}}>
                    <Text style={styles.text}>Wind</Text>
                    <Text style={styles.value}> {props.wind_speed} km/h</Text>
                    <Text style={styles.text}>Pressure</Text>
                    <Text style={styles.value}> {props.pressure} hPa</Text>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        fontSize: 30,
        fontWeight: "bold", 
        textAlign: 'center',
        color: 'white',
    },

    description: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },

    text: {
        fontSize: 14,
        textAlign: 'left',
        color: 'white',
        marginTop: 8,
    },

    temp: {
        fontSize: 80, 
        fontWeight: "bold", 
        color: 'white',      
        alignItems: 'center',

    },

    value: {
        fontSize: 30, 
        fontWeight: "bold", 
        color: 'white',      
        alignItems: 'center',

    },

    unit: {
        fontSize: 30,
        color: 'white',
        lineHeight: 60,
    },

});
   