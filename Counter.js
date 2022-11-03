import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/counter/actions";
import ModalBackground from "./ModalBackground";

export default function Counter() {
  const [modalVisible, setModalVisible] = useState(false);

  const background = useSelector((state) => state.background.background);

  let colorBackground = background;

  let mainColor;
  let secColor;

  const handlerColorBackground = () => {
    switch (colorBackground) {
      case "https://img.freepik.com/premium-vector/cute-pattern-with-cats-blue-checkered-background-vector-seamless-texture-kids-fabric-wrapping-paper-design_562639-607.jpg":
        return (colorBackground = "azul");
      case "https://data.whicdn.com/images/272112429/original.jpg":
        return (colorBackground = "amarillo");
      case "https://www.todofondos.net/wp-content/uploads/1511x854-Cat-Wallpaper-Tumblr-768x434.png":
        return (colorBackground = "rosa");
      case "https://img.freepik.com/premium-vector/seamless-pattern-with-cute-white-cat-face-with-ice-cream-cartoon-flat-design-green-background_40564-669.jpg":
        return (colorBackground = "verde");
      default:
        return (colorBackground = "rosa");
    }
  };

  const handlerColores = () => {
    switch (colorBackground) {
      case "azul":
        return (mainColor = "#309bb0"), (secColor = "#73d7e2");
      case "amarillo":
        return (mainColor = "#d87341"), (secColor = "#e2a573");
      case "rosa":
        return (mainColor = "#e273b8"), (secColor = "#ea99cb");
      case "verde":
        return (mainColor = "#48b030"), (secColor = "#8cd841");
      default:
        return (mainColor = "#e273b8"), (secColor = "#e29e73");
    }
  };

  handlerColorBackground();
  handlerColores();

  const handleOpenModal = () => {
    setModalVisible(!modalVisible);
  };

  const dispatch = useDispatch();

  const count = useSelector((state) => state.count.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <ImageBackground
      source={{
        uri: background,
      }}
      style={styles.containerImage}
      imageStyle={{
        resizeMode: "cover",
        opacity: 0.3,
        padding: 0,
      }}
    >
      <View style={styles.container}>
        <StatusBar />
        <Text style={{ ...styles.title_text, color: mainColor }}>Contador</Text>
        <View style={styles.countContainer}>
          <Text style={{ ...styles.counter_text, color: mainColor }}>
            {count}
          </Text>
        </View>
        <View style={styles.botonera}>
          <TouchableOpacity
            onPress={handleIncrement}
            style={{ ...styles.btn, backgroundColor: mainColor }}
          >
            <Text style={styles.btn_text}>Sumar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDecrement}
            style={{ ...styles.btn, backgroundColor: secColor }}
          >
            <Text style={styles.btn_text}> Restar </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleOpenModal}
            style={{ ...styles.btn, backgroundColor: mainColor }}
          >
            <Text style={styles.btn_text}> Cambiar fondo </Text>
          </TouchableOpacity>
        </View>
        {modalVisible && (
          <ModalBackground
            toggleModal={handleOpenModal}
            mainColor={mainColor}
            secColor={mainColor}
          />
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#f6e9f1",
  },
  botonera: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  containerImage: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    backgroundColor: "#f6e9f1",
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  title_text: {
    fontSize: 45,
    color: "#d945a0",
    fontFamily: "sans-serif-medium",
  },

  counter_text: {
    fontSize: 60,
    fontFamily: "sans-serif-medium",
    margin: 15,
    color: "#e273b8",
  },

  countContainer: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 50,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  btn: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  btn_text: {
    fontSize: 23,
    color: "#fff",
  },
});
