import { View, Text, StyleSheet, useColorScheme } from 'react-native';

const getStyleAndLabel = (media: number) => {
  if (media > 12) return { label: 'A - Excelente', bg: '#32CD32' };
  if (media > 10) return { label: 'B - Bom', bg: '#90EE90' };
  if (media > 8) return { label: 'C - Regular', bg: '#FFD700' };
  if (media > 4) return { label: 'D - Ruim', bg: '#FFA500' };
  return { label: 'E - Péssimo', bg: '#FF4500' };
};

export default function ConsumptionBox({ media }: { media: number }) {
  const { label, bg } = getStyleAndLabel(media);
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';

  return (
    <View style={[styles.box, { backgroundColor: bg }]}>
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 20, borderRadius: 8, minWidth: 200 },
  text: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
});
