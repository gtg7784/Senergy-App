import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSafeArea} from 'react-native-safe-area-context';
import Container from '../components/Container';
import Card from '../components/Card';
import BarGraph from '../components/BarGraph';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  headerSection: {
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
    marginTop: 4,
  },
  headerProfile: {
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
  mainCard: {
    width: Dimensions.get('window').width - 60,
    height: 160,
    backgroundColor: colors.WHITE,
    marginTop: -80,
    borderRadius: 10,
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
    color: colors.BLACK,
    marginVertical: 30,
  },
  todayCard: {
    width: 335,
    height: 200,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    paddingVertical: 25,
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
});
interface Props {
  navigation: StackNavigationProp<MainParamList, 'MainScreen'>;
}
const MainScreen: React.FC<Props> = () => {
  const {top} = useSafeArea();
  const date = new Date();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const data = [
    {
      date: '20/06/25',
      status: 1,
      sleepData: {
        sleep: [1, 4, 5, 8, 9],
        awake: [2, 3, 6, 7],
      },
    },
  ];

  return (
    <Container style={styles.container}>
      <View
        style={[
          styles.headerSection,
          {height: 250 + top, marginTop: -top, paddingTop: top + 72},
        ]}>
        <Text style={styles.headerText}>
          {`${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${
            days[date.getDay()]
          }`}
        </Text>
        <Image style={styles.headerProfile} source={{uri: ''}} />
      </View>
      <View style={styles.bodySection}>
        <Card style={styles.mainCard}>
          <BarGraph data={[10, 7, 8, 9, 5, 4, 9.5]} style={styles.mainGraph} />
        </Card>
        <Text style={styles.mainTypo}>
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
        <Card />
      </View>
    </Container>
  );
};

export default MainScreen;
