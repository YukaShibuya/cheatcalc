import { useNavigation } from "@react-navigation/native"; 
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

export default function Dil() {

  const navigation = useNavigation();

  const toBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>希釈計算</Text>
      
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
