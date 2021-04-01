import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Calling.styles';
import dummyUser from '../../assets/images/dummyUser.jpg';
import hangUp from '../../assets/images/hangUp.png';
import videoOn from '../../assets/images/videoOn.png';
import noVideo from '../../assets/images/noVideo.png';
import soundOn from '../../assets/images/soundOn.png';
import mute from '../../assets/images/mute.png';
import message from '../../assets/images/message.png';

const Calling = ({ navigation }) => {

    const [video, setVideo] = useState(false);
    const [speaker, setSpeaker] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.imageContainer}>
                    <Image resizeMode="contain" style={styles.image} source={dummyUser} />
                </View>
                <Text style={styles.name}>Davis Luis</Text>
                <Text style={styles.timer}>14:30</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomRowContainer}>
                    <TouchableOpacity onPress={() => setVideo(!video)} style={styles.videoContainer}>
                        <Image style={styles.videoIcon} source={video ? noVideo : videoOn} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSpeaker(!speaker)} style={styles.soundContainer}>
                        <Image style={styles.soundIcon} source={speaker ? soundOn : mute} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.messageContainer}>
                        <Image style={styles.messageIcon} source={ message} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.hangUpContainer}>
                    <Image style={styles.hangUpIcon} source={hangUp} />
                </TouchableOpacity>
            </View>
        </View>
    )

};

export default Calling;