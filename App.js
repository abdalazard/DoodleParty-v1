import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import Auth from './src/Auth';
import CreateUser from './src/CreateUser';
import Home from './src/pages/Home';
import { NativeWindStyleSheet } from "nativewind";
import Config from './src/pages/Config';
import MeusRegistros from './src/pages/MeusRegistros';

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initialRoute, setInitialRoute] = useState('Auth');

  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  useEffect(() => {
    if (isAuthenticated) {
      setInitialRoute('Home');
    }
  }, [isAuthenticated]);

  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName={initialRoute}>
      <AuthStack.Screen name="Auth" options={{ headerShown: false }}>
      {props => <Auth {...props} setIsAuthenticated={setIsAuthenticated} />}
      </AuthStack.Screen>
        <AuthStack.Screen name="CreateUser" component={CreateUser} options={{ headerShown: false }}/>
        <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <AppStack.Screen name="Config" component={Config} options={{ headerShown: false }}/>
        <AppStack.Screen name="MeusRegistros" component={MeusRegistros} options={{ headerShown: false }}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}