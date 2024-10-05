import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, TextInput, StyleSheet, BackHandler} from 'react-native';
import React, {useState, useEffect} from 'react';
import { getApiUrl } from './utils/api';
import styles from '../style';
import Card from './Components/Cards/Card';
import Modal from './Components/Modal/Modal';
import Logo from './Components/Logo';
import { NativeWindStyleSheet } from "nativewind";
import BotaoBranco from './Components/Botoes/BotaoBranco';
import BotaoPreto from './Components/Botoes/BotaoPreto';
import { ScrollView } from 'react-native-gesture-handler';

export default function Auth({ setIsAuthenticated, navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isEmailFocused = focusedField === 'email';
    const isPasswordFocused = focusedField === 'password';

    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalText, setModalText] = useState('');

    const [anyFieldFocused, setAnyFieldFocused] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    
    NativeWindStyleSheet.setOutput({
        default: "native",
    });

    const handleFocus = (field) => {
        setFocusedField(field);
        setAnyFieldFocused(true);
    };
    
    const handleBlur = (field) => {
        if (field === focusedField) {
            setAnyFieldFocused(false);
        }
    };
    
    // const login = () => {
    //     fetch(getApiUrl("login"), { 
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             email: email,
    //             password: password,
    //         }),
    //     })
    //     .then((response) => {
    //         alert("Login")
    //         return response.json();
    //     })
    //     .then((data) => {
    //         if(data.message == "Unauthorized") {
    //             setModalMessage('Acesso não autorizado!');
    //             setModalVisible(true);
    //             setModalText("Verifique de os dados inseridos por você estão de acordo com os registrados.  \n :(");
    //         }
    //         else {
    //             console.log("Sucesso!");
    //             AsyncStorage.setItem('token', data.token);
    //             setIsAuthenticated(true);
    //             navigation.navigate('Home');
    //         }
    //     })        
    //     .catch((error) => {
    //         console.log("Sua requisição deu erro! Codigo:" + error);
    //         setModalMessage('Sua requisição deu erro!');
    //         setModalVisible(true);
    //         setModalText('Um erro na requisição impediu seu acesso! \n :(');
    //     });
    // };

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
   
    
    const users = {
        "id": 1,
        "email": "1",
        "senha": "1"
    }
    const login = () => {
        
        if (users.email === email && users.senha === password) { 
            console.log("Success!");
            setIsAuthenticated(true);
            navigation.navigate('Home'); 
        } else {
            setModalMessage('Acesso não autorizado!');
            setModalVisible(true);
            setModalText("Verifique de os dados inseridos por você estão de acordo com os registrados.  \n :(");
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
    };

    return (
        <ScrollView className="bg-black">
            <Logo />
            <Card>
                <Text className="text-black text-start">E-mail</Text>
                <TextInput className="text-white" onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')} style={[styles.input, {borderColor: isEmailFocused ? 'blue' : 'gray'}]} onChangeText={setEmail} value={email}/>
                <Text className="text-black">Senha</Text>
                <TextInput className="text-white" onFocus={() => handleFocus('password')} onBlur={() => handleBlur('password')} style={[styles.input, {borderColor: isPasswordFocused ? 'blue' : 'gray'}]} onChangeText={setPassword} value={password} secureTextEntry={true} />
                <View className="mt-5">
                    <BotaoPreto
                        name="Acessar" 
                        onPress={login}
                    />
                </View>                
            </Card>
            <View className="items-center mt-10">
                <BotaoBranco
                    name="Cadastro"
                    onPress={() => navigation.navigate('CreateUser')} 
                />
            </View>            
            <Modal modalTitle={estilo.modalTitleError} visible={modalVisible} onClose={() => handleModalClose()} title={modalMessage} buttonTitle={"Me cadastrar"} buttonTitleStyle={estilo.buttonTitleError}>
                <Text className="m-4 text-center text-white">{modalText}</Text>
            </Modal>
        </ScrollView>
    );
}

const estilo = StyleSheet.create({
    buttonTitle: {
        marginTop: 10,
        backgroundColor: '#12e207',
        fontSize: 20,
        borderRadius: 5,
    },
    buttonTitleError: {
        marginTop: 10,
        backgroundColor: '#12e207',
        fontSize: 20,
        borderRadius: 5,
    },
    modalTitle: {
        fontWeight: 'bold',
        color: '#12e207',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
    modalTitleError: {
        fontWeight: 'bold',
        color: '#ff0a0a',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
    messageError: {
        color: '#ff0a0a',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 60,
    },

});