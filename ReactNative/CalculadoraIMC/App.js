import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const CalcularValorIMC = () => {
    const estaturaFloat = parseFloat(cajaEstatura) / 100; // convert cm to meters
    const pesoFloat = parseFloat(cajaPeso);
    if (!isNaN(estaturaFloat) && !isNaN(pesoFloat) && estaturaFloat > 0 && pesoFloat > 0) {
      const imc = (pesoFloat / (estaturaFloat * estaturaFloat)).toFixed(2);
      if (imc >= 18.5 && imc < 25.0) {
        setIMC(imc + " - Su Peso es Normal");
      } else if (imc >= 25.0 && imc < 30.0) {
        setIMC(imc + " - Su Peso es Superior al Normal");
      } else if (imc >= 30.0) {
        setIMC(imc + " - Tiene Obesidad");
      } else {
        setIMC(imc + " - Su Peso es Inferior al Normal");
      }
      console.log(estaturaFloat);
      console.log(pesoFloat);
      console.log(imc);
    } else {
      console.log("El valor ingresado no es un número válido.");
      setIMC("El valor ingresado no es un número válido.");
    }
  };

  const [cajaEstatura, setCajaEstatura] = useState('');
  const [cajaPeso, setCajaPeso] = useState('');
  const [IMC, setIMC] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA IMC</Text>
      <TextInput
        style={styles.caja}
        value={cajaEstatura}
        onChangeText={setCajaEstatura}
        placeholder="Ingrese su Estatura en cm"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.caja}
        value={cajaPeso}
        onChangeText={setCajaPeso}
        placeholder="Ingrese su Peso en kg"
        keyboardType="numeric"
      />
      <Text style={styles.titulo}>{IMC}</Text>
      <Button 
        title="CALCULAR IMC" 
        onPress={CalcularValorIMC} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column", // eje principal es vertical
    justifyContent: "center", //vertical
    alignItems: "stretch", //horizontal
    paddingHorizontal: 50,
  },
  caja: {
    borderColor: "gray",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});

