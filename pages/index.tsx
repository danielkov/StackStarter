import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  text: { fontSize: 20 },
  color: { width: 80, height: 80, borderRadius: 4, elevation: 1 },
});

const Home: FC = () => (
  <View style={styles.container}>
    {Object.entries(theme.color).map(([name, { transparent, ...colors }]) => (
      <View>
        <Text>{name}</Text>
        <View>
          {Object.entries(colors).map(([name, color]) => (
            <View>
              <View style={[styles.color, { backgroundColor: color }]}>
                <Text>{name}</Text>
              </View>
            </View>
          ))}
        </View>
        <View>
          {Object.entries(transparent).map(([name, color]) => (
            <View>
              <View style={[styles.color, { backgroundColor: color }]}>
                <Text>{name}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    ))}
  </View>
);

export default Home;
