import { Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList, Image} from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { DATAMie, DATAMinum, DATANasi, DATASnack, DATAFav} from './Menu/Data';


const Item = ({ Nama, ket, harga, gmbr }) => (
    <View style={{backgroundColor: 'white', height: 80, marginTop: 15, flexDirection: "row", marginRight: 15, marginLeft: 15, borderRadius: 10}}>
      <View style={{flex: 5, alignItems: 'center', flexDirection: 'row', }}>
        <Image
            style={{height: 70, width: 70, borderRadius: 35, marginHorizontal: 15, alignItems: 'center', justifyContent: 'center'}}
            source={require ('./Menu/Icon/Nasi-Goreng.png')}/>
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

export const Beranda = ({navigation}) => {
    const renderItem = ({ item }) => (
        <Item 
            Nama={item.Nama}
            ket={item.ket}
            harga={item.harga}
        />
    );
    return (
        <SafeAreaView>
            <ScrollView>
                {/* Barangin Resto */}
                <View style={{height: 60, marginTop: 15, marginLeft: 15, marginRight: 15}}>
                    <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>Barangin Resto</Text>
                    <Text style={{color: 'black', fontSize: 15,}}>Mau makan apa hari ini?</Text>
                </View>
                {/* Menu Pencarian */}
                <View style={{flex: 1, flexDirection: "row", marginTop: 15, marginHorizontal: 15, justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput style={{flex:1, height: 40, borderWidth: 1, marginRight: 15, borderRadius: 25, color: 'black'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'white',  borderRadius: 25}}></View>
                </View>
                
                {/* Tampilan Diskon */}
                <View style={styles.diskon}>
                    <View style={styles.diskon1}></View>
                    <View style={{flex: 2, justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'left'}}>Diskon 10%</Text>
                        <Text style={{fontSize: 15, color: 'white'}}>Pesan makanan dengan aplikasi dan dapatkan diskon</Text>
                        <View style={{height: 20, width: 100, marginTop: 10, backgroundColor: 'white', borderRadius: 10}}>
                            <Text style={styles.menupesanan2}>Claim Sekarang</Text>
                        </View>
                    </View>
                </View>

                {/* Menu Pesanan */}
                <View style={{flexDirection: "row", marginRight: 15, margin: 15, justifyContent: 'space-evenly', borderRadius: 10}}>
                    <View>
                    <View style={styles.menupesanan1}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Menu', {title: 'Nasi', dt: DATANasi})}>
                            <Image 
                            source={require ('./Menu/Icon/Nasi.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.menupesanan2}>Nasi</Text>
                    </View>
                    <View>
                    <View style={styles.menupesanan1}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Menu', {title: 'Minum', dt: DATAMinum})}>
                            <Image 
                            source={require ('./Menu/Icon/Minum.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.menupesanan2}>Minum</Text>
                    </View>
                    <View>
                    <View style={styles.menupesanan1}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Menu', {title: 'Mie', dt: DATAMie})}>
                            <Image 
                            source={require ('./Menu/Icon/Mie.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.menupesanan2}>Mie</Text>
                    </View>
                    <View>
                    <View style={styles.menupesanan1}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Menu', {title: 'Snack', dt: DATASnack})}>
                            <Image 
                            source={require ('./Menu/Icon/Snack.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.menupesanan2}>Snack</Text>
                    </View>
                </View>
                </ScrollView>
                {/* Menu Rekomendasi */}
                <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 10, marginRight: 15, marginLeft: 15,}}>Rekomendasi</Text>
                <FlatList
                    data={DATAFav}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
        </SafeAreaView>
    )
}

export default Beranda

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
    },
    baris: {
        flex: 1,
        marginTop: 10,
        backgroundColor: 'green',
        flexDirection: "row",
    },
    kolom: {
        flex: 1,
        marginTop: 10,
        backgroundColor: 'blue',
        flexDirection: "column",
    },
    diskon: {
        backgroundColor: 'orange',
        height: 130,
        margin: 15,
        borderRadius: 20,
        padding: 15,
        flexDirection: "row",
    },
    diskon1: {
        height: 100,
        width: 100,
        backgroundColor: 'yellow',
        alignSelf: 'flex-start',
        marginRight: 20,
        borderRadius: 50,
    },
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
