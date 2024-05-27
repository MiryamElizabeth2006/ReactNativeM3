import { Text, Button, View, StyleSheet } from "react-native"

export const Login = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Estoy en Login</Text>
        <View style={styles.areaBotones}>
            <Button
                title="Ir a Inicio"
                onPress={() => {
                    navigation.navigate('InicioNav')
                }}
            />
        </View>
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    areaBotones: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20
    }
});