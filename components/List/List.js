import React from "react";
import { FlatList } from "react-native";

const List = ({
  data,
  keyExtractor,
  renderItem,
  ListEmptyComponent,
  ListHeaderComponent,
  ListFooterComponent,
  horizontal = false,
  numColumns = 1,
  refreshing = false,
  onRefresh,
  onEndReached,
  onEndReachedThreshold = 0.5,
  extraData,
  contentContainerStyle,
  columnWrapperStyle,
  style,
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      horizontal={horizontal}
      numColumns={numColumns}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      extraData={extraData}
      contentContainerStyle={contentContainerStyle}
      columnWrapperStyle={columnWrapperStyle}
      style={style}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default List;
