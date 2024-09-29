import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Logo from '../Components/Logo';
import BotaoBranco from '../Components/Botoes/BotaoBranco';
import { View } from 'react-native-web';
import Menu from '../Components/Navigation/Menu';

export default function Inicio() {
    return (
        <View style={{ flex: 1 }}> {/* View principal com flex: 1 */}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}> 
                <Logo/>
                <View className="bg-gray items-center justify-center">
                <View className="h-96 w-[370px] border border-gray-100 items-center justify-center bg-white">
                    Tela do jogo
                </View>
                <View className="items-center mt-4"> 
                    <BotaoBranco name="Start Game" onPress={() => alert('Start Game')} />
                </View>
                </View> 
            </ScrollView>
            <Menu />
        </View>
    );
}