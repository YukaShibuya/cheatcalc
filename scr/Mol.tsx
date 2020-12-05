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

// 必要な分子量を渡す変数
const [mol,setMol] = useState();
// 必要なモル数を渡す変数
const[]=useState();
// 必要な液量を渡す変数
const[]= useState();
// 計算された試薬必要量を渡す変数
const[] = useState();





  return (
    <View style={styles.container}>
      <Text>モル濃度計算</Text>

      <Text>g/mol</Text>
      <Text>分子量</Text>

      <Text>mM</Text>
      <Text>モル</Text>

      <Text>ml</Text>
      <Text>液量</Text>


      <Text>mg</Text>

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
