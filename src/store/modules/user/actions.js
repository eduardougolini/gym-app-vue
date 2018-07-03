import { Alert } from 'react-native'

export default {
  loginAction: ({commit}, {credentials, navigation}) => {
    fetch('http://192.168.5.113:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    }).then((response) => response.json())
    .then((responseJson) => {
      commit('SET_USER_DATA', responseJson );
      navigation.navigate('Drawer');
    }).catch((error) => {
      Alert.alert(
        'Falha',
        'Credenciais inválidas',
        [
          {text: 'OK'}
        ],
        { cancelable: false }
      );
    });
  }
}