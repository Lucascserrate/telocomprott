import { StatusBar } from 'expo-status-bar'
import { NativeRouter } from 'react-router-native'
import { Provider } from 'react-redux'
import Main from './Main'

import store from './redux/store'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

//Instalar nueva fuente
//npm install @expo-google-fonts/nombreDeLaFuente

//Fonts
import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';




export default function App() {

  //<!Fonts
  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!poppinsLoaded) return null

  //>
  return (
    <>
      <StatusBar style='auto' />
      <Provider store={store}>
        <NativeRouter>
          <Main />
        </NativeRouter>
      </Provider>
    </>
  )
}
