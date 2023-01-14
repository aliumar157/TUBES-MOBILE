import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DATAMie, DATAMinum, DATANasi, DATASnack } from './Data';

  
const Item = ({ Nama, ket, harga }) => (
    <View style={{backgroundColor: 'white', height: 80, marginTop: 15, marginHorizontal: 15, flexDirection: "row", borderRadius: 10}}>
      <View style={{flex: 5, alignItems: 'center', flexDirection: 'row', }}>
        <Image
          style={{height: 70, width: 70, borderRadius: 35, marginHorizontal: 15, alignItems: 'center', justifyContent: 'center'}}
          source={require ('./Icon/Nasi-Goreng.png')}/>
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

export default function Menu ({navigation, route}) {
  const title = route.params.title;
  const Data = route.params.dt;
  const renderItem = ({ item }) => (
    <Item 
        Nama={item.Nama}
        ket={item.ket}
        harga={item.harga}
    />
  );
  return (
    <SafeAreaView>
      <View style={{height: 60, marginTop: 15, marginHorizontal: 15, flexDirection: 'row', alignItems: 'center',}}>
        <TouchableOpacity
          style={{width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => navigation.navigate('Beranda1')}>
          <Ionicons name={'arrow-back'} size={30} color={'black'}/>
        </TouchableOpacity>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold', textAlignVertical: 'center', marginHorizontal: 15}}>{title}</Text>
      </View>

      <View style={{color: 'white', height: 15, backgroundColor: 'orange'}}></View>

      <View style={{flexDirection: "row", marginRight: 15, margin: 15, justifyContent: 'space-evenly', borderRadius: 10}}>
        <View>
          <View style={styles.menupesanan1}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Menu', {title: 'Nasi', dt: DATANasi})}>
                <Image 
                  source={require ('./Icon/Nasi.png')}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.menupesanan2}>Nasi</Text>
        </View>
        <View>
          <View style={styles.menupesanan1}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Menu', {title: 'Minum', dt: DATAMinum})}>
                <Image 
                  source={require ('./Icon/Minum.png')}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.menupesanan2}>Minum</Text>
        </View>
        <View>
          <View style={styles.menupesanan1}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Menu', {title: 'Mie', dt: DATAMie})}>
                <Image 
                  source={require ('./Icon/Mie.png')}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.menupesanan2}>Mie</Text>
        </View>
        <View>
          <View style={styles.menupesanan1}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Menu', {title: 'Snack', dt: DATASnack})}>
                <Image 
                  source={require ('./Icon/Snack.png')}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.menupesanan2}>Snack</Text>
        </View>
      </View>

      <ScrollView>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
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