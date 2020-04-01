import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import api from "../../services/api";
import styles from "./styles";

export default function Dishes() {
  const [dishes, setDishes] = useState([]);
  const navigation = useNavigation();

  function navigateToDetail(dish) {
    navigation.navigate("Detail", { dish });
  }

  async function loadDishes() {
    // const response = await api.get("/5df018d52f0000abc18e0f22");
    const response = {
      data: {
        dishes: [
          {
            image:
              "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/baked-chilli-jacket-potatoes.jpg",
            description:
              "This impressive baked potato is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
          },
          {
            image:
              "https://thumbor.thedailymeal.com/Li6jFZP4s0EjJYTzA4H2lJvhAuM=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/slideshows/1952820/2121750/1-cordonbleu-shutterstock.JPG",
            description:
              "This dish originated in Switzerland, and is a riff on traditional schnitzel. But instead of just frying the pounded veal cutlet, it’s stuffed with ham and an easily meltable cheese (generally Swiss or Gruyère), rolled up into a roulade, and then deep-fried."
          },
          {
            image:
              "https://assets.marthastewart.com/styles/wmax-750/d34/med105046_1109_thx_brussels_sprout/med105046_1109_thx_brussels_sprout_horiz.jpg?itok=I0yv420R",
            description:
              "This delicious seasonal vegetable becomes sweet and nutty when browned. For the best flavor and texture, make the dish just before serving."
          },
          {
            image:
              "https://assets.marthastewart.com/styles/wmax-750/d35/homemade-stuffing-in-dish-mla101092/homemade-stuffing-in-dish-mla101092_horiz.jpg?itok=A3bUnnFE",
            description:
              "Studded with meaty chestnuts and fragrant with parsley and sage, this stuffing is equally good cooked inside or outside the turkey."
          }
        ]
      }
    };
    setDishes(response.data.dishes);
  }

  useEffect(() => {
    loadDishes();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="food"
          size={75}
          color="#e02041"
        ></MaterialCommunityIcons>
      </View>
      <Text style={styles.title}>Bem-vindo!</Text>

      <FlatList
        data={dishes}
        renderItem={({ item: dish }) => (
          <View style={styles.dish}>
            <Text style={styles.dishValue}>{dish.description}</Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(dish)}
            >
              <Text style={styles.detailsButtonText}> Ver mais detalhes</Text>
              <Feather name="arrow-right" size={17} color="#e02041"></Feather>
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
