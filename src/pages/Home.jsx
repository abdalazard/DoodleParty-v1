import React from 'react';
import Logo from '../Components/Logo';
import Menu from '../Components/Navigation/Menu';
import { ScrollView, Text, View } from 'react-native';
import Game from '../Components/Game/Game';
import MenuRoom from '../Components/MenuRoom/MenuRoomInicio';

export default function Home() {
    console.log('Home')
    return (
        <View className="bg-black items-center h-full">
            <View className="mb-2"> 
            <Logo estilo={"h-0 w-0"} /> 
            <Text className="text-white text-center">Bem vindo [insira usuário]</Text>

                <Text className="text-white text-center">Tema do dia: Vampiros com fome no RJ</Text>
            </View>
            <View className="h-[450px] w-[380px] relative">
                <Game />
                <MenuRoom/> 
            </View> 
            <Menu telaAtual={"Home"}/>        
        </View>
    );
}