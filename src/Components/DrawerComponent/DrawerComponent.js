import React from 'react';
import { View, ScrollView, SafeAreaView, Text, Image } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';
import DummyUser from '../../assets/images/dummyUser.jpg';
import styles from './DrawerComponent.styles';

const DrawerComponent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View

                    // forceInset={{ top: 'never', horizontal: 'never' }}
                    style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View style={styles.topContentContainer}>
                            <View style={styles.profileImageContainer}>
                                <Image resizeMode="contain" style={styles.image} source={DummyUser} />
                            </View>
                            <View>
                                <Text style={styles.userName}>Larry Davis</Text>
                                <Text style={styles.userPhone}>0123-31311414</Text>
                            </View>
                        </View>
                        <View style={styles.textHintContainer}>
                            <Text style={styles.textHint}>Do More With Your Rides</Text>
                        </View>
                    </View>
                    <DrawerItemList labelStyle={styles.item} {...props} />
                </View>
            </ScrollView>
        </View>
    )
};

export default DrawerComponent;
