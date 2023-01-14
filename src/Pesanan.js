import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Data, DATAFav} from './Menu/Data';

  
const Item = ({ Nama, ket, harga }) => (
    <View style={{backgroundColor: 'white', height: 80, marginTop: 15, marginHorizontal: 15, flexDirection: "row", borderRadius: 10}}>
      <View style={{flex: 5, alignItems: 'center', flexDirection: 'row', }}>
          <View style={{height: 70, width: 70, backgroundColor: 'orange', borderRadius: 35, marginHorizontal: 15}}></View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>{Nama}</Text>
            <Text style={{color: 'black'}}>{ket}</Text>
          </View>
      </View>
      <View style={{flex: 2, flexDirection: 'column', justifyContent: 'center', }}>
          <Text style={styles.harga1}>Rp {harga}</Text>
          <View style={styles.harga2}>
              <View style={styles.harga3}></View>
              <View style={styles.harga3}></View>
              <View style={styles.harga3}></View>
          </View>
      </View>
    </View>
);

export default function Pesanan({navigation, Data}) {
  const renderItem = ({ item }) => (
    <Item 
        Nama={item.Nama}
        ket={item.ket}
        harga={item.harga}
    />
  );
  return (
    <SafeAreaView>
      <View style={{height: 60, marginTop: 15, marginLeft: 15, marginRight: 15}}>
          <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>Pesanan Saya</Text>
          <Text style={{color: 'black', fontSize: 15,}}>Masakan Anak Kos</Text>
      </View>

      <View style={{color: 'white', height: 15, backgroundColor: 'orange'}}></View>
      
      <ScrollView>
        <View style={{height: 666, width: 410, justifyContent: 'center', alignSelf: 'center',}}>
          <FlatList
            data={DATAFav}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={{height: 40, width: 200, marginTop: 10, backgroundColor: 'white', borderRadius: 20, alignSelf: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Cekout Pesanan</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  menupesanan1:{
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  menupesanan2: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  harga1: {
  color: 'black',
  fontWeight: 'bold',
  fontSize: 15,
  textAlign: 'center'
  },
  harga2: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'stretch',
  },
  harga3: {
  height: 10,
  width: 10,
  backgroundColor: 'gray',
  borderRadius: 5,
  },
})