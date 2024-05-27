import { View, Text, StyleSheet, Button } from "react-native"


export const Productos = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Productos</Text>
        <View style={styles.areaBotones}>
            <Button
                title='Ir a Login'
                onPress={() => {
                    navigation.navigate('Login')
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