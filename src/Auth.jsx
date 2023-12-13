import { Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from '../style';
import Card from './Card';

//Requer métodos para autenticar usuário

export default function Auth({ navigation }) {
    return (
        <View style={styles.container}>
            <Image 
                style={{...styles.logo, width: 220, height: 220}}
                source={require('../assets/logo.png')} />
            <Card>
                <Text style={styles.cardText}>E-mail</Text>
                <TextInput style={styles.input} />
                <Text style={styles.cardText}>Password</Text>
                <TextInput style={styles.input} secureTextEntry={true} />
                <Button title="Log In" onPress={() => { alert("Teste")}} />
                <TouchableOpacity onPress={() => navigation.navigate('CreateUser')}>
                    <Text style={styles.linkText}>Create User</Text>
                </TouchableOpacity>
            </Card>   
        </View>
                 
    );
}