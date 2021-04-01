import React, { useRef, useState } from 'react';
import { View, FlatList, Text, useWindowDimensions, Animated, TouchableOpacity } from 'react-native';
import styles from './OnBoarding.styles';
import { GlobalWrapper, Header, Image } from '..';
import { Data } from '../../Mocks/OnBoarding';
import { Global } from '../../Constants'
import routeNames from '../../Navigation/routeNames';


const renderItem = ({ item, index }, width,navigaton) => {

    return (
        <View style={[styles.onboardingContainer, { width }]} >
            <View style={{ width: width - 100 }}>
                <Image style={[styles.onboardingImage, { width: width - 100, resizeMode: 'contain' }]} source={item.image} />
            </View>
            <View style={styles.onboardingtextContainer}>
                <Text style={styles.headingText}>{item.name}</Text>
                <Text style={styles.subheadingText}>{item.description}</Text>
            </View>

            {
                index === 3 && <TouchableOpacity onPress={()=>navigaton.navigate(routeNames.Login)} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{Global.GET_STARTED}</Text>
                </TouchableOpacity>

            }




        </View>
    )
}
const RenderPaginator = ({ scrollX, width }) => {
    return (
        <View style={{ flexDirection: 'row' }}>

            {Data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp'
                })
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp'
                })
                return <Animated.View key={i.toString()} style={[styles.dot, { width: dotWidth, opacity }]} />
            })}
        </View>
    )
}

const OnBoarding = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null)

    const viewableItemschanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    return (
        <GlobalWrapper
            header={<Header />}
        >
            <View style={styles.onboardingList}>
                <FlatList
                    horizontal={true}
                    data={Data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={(item) => renderItem(item, width,navigation)}
                    pagingEnabled={true}
                    bounces={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemschanged}
                    viewabilityConfig={viewConfig}
                    showsHorizontalScrollIndicator={false}
                    ref={slidesRef}

                />
                <RenderPaginator width={width} scrollX={scrollX} />
            </View>



        </GlobalWrapper>
    )
}

export default OnBoarding;