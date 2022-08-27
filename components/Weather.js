import React, {useState, useEffect} from 'react';
import { Text, ImageBackground, StyleSheet, View} from 'react-native';
import Forecast from './Forecast';
import Constants from 'expo-constants';
import { State } from 'react-native-gesture-handler';

export default function Weather(props) {


    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=c902ebf94f4024fe984d4ee00beb2081`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        name: json.name,
                        country: json.sys.country,
                        humidity: json.main.humidity,
                        feels_like: json.main.feels_like,
                        pressure: json.main.pressure,
                        wind_speed: json.wind.speed,
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
       
    const [forecastInfo, setForecastInfo] = useState({

        main: '',
        description: '',
        temp: 0,
        name: '',
        country: '',
        humidity: '',
        feels_like: '',
        pressure: '',
        wind_speed : '',
    }) 

    return (
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>

                <View style={styles.highlight}>
                        <Text style={styles.text}>{forecastInfo.name} {props.zipCode}/{forecastInfo.country}</Text>
                        <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    text: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        
    },

    highlight: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width:"100%", 
        height:"55%", 
        paddingTop: Constants.statusBarHeight,
    }

});