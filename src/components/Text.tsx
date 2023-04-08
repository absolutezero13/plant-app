import { Text as RNText, StyleSheet, TextProps } from 'react-native';

const Text = (props: TextProps) => {
  return (
    <RNText {...props} style={[styles.defaultText, props.style]}>
      {props.children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 17,
    fontFamily: 'Rubik-Regular'
  }
});

export default Text;
