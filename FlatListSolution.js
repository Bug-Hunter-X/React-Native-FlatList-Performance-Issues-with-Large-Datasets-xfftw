import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

const FlatListSolution = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      getItemLayout={(data, index) => ({ length: 40, offset: 40 * index, index })}
      initialNumToRender={20}
      windowSize={10}
      removeClippedSubviews
    />
  );
};

export default FlatListSolution;

const styles = StyleSheet.create({
  itemContainer: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
});