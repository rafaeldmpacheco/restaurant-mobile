import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Container, Dish, DishPhoto, DishValue, Header, Title } from "./styles";

const response = {
  dishes: [
    {
      id: 1,
      image:
        "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/baked-chilli-jacket-potatoes.jpg",
      description:
        "This impressive baked potato is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
      id: 2,
      image:
        "https://thumbor.thedailymeal.com/Li6jFZP4s0EjJYTzA4H2lJvhAuM=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/slideshows/1952820/2121750/1-cordonbleu-shutterstock.JPG",
      description:
        "This dish originated in Switzerland, and is a riff on traditional schnitzel. But instead of just frying the pounded veal cutlet, it’s stuffed with ham and an easily meltable cheese (generally Swiss or Gruyère), rolled up into a roulade, and then deep-fried."
    },
    {
      id: 3,
      image:
        "https://assets.marthastewart.com/styles/wmax-750/d34/med105046_1109_thx_brussels_sprout/med105046_1109_thx_brussels_sprout_horiz.jpg?itok=I0yv420R",
      description:
        "This delicious seasonal vegetable becomes sweet and nutty when browned. For the best flavor and texture, make the dish just before serving."
    },
    {
      id: 4,
      image:
        "https://assets.marthastewart.com/styles/wmax-750/d35/homemade-stuffing-in-dish-mla101092/homemade-stuffing-in-dish-mla101092_horiz.jpg?itok=A3bUnnFE",
      description:
        "Studded with meaty chestnuts and fragrant with parsley and sage, this stuffing is equally good cooked inside or outside the turkey."
    }
  ]
};

export default function Dishes() {
  const [dishes, setDishes] = useState([]);
  const navigation = useNavigation();

  async function loadDishes() {
    setDishes(response.dishes);
  }

  function logOut() {
    setDishes([]);
    navigation.navigate("SignIn");
  }

  useEffect(() => {
    loadDishes();
  }, []);

  return (
    <Container>
      <Header>
        <MaterialCommunityIcons
          name="food"
          size={75}
          color="#a0131b"
        ></MaterialCommunityIcons>

        <MaterialCommunityIcons
          onPress={logOut}
          name="logout"
          size={45}
          color="#a0131b"
        ></MaterialCommunityIcons>
      </Header>

      <Title>Bem-vindo(a)!</Title>

      <FlatList
        data={dishes}
        keyExtractor={dishes => String(dishes.id)}
        renderItem={({ item: dish }) => (
          <Dish>
            <DishValue>{dish.description}</DishValue>
            <DishPhoto source={{ uri: dish.image }}></DishPhoto>
          </Dish>
        )}
      ></FlatList>
    </Container>
  );
}
