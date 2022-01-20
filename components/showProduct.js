import * as React from 'react';
import { Text, View, StyleSheet, 
         TouchableHighlight, Dimensions, 
         ScrollView } from 'react-native';
import Constants from 'expo-constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function ShowProduct(props) {
  
  const navigateTo = () => {}

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
        <TouchableHighlight onPress={navigateTo}><View style={{width:windowWidth-50, height:150}}></View></TouchableHighlight>
      </View>

      <View style={styles.mainPage}>
        <ScrollView>
          <View style={styles.description}></View>
          <View style={styles.commentsSection}></View>
        </ScrollView>
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
    height: windowHeight - 290,
    width: windowWidth,
    display: "flex",
    alignContent: "space-evenly",
    flexWrap: "wrap",
    marginTop: 20
  },

  featured: {
    width: windowWidth - 50,
    height: 150,
    backgroundColor: "silver",
    borderRadius: 5,
    marginTop: 20,
    margin: "auto"
  },

  pageElement: {
    margin: 10,
    backgroundColor: "#001b67",
    height: 150,
    width: 250,
    borderRadius: 5
  },

  description: {
    margin: "auto",
    width: windowWidth - 60,
    height: 300,
    backgroundColor: "silver",
    borderRadius: 5
  },

  commentsSection: {
    margin: "auto",
    marginTop: 50,
    width: windowWidth - 30,
    height: 300,
    backgroundColor: "silver",
    borderRadius: 5
  }
});