import {useNavigation} from "@react-navigation/native"; 
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {Provider as PaperProvider} from "react-native-paper";
import { greenA100, grey600 } from "react-native-paper/lib/typescript/src/styles/colors";


export default function Main() {

  const navigation = useNavigation();

  const toMol = () =>{
    navigation.navigate("Mol")
  }
  const toSta = () =>{
    navigation.navigate("Sta")
  }
  const toDil = () =>{
    navigation.navigate("Dil")
  }

  return (
    <View style={styles.container}>
      <Text>MainScreen!</Text>
      <Button onPress={toMol} title="モル濃度"/>
      <Button onPress={toSta} title="標準偏差" />
      <Button onPress={toDil} title="希釈計算" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
