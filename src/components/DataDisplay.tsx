import React, { useEffect, useState } from 'react';
import { connectToDatabase } from '../utils/db';
import { Db } from 'mongodb';

const DataDisplay: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  /* useEffect(() => {
    const fetchData = async () => {
        try {
            const client = await connectToDatabase();
            const db: Db = client.db();
          const collection = db.collection('yourCollectionName');
          const result = await collection.find({}).toArray();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      

    fetchData();
  }, []); */

  return (
    <div>k</div>

   
  );
};

export default DataDisplay;
