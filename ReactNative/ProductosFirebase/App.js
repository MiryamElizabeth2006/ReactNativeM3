import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';
import { Inicio } from './app/screens/Inicio'
import { Tabs } from './app/screens/Tabs';
import { Login } from './app/screens/Login';
import { Productos } from './app/screens/Productos';
import { ContenidoA } from './app/screens/ContenidoA';
import { ContenidoB } from './app/screens/ContenidoB';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DrawerNav = () => {
  return <Drawer.Navigator>
    <Drawer.Screen name='InicioNav' component={Inicio} options={{ title: 'Inicio' }} />
    <Drawer.Screen name='TabsNav' component={TabNav} options={{ title: 'Tabs' }} />
    <Drawer.Screen name='LoginNav' component={Login} options={{ title: "Login", headerShown: false }} />
  </Drawer.Navigator>
}

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='TabsNavTap' component={Tabs} />
      <Stack.Screen name='ProductosNavTap' component={Productos} />
    </Stack.Navigator>
  )
}

const TabNav = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name='TabContenidoA' component={ContenidoA}
        options={{
          headerShown:false,
          tabBarLabel:"Configuracion",
          tabBarIcon:()=>{
            return  <Icon name='tool' type='ant-design' color='blue'size={24} />
          }
          }}
      />
      <Tab.Screen name='TabContenidoB' component={ContenidoB}
        options={{
          headerShown:false,
          tabBarLabel:"Configuracion",
          tabBarIcon:()=>{
            return  <Icon name='mail' type='ant-design' color='blue'size={24} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
