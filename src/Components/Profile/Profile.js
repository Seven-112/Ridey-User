import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Profile.styles';
import MenuIcon from '../../assets/images/menu.png';
import dummyUser from '../../assets/images/dummyUser.jpg';




const Profile = ({ navigation ,user}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => { navigation.toggleDrawer() }} style={styles.menuContainer}>
                    <Image resizeMode="contain" source={MenuIcon} style={styles.menu} />
                </TouchableOpacity>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>My Account</Text>
                    <Image style={styles.profileImage} source={dummyUser} />
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View style={{ ...styles.settingContainer, marginVertical: 20 }}>
                    <View style={styles.settingtextContainer}>
                        <Text style={styles.settingTypeText}>Rating</Text>
                        <Text style={styles.settingValue}>4.3</Text>
                    </View>
                </View>
                <View style={styles.settingContainer}>
                    <View style={styles.settingtextContainer}>
                        <Text style={styles.settingTypeText}>Name</Text>
                        <Text style={styles.settingValue}>{user.name}</Text>
                    </View>
                </View>
                <View style={styles.settingContainer}>
                    <View style={styles.settingtextContainer}>
                        <Text style={styles.settingTypeText}>Email</Text>
                        <Text style={styles.settingValue}>larryDavis@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.settingContainer}>
                    <View style={styles.settingtextContainer}>
                        <Text style={styles.settingTypeText}>PhoneNumber</Text>
                        <Text style={styles.settingValue}>{user.phoneNumber}</Text>
                    </View>
                </View>
                <View style={styles.settingContainer}>
                    <View style={styles.settingtextContainer}>
                        <Text style={styles.settingTypeText}>Nic Number</Text>
                        <Text style={styles.settingValue}>{user.nicNumber}</Text>
                    </View>
                </View>



            </View>


        </View>
    )
}

export default Profile;