import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 250,
    backgroundColor: '#ccc',
  },
  houseImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
  },
  houseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    color: '#666',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  capacity: {
    fontSize: 16,
    color: '#666',
  },
  vendorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  vendorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  vendorText: {
    flexDirection: 'column',
  },
  vendorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  vendorLocation: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
  moreLink: {
    color: '#00f',
    textDecorationLine: 'underline',
  },
  includesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  includesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  include: {
    fontSize: 14,
    marginRight: 15,
  },
  mapContainer: {
    padding: 20,
  },
  map: {
    width: '100%',
    height: 300,
  },
  rulesContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ruleItem: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  reviewsContainer: {
    padding: 20,
  },
  ratingText: {
    fontSize: 16,
    marginVertical: 5,
  },
  rating: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700', // Color dorado para las estrellas
  },
  reviewContainer: {
    marginVertical: 10,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#f9f9f9',
    paddingBottom: 30,
  },
  reserveButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#ff8000',
    alignItems: 'center',
    borderRadius: 5,
  },
  reserveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
