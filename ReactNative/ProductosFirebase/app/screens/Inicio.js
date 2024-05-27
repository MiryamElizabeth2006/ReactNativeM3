import { View, Text, Button, StyleSheet } from "react-native"

export const Inicio = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Inicio</Text>
        <View style={styles.areaBotones}>
            <Button
                title="Ir a Tabs"
                onPress={() => {
                    navigation.navigate("TabsNav")
                }}
            />
            <Button
                title="Ir a Login"
                onPress={() => {
                    navigation.navigate('LoginNav')
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