import React from 'react';
import {ViewStyle} from 'react-native';
import {BarChart} from 'react-native-svg-charts';
import colors from '../constants/colors';

interface Props {
  data: number[];
  style: ViewStyle;
  contentInset?: contentInsetType;
}

const SleepGraph: React.FC<Props> = (props: Props) => {
  const fill = colors.BLUE;
  return (
    <BarChart
      style={props.style}
      data={props.data}
      svg={{fill}}
      contentInset={props.contentInset}
      spacingInner={0.4}
      animationDuration={200}
      yMin={0}
      yMax={16}
      horizontal
    />
  );
};

export default SleepGraph;
