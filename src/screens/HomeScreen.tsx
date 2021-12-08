import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AppRoutes } from "../navigators/AppRoutes";

import { LeaguesScreen } from "./LeaguesScreen";
import { SettingsScreen } from "./SettingsScreen";

const Tab = createBottomTabNavigator();

const { LEAGUES_SCREEN, SETTINGS_SCREEN } = AppRoutes;

export function HomeScreen() {
  return (
    <View flex marginT-0 style={styles.container}>
      <View flex>
        <Tab.Navigator initialRouteName={LEAGUES_SCREEN}>
          <Tab.Screen name={LEAGUES_SCREEN} component={LeaguesScreen} />
          <Tab.Screen name={SETTINGS_SCREEN} component={SettingsScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
});
