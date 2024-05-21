import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [valorDolares, setValorDolares] = useState("");
  const [resultadoConvertidoPMX, setResultadoConvertidoPMX] = useState("");
  const [resultadoConvertidoPC, setResultadoConvertidoPC] = useState("");
  const [resultadoConvertidoEU, setResultadoConvertidoEU] = useState("");



  //CONVERTIR A PESOS MEXICANOS
  const convertirAPesosMexicanos = () => {
    const valorDolaresFloat = parseFloat(valorDolares);
    if (!isNaN(valorDolaresFloat)) {
      const pm = (valorDolaresFloat * 16.59).toFixed(2);
      setResultadoConvertidoPMX(pm + " MXP");
    } else {
      setResultadoConvertidoPMX("Valor inválido");
      console.log("El valor ingresado no es un número válido.");
    }
  };

  //CONVERTIR A PESOS COLOMBIANOS
  const convertirAPesosColombianos = () => {
    const valorDolaresFloat = parseFloat(valorDolares);
    if (!isNaN(valorDolaresFloat)) {
      const pc = (valorDolaresFloat * 3824.14).toFixed(2);
      setResultadoConvertidoPC(pc + " COP");
    } else {
      setResultadoConvertidoPC("Valor inválido");
      console.log("El valor ingresado no es un número válido.");
    }
  };

  //CONVERTIR A EUROS
  const convertirAEuros = () => {
    const valorDolaresFloat = parseFloat(valorDolares);
    if (!isNaN(valorDolaresFloat)) {
      const e = (valorDolaresFloat * 0.92).toFixed(2);
      setResultadoConvertidoEU(e + " €");
    } else {
      setResultadoConvertidoEU("Valor inválido");
      console.log("El valor ingresado no es un número válido.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Convertidor</Text>
      <Text>PESOS MEXICANOS: {resultadoConvertidoPMX}</Text>
      <Text>PESOS COLOMBIANOS: {resultadoConvertidoPC}</Text>
      <Text>EUROS: {resultadoConvertidoEU}</Text>
      <Text>INGRESE EL VALOR EN DOLARES:</Text>
      <TextInput
        style={styles.cajaTexto}
        value={valorDolares}
        onChangeText={(val) => {
          setValorDolares(val);
        }}
        keyboardType="numeric"
      />
      <Button
        title="PESOS MEXICANOS"
        onPress={convertirAPesosMexicanos}
      />

      <Button
        title="PESOS COLOMBIANOS"
        onPress={convertirAPesosColombianos}
      />

      <Button
        title="EUROS"
        onPress={convertirAEuros}
      />
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

