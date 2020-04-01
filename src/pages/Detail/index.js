import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const dish = route.params.dish;

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="food"
          size={75}
          color="#e02041"
        ></MaterialCommunityIcons>

        <TouchableOpacity style={styles.detailsButton} onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041"></Feather>
        </TouchableOpacity>
      </View>

      <View style={styles.dish}>
        <Text style={styles.dishValue}>{dish.description}</Text>
      </View>
    </View>
  );
}
