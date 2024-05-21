import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [caja1, setCaja1] = useState("");
  const [caja2, setCaja2] = useState("");
  const [resultado, setResultado] = useState("");
  return (
    <View style={styles.container}>
      <Text>Calculadora Simple</Text>
      <TextInput
        style={styles.cajaTexto}
        value={caja1}
        onChangeText={(val) => {
          setCaja1(val);
        }}
      />
      <TextInput
        style={styles.cajaTexto}
        value={caja2}
        onChangeText={(val) => {
          setCaja2(val);
        }}
      />

      <Button
        title="SUMAR"
        onPress={() => {
          let valint1 = parseInt(caja1);
          let valint2 = parseInt(caja2);

          let suma = valint1 + valint2;
          setResultado(suma);
        }}
      />

      <Button
        title="RESTAR"
        onPress={() => {
          let valint1 = parseInt(caja1);
          let valint2 = parseInt(caja2);

          let resta = valint1 - valint2;
          setResultado(resta);
        }}
      />

      <Button
        title="MULTIPLICAR"
        onPress={() => {
          let valint1 = parseInt(caja1);
          let valint2 = parseInt(caja2);

          let multiplicacion = valint1 * valint2;
          setResultado(multiplicacion);
        }}
      />

      <Text>RESULTADO: {resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cajaTexto: {
    borderWidth: 1,
    borderColor: "black",
    paddingTop: 5,
    paddingHorizontal: 10,
  },
});
