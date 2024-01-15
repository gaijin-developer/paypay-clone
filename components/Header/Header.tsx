import React from 'react';
import {Text} from 'react-native';
import transform from 'css-to-react-native';

type Props = {};

export default function Header({}: Props) {
  return <Text style={styling}>Header</Text>;
}

const styling = transform([['color', 'blue']]);
