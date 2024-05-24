import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Alert,
  ScrollView,
  Modal,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useState } from "react";

let productos = [
  {
    nombre: "Salchichas",
    categoria: "Embutidos",
    precioCompra: 0.55,
    precioVenta: 0.65,
    id: 100,
  },
  {
    nombre: "Chorizos",
    categoria: "Embutidos",
    precioCompra: 1.2,
    precioVenta: 1.5,
    id: 101,
  },
  {
    nombre: "Manzanas",
    categoria: "Frutas",
    precioCompra: 0.2,
    precioVenta: 0.3,
    id: 102,
  },
  {
    nombre: "Sandias",
    categoria: "Frutas",
    precioCompra: 2.75,
    precioVenta: 3.5,
    id: 103,
  },
  {
    nombre: "Pepinillos",
    categoria: "Legumbres",
    precioCompra: 0.2,
    precioVenta: 0.3,
    id: 104,
  },
];

let esNuevo = true;
let indiceSelecionado = -1;

export default function App() {
  const [txtCodigo, setTxtCodigo] = useState();
  const [txtNombre, setTxtNombre] = useState();
  const [txtCategoria, setTxtCategoria] = useState();
  const [txtPrecioCompra, setTxtPrecioCompra] = useState();
  const [txtPrecioVenta, setTxtPrecioVenta] = useState();
  const [numProductos, setNumProductos] = useState(productos.length);
  const [modalVisible, setModalVisible] = useState(false);

  let ItemProductos = ({ item, index }) => {
    return (
      <View style={styles.itemProductos}>
        <View style={styles.itemIndice}>
          <Text>{item.id}</Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>{item.nombre}</Text>
          <Text style={styles.textoSecundario}>{item.categoria}</Text>
        </View>
        <View style={styles.itemPrecio}>
          <Text style={styles.textoPrecio}>{item.precioVenta.toFixed(2)}</Text>
        </View>
        <View style={styles.itemBotones}>
          <TouchableOpacity
            style={styles.editar}
            onPress={() => {
              setTxtCodigo(item.id.toString());
              setTxtNombre(item.nombre);
              setTxtCategoria(item.categoria);
              setTxtPrecioCompra(item.precioCompra.toString());
              setTxtPrecioVenta(item.precioVenta.toString());
              esNuevo = false;
              indiceSelecionado = index;
            }}
          >
            <Text> E </Text>
          </TouchableOpacity>
          <Pressable
            style={styles.eliminar}
            onPress={() => {
              setModalVisible(true);
              indiceSelecionado = index;
            }}
          >
            <Text> X </Text>
          </Pressable>
        </View>
      </View>
    );
  };

  let limpiarProductos = () => {
    setTxtCodigo(null);
    setTxtNombre(null);
    setTxtCategoria(null);
    setTxtPrecioCompra(null);
    setTxtPrecioVenta(null);
    esNuevo = true;
  };

  let existeProductos = () => {
    return productos.some((producto) => producto.id == txtCodigo);
  };

  let guardarProductos = () => {
    if (
      !txtCodigo ||
      !txtNombre ||
      !txtCategoria ||
      !txtPrecioCompra ||
      !txtPrecioVenta
    ) {
      Alert.alert("INFO", "Llenar todos los campos");
      return;
    }

    if (esNuevo) {
      if (existeProductos()) {
        Alert.alert(
          "INFO",
          "Ya existe un producto con ese Código " + txtCodigo
        );
        return;
      } else {
        let producto = {
          id: parseInt(txtCodigo),
          nombre: txtNombre,
          categoria: txtCategoria,
          precioCompra: parseFloat(txtPrecioCompra),
          precioVenta: parseFloat(txtPrecioVenta),
        };
        productos.push(producto);
      }
    } else {
      productos[indiceSelecionado].nombre = txtNombre;
      productos[indiceSelecionado].categoria = txtCategoria;
      productos[indiceSelecionado].precioCompra = parseFloat(txtPrecioCompra);
      productos[indiceSelecionado].precioVenta = parseFloat(txtPrecioVenta);
    }
    limpiarProductos();
    setNumProductos(productos.length);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.areaCabecera}>
          <Text style={styles.textProductos}>PRODUCTOS</Text>

          <TextInput
            style={styles.txt}
            value={txtCodigo}
            placeholder="CODIGO"
            onChangeText={setTxtCodigo}
            keyboardType="numeric"
            editable={esNuevo}
          />

          <TextInput
            style={styles.txt}
            value={txtNombre}
            placeholder="NOMBRE"
            onChangeText={setTxtNombre}
          />

          <TextInput
            style={styles.txt}
            value={txtCategoria}
            placeholder="CATEGORIA"
            onChangeText={setTxtCategoria}
          />

          <TextInput
            style={styles.txt}
            value={txtPrecioCompra}
            placeholder="PRECIO DE COMPRA"
            onChangeText={(aux) => {
              setTxtPrecioCompra(aux);
              let compra = parseFloat(aux);
              let valor = compra * 0.1;
              let resultado = compra + valor;
              setTxtPrecioVenta(resultado.toFixed(2).toString());
            }}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.txt}
            value={txtPrecioVenta}
            placeholder="PRECIO DE VENTA"
            onChangeText={setTxtPrecioVenta}
            keyboardType="numeric"
            editable={false}
          />

          <View style={styles.areaBotones}>
            <Button
              title="GUARDAR"
              onPress={() => {
                guardarProductos();
              }}
            />
            <Button
              title="NUEVO"
              onPress={() => {
                limpiarProductos();
              }}
            />
            <Text>Productos: {numProductos}</Text>
          </View>
        </View>
      </ScrollView>

      <FlatList
        style={styles.lista}
        data={productos}
        renderItem={({ item, index }) => (
          <ItemProductos item={item} index={index} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />

      <View style={styles.areaPie}>
        <Text>Autor: Elizabeth Nono</Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Está seguro que quiere eliminar</Text>
            <View>
              <Button
              style={styles.aceptar}
                color="red"
                title=" Aceptar "
                onPress={() => {
                  productos.splice(indiceSelecionado, 1);
                  setNumProductos(productos.length);
                  limpiarProductos();
                  setModalVisible(!modalVisible);
                }}
              />
              <Button
                style={styles.buttonClose}
                title=" Cancelar "
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  lista: {
    flex: 1,
  },
  itemProductos: {
    backgroundColor: "honeydew",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  textoPrincipal: {
    fontSize: 20,
  },
  textoSecundario: {
    fontSize: 16,
  },
  textoPrecio: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
  areaCabecera: {
    paddingBottom: 20,
  },
  areaPie: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,
  },
  itemIndice: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemContenido: {
    flex: 2,
    paddingLeft: 5,
  },
  itemPrecio: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 10,
  },
  itemBotones: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonSpacing: {
    width: 10,
  },
  txt: {
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  areaBotones: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10,
  },
  textProductos: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  editar: {
    backgroundColor: "green",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5
  },
  eliminar: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  aceptar: {
    margin: 5
  }
});
