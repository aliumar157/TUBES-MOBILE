import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { PureComponent } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

export const Lainnya = () => {
  return (
      <SafeAreaView>
          <ScrollView>
            <View style={{height: 60, marginTop: 15, marginHorizontal: 15, flexDirection: 'row'}}>
              <Text style={{flex: 1, color: 'black', fontSize: 30, fontWeight: 'bold'}}>Barangin Resto</Text>
              <View style={{height: 50, width: 50 , backgroundColor: 'white', borderRadius: 25}}></View>
            </View>
            <View style={{color: 'white', height: 15, backgroundColor: 'orange'}}></View>
              <View style={{flex: 1}}>
                  <View style={styles.Container}>
                      <View style={{flex:1}}>
                          <Text style={styles.FontContainer}>Tentang</Text>
                      </View>
                  </View>
              </View>

              <View style={{flex: 1}}>
                  <View style={styles.Container}>
                      <View style={{flex:1}}>
                          <Text style={styles.FontContainer}>Makan Favorit</Text>
                      </View>
                  </View>
              </View>

              <View style={{flex: 1}}>
                  <View style={styles.Container}>
                      <View style={{flex:1}}>
                          <Text style={styles.FontContainer}>Kritik dan Saran</Text>
                      </View>
                  </View>
              </View>

              <View style={{flex: 1}}>
                  <View style={styles.Container}>
                      <View style={{flex:1}}>
                          <Text style={styles.FontContainer}>Nilai Aplikasi</Text>
                      </View>
                  </View>
              </View>

              <View style={{padding: 10}}>
                  <Text style={{color: 'black', textAlign: 'center'}}>App Version</Text>
                  <Text style={{color: 'gray', textAlign: 'center'}}>Hak Cipta @2023</Text>
              </View>

          </ScrollView>
      </SafeAreaView>        
  )
}
export default Lainnya

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: '5%', 
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    FonttopContainer: {
        fontSize: 20,
        color: 'black',
    },
    Container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: '5%', 
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
    },
    FontContainer: {
        fontSize: 18,
        color: 'black',
    },
  });