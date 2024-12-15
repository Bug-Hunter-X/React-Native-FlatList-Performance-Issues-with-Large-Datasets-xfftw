# React Native FlatList Performance Issues

This repository demonstrates a common performance issue with React Native's `FlatList` component when dealing with large datasets. The initial implementation suffers from slow rendering and UI unresponsiveness. The solution implements key optimization techniques to improve performance.

## Bug Description

The `FlatList` component renders slowly and causes UI unresponsiveness or crashes when presented with a large amount of data.  This is because the default rendering behavior of `FlatList` is not optimized for very large lists.

## Solution

The solution involves implementing several key optimization strategies:

* **`keyExtractor`:**  A unique key is provided for each item to enable efficient updates.
* **`getItemLayout`:**  This provides `FlatList` with pre-calculated dimensions for each item, significantly reducing the number of measurements needed.
* **`initialNumToRender`:**  Rendering only a subset of items initially improves initial load time.
* **`windowSize`:**  Setting an appropriate window size helps maintain performance as the user scrolls.
* **`removeClippedSubviews`:**  Improves performance by removing off-screen items from the render tree.