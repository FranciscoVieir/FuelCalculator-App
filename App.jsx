import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CalculatorModal from './src/Components/Modal';

function App() {
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [resultCalculator, setResultCalculator] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [recommendation, setRecommendation] = useState('');

  const formatInputValue = input => {
    const numericValue = input.replace(/[^0-9.]/g, '');
    return numericValue;
  };

  function gasCalculatorPerLiters() {
    const formattedAlcoholPrice = formatInputValue(alcoholPrice);
    const formattedGasolinePrice = formatInputValue(gasolinePrice);

    if (formattedAlcoholPrice === '' || formattedGasolinePrice === '') {
      alert('O input está vazio, por favor tente novamente.');
      return;
    }

    try {
      const total = (formattedAlcoholPrice / formattedGasolinePrice).toFixed(2);
      setResultCalculator(total);

      if (total < 0.7) {
        setRecommendation('Compensa usar álcool');
      } else {
        setRecommendation('Compensa usar gasolina');
      }

      setShowModal(true);
    } catch (error) {
      console.log('ERROR ' + error);
    }
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./src/assets/logo.png')} />
        <Text style={styles.title}>Qual a melhor opção?</Text>
      </View>

      <View style={styles.containerCalculator}>
        <View style={styles.containerPrice}>
          <Text style={styles.titlePrice}>Álcool (Preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 4.90"
            keyboardType="numeric"
            value={alcoholPrice}
            onChangeText={text => setAlcoholPrice(formatInputValue(text))}
          />
        </View>
        <View>
          <Text style={styles.titlePrice}>Gasolina (Preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 7.47"
            keyboardType="numeric"
            value={gasolinePrice}
            onChangeText={text => setGasolinePrice(formatInputValue(text))}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={gasCalculatorPerLiters}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </View>

      <CalculatorModal
        visible={showModal}
        recommendation={recommendation}
        alcoholPrice={alcoholPrice}
        gasolinePrice={gasolinePrice}
        onClose={closeModal}
        onCalculateAgain={() => {
          setShowModal(false);
          setAlcoholPrice('');
          setGasolinePrice('');
          setResultCalculator(0);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120D02',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    height: 170,
    width: 170,
  },
  title: {
    marginTop: 30,
    fontSize: 23,
    color: '#fff',
  },
  containerCalculator: {
    flex: 1,
    margin: 10,
  },
  containerPrice: {
    marginBottom: 10,
  },
  titlePrice: {
    fontSize: 17,
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#FE5D26',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalRecommendation: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalPrices: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  calculateAgainButton: {
    borderWidth: 2,
    borderColor: '#FE5D26',
    padding: 10,
    borderRadius: 12,
    marginTop: 10,
  },
  calculateAgainButtonText: {
    color: '#FE5D26',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
