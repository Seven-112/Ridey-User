import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from './Invite.styles';
import { check, request, RESULTS, PERMISSIONS } from 'react-native-permissions';
import Contacts from 'react-native-contacts';
import Sms from 'react-native-sms';
import AndroidSms from 'react-native-get-sms-android';
import { InviteMockData } from '../../Mocks/InviteMocks'
import dummyUser from '../../assets/images/dummyUser.jpg';
import SearchIcon from '../../assets/images/search.png';
import PlusIcon from '../../assets/images/plus.png';
import CheckMark from '../../assets/images/checkMark.png';
import MenuIcon from '../../assets/images/menu.png';

const getSMSPermission = async () => {
    try {
        const checkResult = await check(PERMISSIONS.ANDROID.SEND_SMS);
        switch (checkResult) {
            case RESULTS.DENIED:
                const requestResult = await request(PERMISSIONS.ANDROID.SEND_SMS);
                return Promise.resolve(requestResult);
            case RESULTS.GRANTED:
                return Promise.resolve(checkResult);
            default:
                return Promise.reject();
        }
    } catch (err) {
        // console.log(err);
    }
};

const handleGetContacts = async (setContacts) => {
    Contacts.checkPermission().then(permission => {
        if (permission === 'undefined') {
            Contacts.requestPermission().then(permission => {
                Alert.alert("PERMISSIONS", 'Permissions must be Granted for inviting Users', [{ text: 'OK' }])
            })
        }
        if (permission === 'authorized') {
            Contacts.getAll().then((contact) => setContacts(contact))
                .catch(e => console.log(e))
        }
        if (permission === 'denied') {
            Alert.alert("PERMISSIONS", 'Permissions must be Granted for inviting Users', [{ text: 'OK' }])
        }
    })
}
const handleSelect = (setSelected, selected, item) => {
    setSelected([...selected, item])
}
const handleUnSelect = (setSelected, selected, item) => {
    const data = selected.filter((value) => value.givenName !== item.givenName);
    setSelected(data)
}
const handleInvite = async(selected) => {
    console.log(selected);
     let phoneNumbers = [];

    for (let i = 0; i < selected.length; i++) {
        for (let j = 0; j < selected[i].phoneNumbers.length; j++) {
            phoneNumbers.push(selected[i].phoneNumbers[j].number)
        }
    }
    // console.log(phoneNumbers)

    




 
    // Sms.send({
    //     body: 'Please follow us on https://reactnativecode.com',
    //     recipients: ['03324368072'],
    //     successTypes: ['sent', 'queued']
    // }, (completed, cancelled, error) => {
    //     if(completed){
    //       Alert.alert('SMS Sent Successfully.')
    //     }else if(cancelled){
    //       console.log('SMS Sent Cancelled.');
    //     }else if(error){
    //       console.log('Some error occured.');
    //     }
    // });
  

   


        try {
            // await getSMSPermission();
            Sms.send({
                body: 'Please follow us on https://reactnativecode.com',
                recipients: phoneNumbers,
                successTypes: ['sent', 'queued']
            }, (completed, cancelled, error) => {
                if(completed){
                  Alert.alert('SMS Sent Successfully.')
                }else if(cancelled){
                  console.log('SMS Sent Cancelled.');
                }else if(error){
                  console.log('Some error occured.',error);
                }
            });
            // AndroidSms.autoSend(
            //     phoneNumbers,
            //     message,
            //     (fail) => {
            //         console.log('Failed with this error: ' + fail);
            //     },
            //     (success) => {
            //         console.log('SMS sent successfully');
            //     },
            // );
        } catch (err) {
          console.log(err)
        }
   

}


const InviteItem = ({ item, index, setSelected, selected }) => {
    return (
        <TouchableOpacity
            onPress={
                selected.includes(item) ?
                    () => handleUnSelect(setSelected, selected, item) :
                    () => handleSelect(setSelected, selected, item)}
            key={index} style={styles.itemContainer}>
            <Image resizeMode="contain" style={styles.profileImage} source={dummyUser} />
            <Text style={styles.itemText}>{item.givenName}</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.imageActionIcon} source={selected.includes(item) ? CheckMark : PlusIcon} />
            </View>
        </TouchableOpacity>
    )
}


const Invite = ({ navigation }) => {

    useEffect(() => {
        handleGetContacts(setContacts)
    }, []);
    const [contacts, setContacts] = useState([]);
    const [friendName, setfriendName] = useState('');
    const [selected, setSelected] = useState([]);

    const filteredConnections = contacts.filter(
        (contact) => contact.givenName.toLowerCase().includes(friendName) || contact.givenName.includes(friendName)
    );



    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {/* <Image source={backIcon}/> */}
                <TouchableOpacity onPress={() => { navigation.toggleDrawer() }} style={styles.menuContainer}>
                    <Image resizeMode="contain" source={MenuIcon} style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Invite Friends</Text>
                <View style={styles.searchInputContainer}>
                    <Image style={styles.imageIcon} source={SearchIcon} />
                    <TextInput text={friendName} onChangeText={(text) => setfriendName(text)} placeholder="Search" style={styles.input} />
                </View>
            </View>
            <View style={{ height: '65%' }}>
                <ScrollView >
                    <View style={styles.contentContainer}>
                        {filteredConnections.map((item, index) => <InviteItem selected={selected} setSelected={setSelected} index={index} item={item} />)}
                    </View>
                </ScrollView>
            </View>

            <TouchableOpacity onPress={() => handleInvite(selected)} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>INVITE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Invite;