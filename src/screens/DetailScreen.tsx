import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
  Platform,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSafeArea} from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';

import Container from '../components/Container';
import Card from '../components/Card';
import SleepGraph from '../components/SleepGraph';
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
    height: Dimensions.get('window').height - 140,
  },
  mainGraphCard: {
    width: Dimensions.get('window').width - 60,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainGraphStyle: {
    width: '80%',
    height: 160,
  },
  statusCardContainer: {
    width: Dimensions.get('window').width - 60,
    height: 148,
    marginTop: 40,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  statusTitleText: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLUE,
  },
  statusTextWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 12,
  },
  statusTextHours: {
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.BLACK,
    marginRight: 10,
  },
  statusTextContent: {
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLACK,
  },
});

interface Props {
  navigation: StackNavigationProp<MainParamList, 'DetailScreen'>;
}
const DetailScreen: React.FC<Props> = ({navigation}: Props) => {
  const {top} = useSafeArea();
  const animatedHeight = new Animated.Value(250 + top);
  const onScroll = (e: any) => {
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
              paddingTop: Platform.OS === 'android' ? 24 : top + 72,
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
          <Card style={styles.mainGraphCard}>
            <SleepGraph data={[7, 3]} style={styles.mainGraphStyle} />
          </Card>
          <Card style={styles.statusCardContainer}>
            <Text style={styles.statusTitleText}>나는 오늘</Text>
            <View style={styles.statusTextWrap}>
              <Text style={styles.statusTextHours}>03:00</Text>
              <Text style={styles.statusTextContent}>에 잠들었어요</Text>
            </View>
            <View style={styles.statusTextWrap}>
              <Text style={styles.statusTextHours}>07:00</Text>
              <Text style={styles.statusTextContent}>에 기상했어요</Text>
            </View>
          </Card>
        </View>
      </Container>
    </ScrollView>
  );
};

export default DetailScreen;
