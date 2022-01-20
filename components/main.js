import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import Constants from 'expo-constants';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Main(props) {
  
  const navigateTo = (to) => { props.navigation.navigate(to); };

  

  return (
    <View>
      <View style={styles.navbar}>
        <View style={styles.navElement}>
          <TouchableHighlight onPress={navigateTo}><View style={styles.navElement}></View></TouchableHighlight>
        </View>
        <View style={styles.navElement}>
          <TouchableHighlight onPress={navigateTo}><View style={styles.navElement}></View></TouchableHighlight>
        </View>
        <View style={styles.navElement}>
          <TouchableHighlight onPress={navigateTo}><View style={styles.navElement}></View></TouchableHighlight>
        </View>
      </View>

      <View style={styles.featured}>
        <TouchableHighlight onPress={() => navigateTo("showProduct")}><View style={{width:windowWidth-50, height:120}}></View></TouchableHighlight>
      </View>

      <View style={styles.mainPage}>
        <View style={styles.pageElement}>
          <TouchableHighlight onPress={() => navigateTo("productsList")}><View style={{width:120, height:80}}></View></TouchableHighlight>
        </View>
        <View style={styles.pageElement}>
          <TouchableHighlight onPress={() => navigateTo("productsList")}><View style={{width:120, height:80}}></View></TouchableHighlight>
        </View>
        <View style={styles.pageElement}>
          <TouchableHighlight onPress={() => navigateTo("productsList")}><View style={{width:120, height:80}}></View></TouchableHighlight>
        </View>
        <View style={styles.pageElement}>
          <TouchableHighlight onPress={() => navigateTo("productsList")}><View style={{width:120, height:80}}></View></TouchableHighlight>
        </View>
        <View style={styles.pageElement}>
          <TouchableHighlight onPress={() => navigateTo("productsList")}><View style={{width:120, height:80}}></View></TouchableHighlight>
        </View>
        <View style={styles.pageElement}>
          <TouchableHighlight onPress={() => navigateTo("productsList")}><View style={{width:120, height:80}}></View></TouchableHighlight>
        </View>
      </View>
      
      <View style={styles.navbar}>
        <View style={styles.navElement}>
          <TouchableHighlight onPress={navigateTo}><View style={styles.navElement}></View></TouchableHighlight>
        </View>
        <View style={styles.navElement}>
          <TouchableHighlight onPress={navigateTo}><View style={styles.navElement}></View></TouchableHighlight>
        </View>
        <View style={styles.navElement}>
          <TouchableHighlight onPress={navigateTo}><View style={styles.navElement}></View></TouchableHighlight>
        </View>
      </View>  
    </View>
  );

  
}


const styles = StyleSheet.create({
  navbar: {
    height: 50,
    width: windowWidth,
    backgroundColor: "#001b67",
    display: "flex",
    flexDirection: "row"
  },

  navElement: {
    backgroundColor: "#dadfeb",
    height: 30,
    width: 30,
    margin: "auto",
    borderRadius: 5
  },

  mainPage: {
    height: windowHeight - 260,
    width: windowWidth,
    display: "flex",
    alignContent: "space-evenly",
    flexWrap: "wrap",
    marginTop: 20
  },

  featured: {
    width: windowWidth - 50,
    height: 120,
    backgroundColor: "silver",
    borderRadius: 5,
    marginTop: 20,
    margin: "auto"
  },

  pageElement: {
    margin: 10,
    backgroundColor: "#001b67",
    height: 80,
    width: 120,
    borderRadius: 5
  }
});