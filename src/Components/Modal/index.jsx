import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

function CalculatorModal({
  visible,
  recommendation,
  alcoholPrice,
  gasolinePrice,
  onClose,
  onCalculateAgain,
}) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Image
            source={require('../../assets/gas.png')}
            style={styles.gasImage}
          />
          <View style={styles.modalContent}>
            <Text style={styles.modalRecommendation}>{recommendation}</Text>
            <Text style={styles.modalText}>Com os preços:</Text>
            <Text style={styles.modalPrices}>Álcool: R$ {alcoholPrice}</Text>
            <Text style={styles.modalPrices}>Gasolina: R$ {gasolinePrice}</Text>
            <TouchableOpacity
              style={styles.calculateAgainButton}
              onPress={onCalculateAgain}>
              <Text style={styles.calculateAgainButtonText}>
                Calcular Novamente
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  gasImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
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

export default CalculatorModal;
