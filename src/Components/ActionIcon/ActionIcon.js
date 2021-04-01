import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

// SVG Icons
import Back from '../../assets/images/back.svg';
import Bookmark from '../../assets/images/bookmark.svg';
import BookmarkFilled from '../../assets/images/bookmarkFilled.svg';
import Checkmark from '../../assets/images/checkmark.svg';
import Close from '../../assets/images/close.svg';
import Compose from '../../assets/images/compose.svg';
import Edit from '../../assets/images/editPencil.svg';
import Location from '../../assets/images/location.svg';
import More from '../../assets/images/more.svg';
import Plus from '../../assets/images/plus.svg';
import Share from '../../assets/images/share.svg';
import Search from '../../assets/images/magnifyingGlass.svg';
import Settings from '../../assets/images/settingsGear.svg';

import { Theme } from '../../Constants';

// Styles
import styles from './ActionIcon.styles';

/**
 * ActionIcon.
 *
 * The ActionIcon UI component.
 *
 * @param {boolean} back - Displays the back icon
 * @param {boolean} bookmark - Displays the bookmark icon
 * @param {boolean} compose - Displays the compose icon
 * @param {boolean} checkmark - Displays the checkmark icon
 * @param {boolean} disabled - Disables the onPress handling
 * @param {boolean} filled - If the icon supports fill style, the filled icon is used
 * @param {number} height - Allows for customizing the icon size (defaulted to 19)
 * @param {boolean} more - Displays the more icon
 * @param {function} onPress - Action to occur when pressed
 * @param {boolean} plus - Displays the plus icon
 * @param {boolean} search - Displays the search icon
 * @param {boolean} share - Displays the share icon
 * @param {object} style - Context style
 *
 * @returns {React.ReactElement} - React element.
 *
 * @example
 * <ActionIcon bookmark filled />
 */
const ActionIcon = ({
  back = false,
  bookmark = false,
  checkmark = false,
  close = false,
  color = Theme.COLORS.BLACK,
  compose = false,
  disabled = false,
  edit = false,
  filled = false,
  height = 19,
  location = false,
  more = false,
  onPress = null,
  plus = false,
  search = false,
  settings = false,
  share = false,
  style,
}) => {
  const isDisabled = disabled || typeof onPress !== 'function';

  return (
    <TouchableOpacity onPress={onPress} disabled={isDisabled} style={[styles.container, style]}>
      <>
        {back ? <Back fill={color} height={height} testID={'backIcon'} /> : null}
        {bookmark && !filled ? <Bookmark fill={color} height={height} testID={'bookmarkIcon'} /> : null}
        {bookmark && filled ? <BookmarkFilled fill={color} height={height} testID={'bookmarkFilledIcon'} /> : null}
        {checkmark ? <Checkmark fill={color} height={height} testID={'checkmarkIcon'} /> : null}
        {close ? <Close fill={color} height={height} testID={'backIcon'} /> : null}
        {compose ? <Compose fill={color} height={height} testID={'composeIcon'} /> : null}
        {edit ? <Edit fill={color} height={height} testID={'editIcon'} /> : null}
        {location ? <Location fill={color} height={height} testID={'locationIcon'} /> : null}
        {more ? <More fill={color} height={height} testID={'moreIcon'} /> : null}
        {plus ? <Plus fill={color} height={height} testID={'plusIcon'} /> : null}
        {search ? <Search fill={color} height={height} testID={'searchIcon'} /> : null}
        {settings ? <Settings fill={color} height={height} testID={'settingsIcon'} /> : null}
        {share ? <Share fill={color} height={height} testID={'shareIcon'} /> : null}
      </>
    </TouchableOpacity>
  );
};

ActionIcon.propTypes = {
  back: PropTypes.bool,
  bookmark: PropTypes.bool,
  checkmark: PropTypes.bool,
  disabled: PropTypes.bool,
  filled: PropTypes.bool,
  height: PropTypes.number,
  more: PropTypes.bool,
  onPress: PropTypes.func,
  plus: PropTypes.bool,
  search: PropTypes.bool,
  share: PropTypes.bool,
};

export default ActionIcon;
