import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
  card: {
    backgroundColor: theme.colors.primary.main,
    borderRadius: theme.scale.base,
    color: theme.colors.primary.inverted,
    marginBottom: theme.spacing.block.default.base,
    paddingHorizontal: theme.spacing.block.default.horizontal,
    paddingVertical: theme.spacing.block.default.vertical,
  },
  container: {
    flex: 1,
  },
});
