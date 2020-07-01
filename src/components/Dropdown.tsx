import React from 'react';
import {StyleSheet, View, Dimensions, Text, Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import colors from '../constants/colors';
import images from '../constants/images';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 30,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0,
    color: colors.BLACK,
    marginBottom: 16,
  },
  pickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerWrap: {
    width: 100,
    height: 45,
    borderRadius: 10,
    marginRight: 20,
  },
  icon: {
    width: 12,
    height: 7,
    marginTop: 19,
    marginRight: 20,
  },
});

const selectPicker = StyleSheet.create({
  inputIOS: {
    width: 100,
    height: 45,
    borderRadius: 10,
    backgroundColor: colors.GRAY,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLACK,
    paddingHorizontal: 20,
  },
  inputAndroid: {
    width: 100,
    height: 45,
    borderRadius: 10,
    backgroundColor: colors.GRAY,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLACK,
    paddingHorizontal: 20,
  },
});

interface PrickerItem {
  array: {label: string; value: string}[];
  value: string;
  setValue: (text: string) => void;
}

interface Props {
  label: string;
  item: PrickerItem[];
}

const DropDown: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.pickerRow}>
        {props.item.map((item, index) => (
          <View style={styles.pickerWrap} key={index}>
            <RNPickerSelect
              style={selectPicker}
              onValueChange={(value) => item.setValue(value)}
              items={item.array}
              value={item.value}
              Icon={() => (
                <Image source={images.arrowDown} style={styles.icon} />
              )}
              placeholder={{}}
              useNativeAndroidPickerStyle={true}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default DropDown;
