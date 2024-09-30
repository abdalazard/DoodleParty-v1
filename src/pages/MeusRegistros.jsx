import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Logo from '../Components/Logo';
import Menu from '../Components/Navigation/Menu';
import { View } from 'react-native-web';
import { Text } from 'react-native';

export default function MeusRegistros() {
    console.log('Play')
    return (
        <View style={{ flex: 1 }} className="bg-black">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}> 
                <Logo />
                <Text className="text-white">Meus Registros</Text>

                <Menu telaAtual={"MeusRegistros"}/>
            </ScrollView>
        </View>
    );
}