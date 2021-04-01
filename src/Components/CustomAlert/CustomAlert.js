import React, { useState } from 'react';
import { View, Text, Modal, Image,TouchableOpacity } from 'react-native';
import styles from './CustomAlert.styles';

const CustomAlert = ({ title, description,visible,onPress,setVisible }) => {


    return (
        <Modal style={{marginTop:'30%',height:'50%',backgroundColor:'red'}}  visible={visible}>
            <View style={styles.centerContainer}>
                <View style={styles.imageContainer}>
                    {/* <Image /> */}
                </View>
                <View style={styles.textContainer}>
                    <Text>{title}</Text>
                    <Text>{description}</Text>
                </View>
                <TouchableOpacity onPress={()=>setVisible(false)} style={styles.buttonContainer}>
                    <Text>OK</Text>
                </TouchableOpacity>
            </View>
        </Modal>

    )
};
export default CustomAlert;
