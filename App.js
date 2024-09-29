import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import CreateUser from './src/CreateUser';
import { NativeWindStyleSheet } from "nativewind";
import Inicio from './src/pages/Inicio';
import Login from './src/Login';
import Configuracoes from './src/pages/Configuracoes';
import Store from './src/pages/Store';

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [initialRoute, setInitialRoute] = useState('Login ');

  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  useEffect(() => {
    if (isAuthenticated) {
      setInitialRoute('Inicio');
    }
  }, [isAuthenticated]);

  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName={initialRoute}>
      <AuthStack.Screen name="Login" options={{ headerShown: false }}>
      {props => <Login {...props} setIsAuthenticated={setIsAuthenticated} />}
      </AuthStack.Screen>
        <AppStack.Screen name="Cadastro" component={CreateUser} options={{ headerShown: false }}/>
        <AppStack.Screen name="Store" component={Store} options={{ headerShown: false }}/>
        <AppStack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }}/>
        <AppStack.Screen name="Configuracoes" component={Configuracoes} options={{ headerShown: false }}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}