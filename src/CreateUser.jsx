import { Text, View, TextInput, StyleSheet, BackHandler } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../style';
import Card from './Components/Cards/Card';
import { getApiUrl } from './utils/api';
import Modal from './Components/Modal/Modal';
import Logo from './Components/Logo/';
import BotaoBranco from './Components/Botoes/BotaoBranco';
import BotaoPreto from './Components/Botoes/BotaoPreto';
import { ScrollView } from 'react-native-gesture-handler';

export default function CreateUser({ navigation }) {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalText, setModalText] = useState('');
    const [redirectOnClose, setRedirectOnClose] = useState(false);
    const [requestSuccess, setRequestSuccess] = useState(false);
    const [messageError, setMessageError] = useState('');

    const isNameFocused = focusedField === 'name';
    const isEmailFocused = focusedField === 'email';
    const isPasswordFocused = focusedField === 'password';
    const isConfirmPasswordFocused = focusedField === 'confirmPassword';

    const [anyFieldFocused, setAnyFieldFocused] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    
    const handleFocus = (field) => {
        setFocusedField(field);
        setAnyFieldFocused(true);
    };
    
    const handleBlur = (field) => {
        if (field === focusedField) {
            setAnyFieldFocused(false);
        }
    };
    
    useEffect(() => {
        const backAction = () => {
            if (anyFieldFocused) {
                handleBlur(focusedField);
                return true;
            }
            return false;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, [anyFieldFocused, focusedField]);

    const handleModalClose = () => {
        setModalVisible(false);
        if (redirectOnClose) {
            navigation.navigate('Auth');
        } 
    };

    const register = () => {
        fetch(getApiUrl("register"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                password_confirmation: confirmPassword,
            }),
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            if(data.error) {
                setModalMessage('Ocorreu um erro ao realizar o cadastro.');
                setModalText('');
                setModalVisible(true);
                setRedirectOnClose(false);
                setRequestSuccess(false);
                if (data.error.email) {
                    console.log(data.error.email);
                    setMessageError(data.error.email);
                }
                if (data.error.name) {
                    console.log(data.error.name);
                    setMessageError(data.error.name);
                }
                if (data.error.password) {
                    console.log(data.error.password);
                    setMessageError(data.error.password);
                }
                if (data.error.password_confirmation) {
                    console.log(data.error.password_confirmation);
                    setMessageError(data.error.password_confirmation);
                }
                
            } else {
                setModalMessage('Cadastro realizado com sucesso!');
                setModalText('Agora você tem acesso.');
                setModalVisible(true)
                setRedirectOnClose(true);
                setRequestSuccess(true); 
            }
        })
        .catch((error) => {
            setModalMessage('Ocorreu um erro ao realizar o cadastro.');
            setModalText('');
            setModalVisible(true);
            setRedirectOnClose(false);
            setRequestSuccess(false);
            if(error) {
                setModalMessage('Ocorreu um erro ao realizar o cadastro.');
                setModalText('');
                setModalVisible(true);
                setRedirectOnClose(false);
                setRequestSuccess(false);
                if (!error.email || !error.name || !error.password || !error.password_confirmation) {
                    console.log(error);
                    setMessageError("Erro na conexão com a API");
                } else {
                    if (error.email) {
                        console.log(error.email);
                        setMessageError(error.email);
                    }
                    if (error.name) {
                        console.log(error.name);
                        setMessageError(error.name);
                    }
                    if (error.password) {
                        console.log(error.password);
                        setMessageError(error.password);
                    }
                    if (error.password_confirmation) {
                        console.log(error.password_confirmation);
                        setMessageError(error.password_confirmation);
                    }
                }
                
            }
        });        
    };

    return (
        <ScrollView className="bg-black">
            <Logo estilo={"h-36 w-36"} /> 
            {messageError ? <Text style={estilo.messageError}>{messageError}</Text> : ''}
            <Card className="mb-5 h-96">
                <Text className="text-black text-start">Usuário</Text>
                <TextInput className="text-white" onFocus={() => handleFocus('name')} onBlur={() => handleBlur('name')} style={[styles.input, {borderColor: isNameFocused ? 'blue' : 'gray'}]} onChangeText={setName} value={name}/>
                <Text className="text-black text-start">E-mail</Text>
                <TextInput className="text-white" onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')} style={[styles.input, {borderColor: isEmailFocused ? 'blue' : 'gray'}]} onChangeText={setEmail} value={email}/>
                <Text className="text-black text-start">Senha</Text>
                <TextInput className="text-white" onFocus={() => handleFocus('password')} onBlur={() => handleBlur('password')} style={[styles.input, {borderColor: isPasswordFocused ? 'blue' : 'gray'}]} secureTextEntry={true} onChangeText={setPassword} value={password} />
                <Text className="text-black text-start">Confirmação sua senha</Text>
                <TextInput className="text-white" onFocus={() => handleFocus('confirmPassword')} onBlur={() => handleBlur('confirmPassword')} style={[styles.input, {borderColor: isConfirmPasswordFocused ? 'blue' : 'gray'}]} secureTextEntry={true} onChangeText={setConfirmPassword} value={confirmPassword}/>
                <View className="items-center mt-5">
                    <BotaoPreto
                        name="Registro" 
                        onPress={register}
                    />
                </View>
            </Card>
            <View className="items-center mt-4">
                <BotaoBranco
                    name="Acesso" 
                    onPress={() => navigation.navigate('Auth')}
                />
            </View>            
            <Modal 
                modalTitle={
                    requestSuccess ? (
                    <Text className="font-bold text-green-500 text-3xl text-center mb-6">Sucesso!</Text> 
                    ) : (
                    <Text className="font-bold text-red-500 text-3xl text-center mb-6">Erro</Text>
                    )
                }
                visible={modalVisible} 
                onClose={() => handleModalClose()} 
                title={modalMessage} 
                buttonTitle={requestSuccess ? "Fazer login." : "Tentar cadastro."} 
                buttonTitleStyle={
                    requestSuccess ? (
                    <Text className="mt-4 bg-green-500 text-2xl rounded-md">Fazer login.</Text>
                    ) : (
                    <Text className="mt-4 bg-red-500 text-2xl rounded-md">Tentar cadastro.</Text>
                    )
                }
                >
                <Text className="text-center">{modalText}</Text> {/* Usando classe padrão para centralizar o texto */}
            </Modal>           
        </ScrollView>
    );
}    

const estilo = StyleSheet.create({
buttonTitle: {
    marginTop: 10,
    backgroundColor: 'green',
    fontSize: 20,
    borderRadius: 5,
    },
buttonTitleError: {
    marginTop: 10,
    backgroundColor: 'red',
    fontSize: 20,
    borderRadius: 5,
},
modalTitle: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
},
modalTitleError: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
},
messageError: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 60,
},
linkText: {
    color: '#0000ff',
    textAlign: 'center',
    fontSize: 15,
  },
    
});