import React, { PureComponent } from "react";
import { StyleSheet, Alert } from "react-native";
import { Text, View, ActionBar, Button } from "react-native-ui-lib";

import { useAuthentication } from "../context/Authentication";

export function SettingsScreen() {
  const { setUser, user } = useAuthentication();
  const logout = () => {
    setUser(false);
    Alert.alert(`user : ${user}`);
  };

  return (
    <View flex style={styles.container}>
      <View flex center>
        <Text>Settings</Text>
        <Button
          text70
          marginT-40
          white
          label="Logout"
          onPress={logout}
          style={{ backgroundColor: "#23036a" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
