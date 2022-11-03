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
import {
  blueBack,
  yellowBack,
  pinkBack,
  greenBack,
} from "./Redux/background/actions";

export default function Counter() {
  const [modalVisible, setModalVisible] = useState(false);

  const background = useSelector((state) => state.background.background);

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
        <Text style={styles.title_text}>Contador</Text>
        <View style={styles.countContainer}>
          <Text style={styles.counter_text}>{count}</Text>
        </View>
        <View style={styles.botonera}>
          <TouchableOpacity onPress={handleIncrement} style={styles.btn}>
            <Text style={styles.btn_text}>Sumar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDecrement}
            style={{ ...styles.btn, backgroundColor: "#e29e73" }}
          >
            <Text style={styles.btn_text}> Restar </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleOpenModal}
            style={{ ...styles.btn, backgroundColor: "#e29e73" }}
          >
            <Text style={styles.btn_text}> Cambiar fondo </Text>
          </TouchableOpacity>
        </View>
        {modalVisible && <ModalBackground toggleModal={handleOpenModal} />}
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
    backgroundColor: "#e273b8",
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
