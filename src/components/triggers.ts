/* import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'yourDatabaseName';
const collectionName = 'yourCollectionName';

const client = new MongoClient(uri);

const watchDatabaseChanges = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const changeStream = collection.watch();
    changeStream.on('change', (change) => {
      const { operationType, fullDocument } = change;

      if (operationType === 'insert') {
        const { datestamp, county } = fullDocument;
        bookFlight(datestamp, county);
        bookHotelRoom(datestamp);
        informHospitalByEmail(datestamp);
      }
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

const bookFlight = (datestamp: string, county: string) => {
  // Logic to book a flight to the county on the provided datestamp
  console.log(`Booking a flight to ${county} on ${datestamp}`);
};

const bookHotelRoom = (datestamp: string) => {
  // Logic to book a hotel room for the provided datestamp
  console.log(`Booking a hotel room for ${datestamp}`);
};

const informHospitalByEmail = (datestamp: string) => {
  // Logic to inform the hospital via email about a pending operation on the datestamp
  console.log(`Informing hospital about a pending operation on ${datestamp}`);
};

watchDatabaseChanges();
 */