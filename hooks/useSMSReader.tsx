import { ActivityIndicator, PermissionsAndroid, StyleSheet, Text, View } from 'react-native';
import { useState , useEffect} from 'react';
const SmsAndroid = require('react-native-get-sms-android');


const useSMSReader =() => {

const [smsList,setSmsList] = useState([]);

    async function requestSMSPermissions(){
      try {

        const granted = await PermissionsAndroid.request(

            PermissionsAndroid.PERMISSIONS.READ_SMS,
            {
              title: "SMS Permission",
              message : "This app needs access to your sms messages",
              buttonNeutral: "Ask me Later",
              buttonNegative: "Deny Permissions",
              buttonPositive: "Accept Permissions"
            }
        )
        console.log(PermissionsAndroid.RESULTS.GRANTED);
        return granted == PermissionsAndroid.RESULTS.GRANTED
        
      } catch (error) {
        console.warn(error);
        return false;
        
      }
    }

    useEffect(() => {
         
        async function fetchSMS(){
            const hasPermission = await requestSMSPermissions();
              console.log(hasPermission);
            if(hasPermission){
              const filter = {
                box: 'inbox', // 'inbox' or 'sent' or 'draft'
                // read: 0, // 0 for unread SMS, 1 for SMS already read
                // address: '12345', // filter by sender
                // body: 'your filter text', // filter by SMS body
                // indexFrom: 0, // start from index 0
                maxCount: 10 // limit number of messages
                
              };

              SmsAndroid.list(
                  JSON.stringify({filter}),
                  (fail : any) => {
                    console.log('Failed fetching sms list with error:'+ fail);
                  },
                  (count:any, smsList:any) => {
                    console.log('Count: ', count);
                    const messages = JSON.parse(smsList);
                    console.log('SMS List: ', messages);
                    // Process the SMS list as needed
                    setSmsList(messages);
                  },
              )
              
            }
        }

        fetchSMS();

      }, [])
      
      return {smsList}
}

export default useSMSReader;