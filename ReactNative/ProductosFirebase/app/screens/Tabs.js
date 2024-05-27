import { Button, StyleSheet, Text, View } from 'react-native'

export const Tabs = ({ navigation }) => {
    return <View style={styles.container}>
        <Text> Estoy en Tabs </Text>
        <Button
            title='Ir a Inicio'
            onPress={() => {
                navigation.navigate('InicioNav')
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});