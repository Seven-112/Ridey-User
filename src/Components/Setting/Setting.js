import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Setting.styles';
import rightArrow from '../../assets/images/rightArrow.png';
import dummyUser from '../../assets/images/dummyUser.jpg';
import MenuIcon from '../../assets/images/menu.png'

const handleLogout = (actions) => {
   actions.user.logout()
}


const Setting = ({ navigation, actions }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {/* <Image source={backIcon}/> */}
                <TouchableOpacity onPress={() => { navigation.toggleDrawer() }} style={styles.menuContainer}>
                    <Image resizeMode="contain" source={MenuIcon} style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Settings</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.profileContainer}>
                    <Image style={styles.profileImage} source={dummyUser} />
                    <View style={styles.profiletextContainer}>
                        <Text style={styles.userName}>Larry Davis</Text>
                        <Text style={styles.userEmail}>larryDavis@gmail.com</Text>
                    </View>
                    <Image style={styles.rightArraow} source={rightArrow} />
                </View>
                <View style={styles.settingContainer}>
                    <View style={styles.settingtextContainer}>
                        <Text style={styles.settingTypeText}>Notifications</Text>
                    </View>
                    <Image style={styles.rightArraow} source={rightArrow} />
                </View>
                <View style={styles.settingContainer}>
                    <View style={styles.settingtextContainer}>
                        <Text style={styles.settingTypeText}>Security</Text>
                    </View>
                    <Image style={styles.rightArraow} source={rightArrow} />
                </View>
                <View style={styles.settingContainer}>
                    <View style={styles.settingtextContainer}>
                        <Text style={styles.settingTypeText}>Language</Text>
                    </View>
                    <Image style={styles.rightArraow} source={rightArrow} />
                </View>

                <View style={{ ...styles.extraSettingContainer, marginTop: 15 }}>
                    <View style={styles.settingtextContainer}>
                        <Text style={styles.settingTypeText}>Clear Cache</Text>
                    </View>
                    <Image style={styles.rightArraow} source={rightArrow} />
                </View>
                <View style={styles.extraSettingContainer}>
                    <View style={styles.settingtextContainer}>
                        <Text style={styles.settingTypeText}>Terms and Privacy Policy</Text>
                    </View>
                    <Image style={styles.rightArraow} source={rightArrow} />
                </View>
                <View style={styles.extraSettingContainer}>
                    <View style={styles.settingtextContainer}>
                        <Text style={styles.settingTypeText}>Contact us</Text>
                    </View>
                    <Image style={styles.rightArraow} source={rightArrow} />
                </View>

                <TouchableOpacity onPress={()=>handleLogout(actions)} style={styles.buttonContainer}>
                    <Text style={styles.logoutBtnText}>Log Out</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Setting;