import { useNavigation } from "@react-navigation/native"; 
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

export default function Mol() {
const navigation = useNavigation();
const toBack = () => {
  navigation.goBack();
};
const [weightNum,setweightNum] = useState(0)
const [solutionNum,setsolutionNum] = useState(0)
const [finalNum,setfinalNum] = useState(0)

let requiredNum = 0;

  return (
    <View style={styles.container}>
      <Text>モル計算</Text>


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
