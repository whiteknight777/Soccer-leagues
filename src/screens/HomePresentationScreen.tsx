import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { View, TextField, Text, Button } from "react-native-ui-lib";

export function HomePresentationScreen() {
  return (
    <View flex marginT-140 centerV style={styles.container}>
      <Image
        style={{ width: "100%", height: "60%" }}
        source={require("../../assets/logo2.png")}
      />
      <View padding-20 flex>
        <Text text40 style={styles.title}>
          Suivez
        </Text>
        <Text text80 grey10 center>
          L' actualité,
        </Text>
        <Text text80 grey10 center>
          Les matches,
        </Text>
        <Text text80 grey10 center>
          et tout les résultats,
        </Text>
        <Text text80 grey10 center>
          de vos championnats préféres
        </Text>
      </View>
      <View padding-20 flex style={styles.leagues}>
        <Image
          style={styles.icon}
          source={require("../../assets/bg/leagues/premierLeague.png")}
        />
        <Image
          style={{ width: 50, height: 70, position: "relative", bottom: 7 }}
          source={require("../../assets/bg/leagues/ligue1.png")}
        />
        <Image
          style={styles.icon}
          source={require("../../assets/bg/leagues/serieA.png")}
        />
        <Image
          style={{ width: 130, height: 38, position: "relative", top: 2 }}
          source={require("../../assets/bg/leagues/liga.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "#23036a",
    textTransform: "uppercase",
  },
  leagues: {
    flexDirection: "row",
  },
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});
