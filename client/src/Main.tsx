import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Você é: </Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={{ ...styles.buttom, backgroundColor: "#f00" }}>
          <Text style={styles.btnText}>Paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.buttom, backgroundColor: "#1F4788" }}
        >
          <Text style={styles.btnText}>Médico</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomContainer: {
    width: "90%",
    height: "50%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    flexWrap: "wrap",
    textAlign: "center"
  },
  btnText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    flexWrap: "wrap",
    textAlign: "center"
  },
  buttom: {
    width: 150,
    height: "20%",
    justifyContent: "center"
  }
});
