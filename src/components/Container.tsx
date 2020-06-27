import React from 'react';
import {View, ViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Container: React.FC<ViewProps> = (props) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      {...props}
      style={[
        props.style,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    />
  );
};

export default Container;
