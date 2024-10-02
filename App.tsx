import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, PermissionsAndroid, StyleSheet, Text, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import {Asset} from 'expo-asset';
import { useState , useEffect} from 'react';
import useSMSReader from './hooks/useSMSReader';
const SmsAndroid = require('react-native-get-sms-android');




const loadDatabase = async () => {
  const dbname = "expensetrackerDB.db";
  const dbAsset = require("./assets/expensetrackerDB.db");
  const dbURI = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbname}`;

  const fileInfo = await FileSystem.getInfoAsync(dbFilePath);

  if(!fileInfo.exists){
      await FileSystem.makeDirectoryAsync(
        `${FileSystem.documentDirectory}SQLite`,
        {intermediates: true}
      );

      await FileSystem.downloadAsync(dbURI, dbFilePath);
  }
}



export default function App() {
  const [DBLoaded, setDBLoaded] = useState(false);

  const { smsList } = useSMSReader();
  console.log(smsList);
  
   useEffect(() => {
     loadDatabase()
             .then(() => setDBLoaded(false))
             .catch((e) => console.error(e));

   }, [])
   
   if(!DBLoaded){
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop:'100%'}}>
        <ActivityIndicator size={'large'}/>
        <Text>Loading Data...Please wait...</Text>
      </View>
    )
   }
   
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
