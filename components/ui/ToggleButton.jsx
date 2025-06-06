import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme
} from 'react-native';
import { SIZES } from '../../../constants';
import { Colors } from '../../../constants/Colors';

const ToggleButton = ({
  labels = [],
  value = 0,
  onChange = () => {},
  containerStyle = {},
  labelStyle = {}
}) => {
  const colorScheme = useColorScheme();
  const [buttonLayouts, setButtonLayouts] = useState([]);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [activeWidth, setActiveWidth] = useState(0);

  const onLayout = (index) => (event) => {
    const { width, x } = event.nativeEvent.layout;
    setButtonLayouts((prev) => {
      const next = [...prev];
      next[index] = { width, x };
      return next;
    });
  };

  useEffect(() => {
    if (buttonLayouts[value]) {
      const { x, width } = buttonLayouts[value];
      setActiveWidth(width);
      Animated.spring(slideAnim, {
        toValue: x,
        useNativeDriver: true
      }).start();
    }
  }, [value, buttonLayouts]);

  return (
    <View style={[styles.container(colorScheme), containerStyle]}>
      {buttonLayouts[value] && (
        <Animated.View
          style={[
            styles.overlay(colorScheme),
            {
              width: activeWidth,
              transform: [{ translateX: slideAnim }]
            }
          ]}
        >
          <Text style={styles.overlayText(colorScheme)}>
            {labels[value]}
          </Text>
        </Animated.View>
      )}

      {labels.map((label, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => onChange(i)}
          onLayout={onLayout(i)}
          style={styles.btnContainer}
        >
          <Text
            style={[
              styles.btnText(i === value, colorScheme),
              labelStyle
            ]}
          >
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: (theme) => ({
    height: 60,
    borderRadius: SIZES.xxLarge,
    backgroundColor: Colors[theme].container,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
    width: '90%',
    alignSelf: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 4
  }),
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: (isActive, theme) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: Colors[theme].text
  }),
  overlay: (theme) => ({
    position: 'absolute',
    height: '100%',
    backgroundColor: Colors[theme].text,
    borderRadius: SIZES.xxLarge,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  }),
  overlayText: (theme) => ({
    color: Colors[theme].background,
    fontWeight: 'bold'
  })
});

export default ToggleButton;
