import React from "react";
import {
  Modal,
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  blueBack,
  yellowBack,
  pinkBack,
  greenBack,
} from "./Redux/background/actions";

export default function ModalBackground({ toggleModal }) {
  const dispatch = useDispatch();

  const handleBlue = () => {
    dispatch(blueBack());
  };

  const handlePink = () => {
    dispatch(pinkBack());
  };

  const handleYellow = () => {
    dispatch(yellowBack());
  };

  const handleGreen = () => {
    dispatch(greenBack());
  };

  //pasamos el toggleModal como props para poder cerrar el modal desde el componente hijo

  const [isOpen, setIsOpen] = useState(false);
  //pero volvemos a declarar el estado isOpen para poder manejarlo desde el componente hijo

  //actualizamos el estado del componente hijo con setIsOpen y del pdre con toggleModal
  const toggleIt = () => {
    setIsOpen(false);
    toggleModal();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
    >
      <View style={style.container}>
        <View style={style.card}>
          <TouchableOpacity style={style.button} onPress={handleBlue}>
            <Text style={style.btn_text}>Azul</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={handleGreen}>
            <Text style={style.btn_text}>Verde</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={handlePink}>
            <Text style={style.btn_text}>Rosa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={handleYellow}>
            <Text style={style.btn_text}>Amarillo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...style.button, backgroundColor: "#e29e73" }}
            onPress={toggleIt}
          >
            <Text style={style.btn_text}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "#e273b8",

    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    width: 200,
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 7,
    padding: 50,
  },

  btn_text: {
    textAlign: "center",
    fontSize: 23,
    color: "#fff",
  },
});
