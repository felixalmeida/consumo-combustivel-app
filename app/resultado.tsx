import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ConsumptionBox from '../components/ConsumptionBox';

export default function Resultado() {
  const { media } = useLocalSearchParams();
  const mediaNum = parseFloat(media as string);
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';
  const backgroundColor = colorScheme === 'dark' ? '#121212' : '#FFFFFF';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Média de Consumo:</Text>
      <Text style={[styles.result, { color: textColor }]}>{mediaNum.toFixed(2)} Km/L</Text>
      <ConsumptionBox media={mediaNum} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 10 },
  result: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
});
