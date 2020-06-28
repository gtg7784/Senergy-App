import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import colors from '../constants/colors';

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
  checkWrap: {
    width: '100%',
    height: 45,
    borderRadius: 22.5,
    backgroundColor: colors.GRAY,
    flexDirection: 'row',
  },
  checkBtnView: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBtnText: {
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLACK,
  },
});

interface Props {
  arr: number[];
  label: string;
  selectedIndex: number;
  setIndex: (number: number) => void;
  marginBottom?: number;
}

const CheckList: React.FC<Props> = ({
  arr,
  label = '',
  selectedIndex,
  setIndex,
  marginBottom = 0,
}: Props) => {
  const totalWidth = Dimensions.get('window').width - 60;

  return (
    <View style={[styles.container, {marginBottom: marginBottom}]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.checkWrap}>
        {arr.map((item, index) => (
          <TouchableOpacity
            style={{
              width: totalWidth / arr.length,
              height: 45,
            }}
            key={index}
            onPress={() => setIndex(index)}>
            <View
              style={[
                styles.checkBtnView,
                selectedIndex === index
                  ? {
                      backgroundColor: colors.YELLOW,
                    }
                  : {
                      backgroundColor: colors.TRANSPARENT,
                    },
              ]}>
              <Text style={styles.checkBtnText}>{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CheckList;
