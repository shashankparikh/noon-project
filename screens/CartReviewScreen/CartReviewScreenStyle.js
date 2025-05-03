import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    itemText: {
      fontSize: 16,
    },
    emptyText: {
      textAlign: 'center',
      color: '#777',
      marginVertical: 20,
    },
    section: {
      marginTop: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    paymentMethod: {
      color: '#ff9900',
      fontSize: 16,
    },
    summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 4,
    },
    totalLabel: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    totalValue: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    placeOrderButton: {
      backgroundColor: '#ff9900',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 30,
    },
    placeOrderText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });