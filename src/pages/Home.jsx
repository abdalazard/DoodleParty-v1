import React from 'react';
import Logo from '../Components/Logo';
import Menu from '../Components/Navigation/Menu';
import { View } from 'react-native-web';
import { ScrollView, Text } from 'react-native';
import Game from '../Components/Game/Game';
import MenuRoom from '../Components/MenuRoom/MenuRoomInicio';

export default function Home() {
    console.log('Home')
    return (
        <View className="bg-black items-center h-full">
            <View> 
                <Logo estilo="w-20 h-20"/>
                <Text className="text-white text-center">Bem vindo [insira usuário]</Text>

                <Text className="text-white text-center">Tema do dia: Vampiros com fome no RJ</Text>
            </View>
            <View  className="w-full">
                <Game />
            </View>
            <View className="mb-10">
                <MenuRoom />
            </View>
            <Menu telaAtual={"Home"}/>        
        </View>
    );
}