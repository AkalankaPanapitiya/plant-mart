import { Platform } from 'react-native'

//let baseURL = ' /api/v1/'

let baseURL = '';

{Platform.OS == 'android' // only developing for anroid
? baseURL = 'http://10.0.2.2:4000/api/v1/' //android base url
: baseURL = 'http://localhost:4000/api/v1/'
}

export default baseURL;