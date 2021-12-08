import React from "react";
import { ImageBackground, Image } from "react-native";
import { View, TextField, Text, Button } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";

import { useAuthentication } from "../context/Authentication";
import { AppRoutes } from "../navigators/AppRoutes";

export function LoginScreen() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("Bienvenue");

  const navigation = useNavigation();
  const { setUser } = useAuthentication();

  function handleLogin() {
    // Alert.alert(`username: ${username}; password: ${password}`);
    if (username !== "" && password !== "") {
      setUser(true);
    } else {
      setMessage("username/password incorrect");
    }
  }

  const navigateToTerms = () => {
    const { TERMS_SCREEN } = AppRoutes;
    navigation.navigate(TERMS_SCREEN);
  };

  return (
    <View
      flex
      style={{
        flex: 1,
        height: 500,
      }}
    >
      <ImageBackground
        source={require("../../assets/bg/bg-login2.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%", paddingTop: 10 }}
      >
        <View
          marginT-340
          center
          flex
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <View
            flex
            marginT-100
            style={{
              flexDirection: "column",
            }}
          >
            <Image
              style={{
                width: 120,
                height: 120,
                position: "relative",
              }}
              source={require("../../assets/logo2.png")}
            />
          </View>
          <Text text40 style={{ color: "#23036a" }}>
            {message}
          </Text>
          <View
            flex
            marginT-30
            style={{
              paddingTop: 5,
              width: "70%",
              flexDirection: "column",
            }}
          >
            <TextField
              text70
              placeholder="username"
              value={username}
              onChangeText={(value: string) => {
                setMessage("Bienvenue");
                setUsername(value);
              }}
              grey10
            />
            <TextField
              text70
              placeholder="password"
              value={password}
              onChangeText={(value: string) => {
                setMessage("Bienvenue");
                setPassword(value);
              }}
              secureTextEntry
              grey10
            />
          </View>
          <View
            flex
            marginT-5
            style={{
              paddingTop: 5,
              flexDirection: "column",
            }}
          >
            <Button
              text70
              white
              label="Login"
              onPress={handleLogin}
              style={{ backgroundColor: "#23036a" }}
            />
            <Button
              link
              text70
              label="Terms & conditions"
              marginT-20
              color="#23036a"
              onPress={navigateToTerms}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
