import { StatusBar } from 'expo-status-bar';
import {ImageBackground } from 'react-native';

/* Importando a fonte roboto */
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

/* Importando a fonte bai-jamjuree */
import {
  BaiJamjuree_700Bold
} from '@expo-google-fonts/bai-jamjuree';

/* Importando a imagem do blur */
import blurBg from './src/assets/bg-blur.png';

export default function App() {
  /*Constante para trazer as fontes*/
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })

  /*Uma verificação para trazer as fontes, caso não trazer, returna null*/
  if (!hasLoadedFonts){
    return null;
  }
  return (
    <ImageBackground 
      source={blurBg} 
      className="relative flex-1 items-center bg-gray-900"
      imageStyle={{position: "absolute", left: '-100%'}}
      >
        <StatusBar style="light" translucent />
    </ImageBackground>
  );
}

