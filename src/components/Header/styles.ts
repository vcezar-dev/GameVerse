import { StyleSheet } from 'react-native';
import { colors } from '@/src/constants/colors';

export const s = StyleSheet.create({
  gradient: {
    width: '100%',
    paddingTop: 35, // espaço pro status bar
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderColor: "#dbdbdbff"
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
  },
  titleAccent: {
    color: '#00E0FF', // destaque leve no "Verse"
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: '#fff',
  },
});
