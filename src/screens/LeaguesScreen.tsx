import React from "react";
import { StyleSheet, Alert } from "react-native";
import {
  Colors,
  ActionBar,
  View,
  Image,
  ListItem,
  Text,
} from "react-native-ui-lib";

// import { GetLeagues } from "../hooks/LeaguesHooks";
import { LoadingBox } from "../components/LoadingBox";
import { Leagues } from "../datas/Leagues";

// const options = {
//   method: "GET",
//   params: { season: "2020" },
//   headers: {
//     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//     "x-rapidapi-key": "5514451804msh17e65a3ad7fb31fp142dc4jsn826228b818f8",
//   },
// };

//   const { isLoading, isError, data } = GetLeagues(
//     "https://api-football-v1.p.rapidapi.com/v3/leagues"
//     // options
//   );

export function LeaguesScreen() {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(Leagues);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingBox />;
  }

  return (
    <View flex marginT-40 style={styles.container}>
      <View>
        <ActionBar
          actions={[
            {
              label: "Delete",
              onPress: () => Alert.alert("delete"),
              red30: true,
            },
            {
              label: "Replace Photo",
              onPress: () => Alert.alert("replace photo"),
            },
            { label: "Edit", onPress: () => Alert.alert("edit") },
          ]}
        />
      </View>
      <View>
        <Text>{JSON.stringify(data)}</Text>
        {/* <ListItem
          activeBackgroundColor={Colors.grey60}
          activeOpacity={0.3}
          height={77.5}
          onPress={() => Alert.alert(`pressed on order #${id + 1}`)}
        >
          <ListItem.Part left>
            <Image source={{ uri: row.mediaUrl }} style={styles.image} />
          </ListItem.Part>
          <ListItem.Part
            middle
            column
            containerStyle={[styles.border, { paddingRight: 17 }]}
          >
            <ListItem.Part containerStyle={{ marginBottom: 3 }}>
              <Text
                grey10
                text70
                style={{ flex: 1, marginRight: 10 }}
                numberOfLines={1}
              >
                {row.name}
              </Text>
              <Text grey10 text70 style={{ marginTop: 2 }}>
                {row.formattedPrice}
              </Text>
            </ListItem.Part>
            <ListItem.Part>
              <Text
                style={{ flex: 1, marginRight: 10 }}
                text90
                grey40
                numberOfLines={1}
              >{`${row.inventory.quantity} item`}</Text>
              <Text text90 color={statusColor} numberOfLines={1}>
                {row.inventory.status}
              </Text>
            </ListItem.Part>
          </ListItem.Part>
        </ListItem> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
