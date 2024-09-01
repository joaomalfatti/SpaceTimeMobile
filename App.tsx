import { StatusBar } from 'expo-status-bar';
import {ImageBackground, Text, TouchableOpacity, View } from 'react-native';

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

/* Importando a imagem do Stripes e preciso colocar S maiúsculo por causa que ele vai ser um componente*/
import Stripes from './src/assets/stripes.svg';
import {styled} from 'nativewind'
const StyledStripes = styled(Stripes);

/* Importando a logo*/
import NLWLogo from './src/assets/nlw-spacetime-logo.svg'

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
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
      imageStyle={{position: "absolute", left: '-100%'}}
      >
        <StyledStripes className="absolute left-2"/>

        <View className="flex-1 items-center justify-center gap-6">
          <NLWLogo />
          {/* Aqui seria parte dos texto*/}
          <View>
            <Text className="text-center font-title text-2xl leading-tight text-gray-50"> Sua cápsula do tempo</Text>
            <Text className="text-center font-body text-base leading-relaxed text-gray-100"> Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
              com o mundo!
            </Text>
          </View>

          {/* Aqui seria parte do botão*/}
          <TouchableOpacity
            activeOpacity={0.7}
            className="rounded-full bg-green-500 px-5 py-2"
          >
            <Text className="font-alt text-sm uppercase text-black">
              Cadastrar lembrança
            </Text>
          </TouchableOpacity>

        </View>

        {/* Footer do aplicativo*/}
        <Text 
          className=" text-center font-body text-sm leading-relaxed text-gray-200"
        > 
          Feito com 💛 no NLW João Elias
        </Text>
        
        <StatusBar style="light" translucent />
    </ImageBackground>
  );
}

