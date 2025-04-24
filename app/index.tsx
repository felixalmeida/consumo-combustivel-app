import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const [km, setKm] = useState('');
  const [litros, setLitros] = useState('');
  const router = useRouter();
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';
  const backgroundColor = colorScheme === 'dark' ? '#121212' : '#FFFFFF';

  const handleSubmit = () => {
    if (!km || !litros) return;
    const media = parseFloat(km) / parseFloat(litros);
    router.push({ pathname: '/resultado', params: { media: media.toString() } });
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.label, { color: textColor }]}>KM Percorridos:</Text>
      <TextInput
        style={[styles.input, { color: textColor, borderColor: textColor }]}
        keyboardType="numeric"
        value={km}
        onChangeText={setKm}
      />
      <Text style={[styles.label, { color: textColor }]}>Litros Consumidos:</Text>
      <TextInput
        style={[styles.input, { color: textColor, borderColor: textColor }]}
        keyboardType="numeric"
        value={litros}
        onChangeText={setLitros}
      />
      <Button title="Calcular Consumo" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  label: { fontSize: 18, marginVertical: 8 },
  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    marginBottom: 10
  },
});
