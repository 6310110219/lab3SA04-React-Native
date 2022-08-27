import React from "react";
import { FlatList, TouchableHighlight } from "react-native";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from 'expo-constants';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate("Weather", {zipCode: code})
    }}>
        <View style= {style.zipItem}>
            <Text style= {style.place}>{place}</Text>
            <Text style= {style.code}>{code}</Text>
        </View>
    </TouchableHighlight>

)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
            data = {availableZipItems}
            key = {_keyExtractor}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
          />
          <StatusBar style="auto" />
        </View>  
    )
}

const style = StyleSheet.create(
    {
      zipItem: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },

      place: {
        flex: 2,
        fontSize: 24,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center',
        // margin: 3,
      },

      code: {
        flex: 2,
        fontSize: 24,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center',
        // margin: 3,
      }
    }
  ) 