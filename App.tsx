import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';

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
    <View className="flex items-center justify-center bg-gray-900">
      <Text className="text-5xl font-bold text-gray-50"></Text>
      <StatusBar style="light" translucent />
    </View>
  );
}

