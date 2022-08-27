import React from "react";
import { FlatList, TouchableHighlight } from "react-native";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const availableZipItems = [
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Surat Thani', code: '84000'},
    { place: 'Chumphon', code: '86000' },
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Phuket', code: '83000'},
    { place: 'Phangnga', code: '82000'},
   ]
   
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight underlayColor="#E5E6EA" onPress={() => {
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
        margin: 3,
      },

      code: {
        flex: 2,
        fontSize: 24,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center',
        margin: 3,
      },
      press: {
        color: 'white',
      },
    }
  ) 