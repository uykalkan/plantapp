import React from 'react';
import {View, ViewProps} from 'react-native';
import {styles} from './styles';

interface PaginationProps extends ViewProps {
  selectedIndex?: number;
  totalPage?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  selectedIndex,
  totalPage,
  style,
  ...props
}) => {
  return (
    <View style={[styles.root, style]} {...props}>
      {[...Array(totalPage)].map((_, index) => (
        <View
          key={index}
          style={[styles.dot, index === selectedIndex && styles.dotSelected]}
        />
      ))}
    </View>
  );
};

Pagination.defaultProps = {
  selectedIndex: 0,
  totalPage: 0,
};

export default Pagination;
