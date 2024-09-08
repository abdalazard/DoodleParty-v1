import { Text, View, TextInput, Button, TouchableOpacity, Image, KeyboardAvoidingView, StyleSheet, BackHandler } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../style';
import Card from './Components/Card';
import { getApiUrl } from './utils/api';
import Modal from './Components/Modal';
import Logo from './Components/Logo';
import BotaoBranco from './Components/BotaoBranco';
import BotaoPreto from './Components/BotaoPreto';

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
        <View className="container flex items-center justify-center flex-1 p-6 bg-white">
            {messageError ? <Text style={estilo.messageError}>{messageError}</Text> : ''}
            <View className="items-center mb-10">
                <Logo />
            </View>
            {/* <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={50}
            > */}
                
                <Card>
                    <Text className="text-white text-start">Username</Text>
                    <TextInput onFocus={() => handleFocus('name')} onBlur={() => handleBlur('name')} style={[styles.input, {borderColor: isNameFocused ? 'blue' : 'gray'}]} onChangeText={setName} value={name}/>
                    <Text className="text-white text-start">E-mail</Text>
                    <TextInput onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')} style={[styles.input, {borderColor: isEmailFocused ? 'blue' : 'gray'}]} onChangeText={setEmail} value={email}/>
                    <Text className="text-white text-start">Password</Text>
                    <TextInput onFocus={() => handleFocus('password')} onBlur={() => handleBlur('password')} style={[styles.input, {borderColor: isPasswordFocused ? 'blue' : 'gray'}]} secureTextEntry={true} onChangeText={setPassword} value={password} />
                    <Text className="text-white text-start">Password confirmation</Text>
                    <TextInput onFocus={() => handleFocus('confirmPassword')} onBlur={() => handleBlur('confirmPassword')} style={[styles.input, {borderColor: isConfirmPasswordFocused ? 'blue' : 'gray'}]} secureTextEntry={true} onChangeText={setConfirmPassword} value={confirmPassword}/>
                    <BotaoBranco
                        name="Registro" 
                        onPress={register}
                    />
                </Card>
            {/* </KeyboardAvoidingView> */}
            <View>
                <BotaoPreto
                    name="Log In" 
                    onPress={() => navigation.navigate('Auth')}
                />
            </View>            
            
            <Modal modalTitle={requestSuccess ? estilo.modalTitle : estilo.modalTitleError} visible={modalVisible} onClose={() => handleModalClose()} title={modalMessage} buttonTitle={requestSuccess ? "Fazer login." : "Tentar cadastro."} buttonTitleStyle={requestSuccess ? estilo.buttonTitle : estilo.buttonTitleError}>
                <Text style={estilo.modalText}>{modalText}</Text>
            </Modal>            
        </View>
    );
}    

const estilo = StyleSheet.create({
card: {
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
},
modalText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    },
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