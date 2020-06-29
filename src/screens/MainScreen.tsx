import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSafeArea} from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';
import Container from '../components/Container';
import Card from '../components/Card';
import BarGraph from '../components/BarGraph';
import colors from '../constants/colors';
import images from '../constants/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  headerSection: {
    position: 'absolute',
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: colors.BLUE,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.WHITE,
    marginTop: 34,
  },
  headerProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.GRAY,
    marginTop: 30,
  },
  bodySection: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  mainCard: {
    width: Dimensions.get('window').width - 60,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainGraph: {
    width: '80%',
    height: 130,
  },
  mainTypo: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'center',
    marginVertical: 30,
  },
  todayCard: {
    width: 335,
    height: 200,
    paddingVertical: 26,
  },
  todayTitle: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLUE,
    marginLeft: 20,
  },
  todayWrap: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todayDivider: {
    width: 0,
    height: 50,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: colors.YELLOW,
  },
  todayText: {
    width: 102,
    textAlign: 'center',
  },
  cardListWrap: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 24,
  },
  cardListContainer: {
    width: Dimensions.get('window').width - 80,
    height: 102,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardListTextWrap: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  cardListTitle: {
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLUE,
    marginLeft: 20,
  },
  cardListDescription: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLACK,
    marginLeft: 20,
    marginTop: 12,
  },
  cardBtnImage: {
    width: 32,
    height: 32,
    marginRight: 20,
  },
});

interface DataType {
  date: string | Date;
  status: 1 | 2 | 3;
  sleepData: {
    sleep: number[];
    awake: number[];
  };
}
interface Props {
  navigation: StackNavigationProp<MainParamList, 'MainScreen'>;
}
const MainScreen: React.FC<Props> = () => {
  const {top} = useSafeArea();
  const animatedHeight = new Animated.Value(250 + top);
  const [mainTypoColor, setMainTypoColor] = useState(colors.BLACK);
  const date = new Date();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const data: DataType[] = [
    {
      date: '20/06/25',
      status: 1,
      sleepData: {
        sleep: [1, 4, 5, 8, 9],
        awake: [2, 3, 6, 7],
      },
    },
    {
      date: '20/06/25',
      status: 1,
      sleepData: {
        sleep: [1, 4, 5, 8, 9],
        awake: [2, 3, 6, 7],
      },
    },
    {
      date: '20/06/25',
      status: 1,
      sleepData: {
        sleep: [1, 4, 5, 8, 9],
        awake: [2, 3, 6, 7],
      },
    },
    {
      date: '20/06/25',
      status: 1,
      sleepData: {
        sleep: [1, 4, 5, 8, 9],
        awake: [2, 3, 6, 7],
      },
    },
    {
      date: '20/06/25',
      status: 1,
      sleepData: {
        sleep: [1, 4, 5, 8, 9],
        awake: [2, 3, 6, 7],
      },
    },
  ];

  const statusToString = (status: 1 | 2 | 3): string => {
    const statusString = {
      1: '오늘은 기분 좋은 날',
      2: '오늘은 그저 그런 날',
      3: '오늘은 피곤한 날',
    };

    return statusString[status];
  };

  const getTotalTime = (data: number[]): number => {
    let sum = 0;
    data.map((item) => (sum += item));

    return sum;
  };

  const onScroll = (e) => {
    let height;

    console.log(e.nativeEvent.contentOffset.y);

    if (e.nativeEvent.contentOffset.y < 0) {
      height = 250 + top + e.nativeEvent.contentOffset.y;
    } else {
      height = 250 + top + e.nativeEvent.contentOffset.y * 2.8;
    }

    if (e.nativeEvent.contentOffset.y > 50) {
      setMainTypoColor(colors.WHITE);
    } else {
      setMainTypoColor(colors.BLACK);
    }

    animatedHeight.setValue(height);
  };

  return (
    <ScrollView onScroll={(e) => onScroll(e)} scrollEventThrottle={16}>
      <Container style={styles.container}>
        <Animated.View
          style={[
            styles.headerSection,
            {height: animatedHeight, top: -top, paddingTop: top + 72},
          ]}>
          <Text style={styles.headerText}>
            {`${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${
              days[date.getDay()]
            }`}
          </Text>
          <Image style={styles.headerProfile} source={{uri: ''}} />
        </Animated.View>
        <View style={[styles.bodySection, {marginTop: 98 + top}]}>
          <Card style={styles.mainCard}>
            <BarGraph
              data={[10, 7, 8, 9, 5, 4, 9.5]}
              style={styles.mainGraph}
            />
          </Card>
          <Text style={[styles.mainTypo, {color: mainTypoColor}]}>
            지금 공부하면 꿈을 이루겠지만,{'\n'}
            지금 자면 잠을 이룬다
          </Text>
          <Card style={styles.todayCard}>
            <Text style={styles.todayTitle}>나는 오늘..</Text>
            <View style={styles.todayWrap}>
              <Text style={styles.todayText}>
                <Text>3시간</Text>
                {'\n'}
                잤어요.
              </Text>
              <View style={styles.todayDivider} />
              <Text style={styles.todayText}>x점 줬을 때 문장</Text>
              <View style={styles.todayDivider} />
              <Text style={styles.todayText}>
                머리가 아파요{'\n'}
                일하기 싫어요
              </Text>
            </View>
          </Card>
          <View style={styles.cardListWrap}>
            {data.map((item, index) => (
              <Card style={styles.cardListContainer} key={index}>
                <View style={styles.cardListTextWrap}>
                  <Text style={styles.cardListTitle}>{item.date}</Text>
                  <Text style={styles.cardListDescription}>
                    {statusToString(item.status)} - 수면시간:{' '}
                    {getTotalTime(item.sleepData.sleep)}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Image
                    source={images.arrowRight}
                    style={styles.cardBtnImage}
                  />
                </TouchableOpacity>
              </Card>
            ))}
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};

export default MainScreen;
