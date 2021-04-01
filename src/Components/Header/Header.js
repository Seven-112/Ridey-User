import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import styles from './Header.styles';
import PropTypes from 'prop-types';
import { Theme } from '../../Constants'
import { ActionIcon, Text } from '..'

const Header = ({
  animated = false,
  backgroundColor,
  backButtonActions,
  leftButtons,
  leftTitle,
  rightButtons,
  scrollY,
  withBackButton,
  withElevation,
  title,
  titleColor,
  navigation,


}) => {


  const animatedBackgroundColor = !animated
    ? null
    : Animated.color(
      255,
      255,
      255,
      Animated.interpolate(scrollY, {
        inputRange: [50, 80],
        outputRange: [0, 1],
        extrapolate: Animated.Extrapolate.CLAMP
      })
    )
  const titleTextOpacity = !animated
    ? null
    : Animated.interpolate(scrollY, {
      inputRange: [50, 80],
      outputRange: [0, 1],
      extrapolate: Animated.Extrapolate.CLAMP
    })
  const headerTitle = !animated ? (
    <View style={styles.titleViewAbsolute}>
      <Text centered title numberOfLines={2} style={titleColor && { color: titleColor }} testID={'centerTitle'}>
        {title}
      </Text>
    </View>
  ) : (
      <Animated.View style={styles.titleView}>
        <Text adjustsFontSizeToFit={false} animated centered h4 numberOfLines={1} style={[styles.titleText, { opacity: titleTextOpacity }]}>
          {title}
        </Text>
      </Animated.View>
    );
  const backButton = (
    <ActionIcon
      back
      color={Theme.COLORS.ICONS}
      onPress={() => {
        if (backButtonActions) {
          backButtonActions();
        }

        navigation.goBack();
      }}
      style={styles.backButton}
      testID={'backButton'}
    />
  );


  return (
    <Animated.View
      style={[
        styles.container,
        backgroundColor ? { backgroundColor } : undefined,
        animated && styles.floatingHeader,
        animated && { backgroundColor: animatedBackgroundColor },
        animated && titleTextOpacity && styles.elevationIOS,
        withElevation && (Platform.OS === 'ios' ? styles.elevationIOS : styles.elevationAndroid),
        animated && {
          borderBottomColor: Theme.COLORS.TRANSPARENT_LIGHT_GREY,
          borderBottomWidth: Platform.OS === 'ios' ? 0 : titleTextOpacity,
        },
      ]}
    >
      <View style={styles.leftContainer}>
        {withBackButton && backButton}
        {leftButtons}
        {leftTitle && leftTitleComponent}
      </View>
      {headerTitle}
      <View style={styles.rightContainer}>{rightButtons}</View>
    </Animated.View>
  );

};

Header.propTypes = {
  prop: PropTypes.node,
};

export default Header;

