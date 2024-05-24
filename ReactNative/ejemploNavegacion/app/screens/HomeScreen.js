import { View, Text, StyleSheet, Button } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>HOME</Text>

      <View style={styles.botonesContainer}>
        <Button
          title="CONTACTOS"
          onPress={() => {
            navigation.navigate("ContactsNav");
          }}
          style={styles.button}
        />
        <Button
          title="PRODUCTOS"
          onPress={() => {
            navigation.navigate("ProductsNav");
          }}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  texto: {
    marginTop: 280, // Ajusta el valor según la separación deseada entre el texto y los botones
    marginHorizontal: 163,
    fontSize: 18,
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 10, // Ajusta el valor según la separación deseada entre los botones
  },
});
