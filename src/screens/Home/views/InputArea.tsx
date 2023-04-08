import { Image, TextInput, View } from 'react-native';
import { styles } from '../Home.style';
import Search from '../../../assets/icons/search.svg';
import inputBgImage from '../../../assets/images/input-bg.png';

const InputArea = () => {
  return (
    <View style={styles.inputAreaWrapper}>
      <Image source={inputBgImage} style={styles.inputImage} />
      <TextInput
        placeholderTextColor={'#ddd'}
        placeholder='Search for plants'
        style={styles.textInput}
      />
      <Search style={styles.searchIcon} />
    </View>
  );
};

export default InputArea;
