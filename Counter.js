import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/actions";

export default function Counter() {
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
        uri: "https://www.todofondos.net/wp-content/uploads/1511x854-Cat-Wallpaper-Tumblr-768x434.png",
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
            <Text style={styles.btn_text}> Sumar </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDecrement}
            style={{ ...styles.btn, backgroundColor: "#e29e73" }}
          >
            <Text style={styles.btn_text}> Restar </Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#e273b8",
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
