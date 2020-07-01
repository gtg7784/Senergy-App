import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSafeArea} from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';

import Container from '../components/Container';
import Card from '../components/Card';
import colors from '../constants/colors';
import images from '../constants/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSection: {
    position: 'absolute',
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: colors.BLUE,
    paddingHorizontal: 30,
    flexDirection: 'column',
  },
  navigationView: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navigationBtn: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationIcn: {
    width: 19.3,
    height: 16,
  },
  headerProfileWrap: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerProfileTitle: {
    fontSize: 26,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.WHITE,
    marginTop: 4,
  },
  headerProfileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.GRAY,
  },
  bodySection: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  mainGraphCard: {
    width: Dimensions.get('window').width - 60,
    height: 180,
  },
});

interface Props {
  navigation: StackNavigationProp<MainParamList, 'DetailScreen'>;
}
const DetailScreen: React.FC<Props> = ({navigation}: Props) => {
  const {top} = useSafeArea();
  const animatedHeight = new Animated.Value(250 + top);
  const onScroll = (e) => {
    let height;

    console.log(e.nativeEvent.contentOffset.y);

    if (e.nativeEvent.contentOffset.y < 0) {
      height = 250 + top + e.nativeEvent.contentOffset.y;
    } else {
      height = 250 + top + e.nativeEvent.contentOffset.y * 2.82;
    }

    animatedHeight.setValue(height);
  };

  return (
    <ScrollView onScroll={(e) => onScroll(e)} scrollEventThrottle={16}>
      <Container style={styles.container}>
        <Animated.View
          style={[
            styles.headerSection,
            {
              height: animatedHeight,
              top: -top,
              paddingTop: top + 72,
              minHeight: 250 + top,
            },
          ]}>
          <View style={styles.navigationView}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.navigationBtn}>
              <Image style={styles.navigationIcn} source={images.backIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerProfileWrap}>
            <Text style={styles.headerProfileTitle}>오늘 수면시간</Text>
            <Image source={{uri: ''}} style={styles.headerProfileImg} />
          </View>
        </Animated.View>
        <View style={[styles.bodySection, {top: 140 + top}]}>
          <Card style={styles.mainGraphCard} />
        </View>
      </Container>
    </ScrollView>
  );
};

export default DetailScreen;
