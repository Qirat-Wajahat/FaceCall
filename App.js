import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as React from "react";
import SignIn from "./src/screens/SignIn";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#008DFE" barStyle="light-content" />
        <View style={{ flex: 1 }}>
          {/* <Header /> */}
          <SignIn />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
