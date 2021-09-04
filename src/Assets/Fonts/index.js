import { Platform } from 'react-native';

const fonts = {
    PoppinsBlack: Platform.OS === 'ios' ? 'Poppins-Black' : 'Poppins-Black',
    PoppinsBlackItalic: Platform.OS === 'ios' ? 'Poppins-BlackItalic' : 'Poppins-BlackItalic',
    PoppinsBold: Platform.OS === 'ios' ? 'Poppins-Bold' : 'Poppins-Bold',
    PoppinsExtraBold: Platform.OS === 'ios' ? 'Poppins-ExtraBold' : 'Poppins-ExtraBold',
    PoppinsExtraBoldItalic: Platform.OS === 'ios' ? 'Poppins-ExtraBoldItalic' : 'Poppins-ExtraBoldItalic',
    PoppinsExtraLight: Platform.OS === 'ios' ? 'Poppins-ExtraLight' : 'Poppins-ExtraLight',
    PoppinsLight: Platform.OS === 'ios' ? 'Poppins-Light' : 'Poppins-Light',
    PoppinsMedium: Platform.OS === 'ios' ? 'Poppins-Medium' : 'Poppins-Medium',
    PoppinsMediumItalic: Platform.OS === 'ios' ? 'Poppins-MediumItalic' : 'Poppins-MediumItalic',
    PoppinsRegular: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Poppins-Regular',
    PoppinsSemiBold: Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'Poppins-SemiBold',
    PoppinsSemiBoldItalic: Platform.OS === 'ios' ? 'Poppins-SemiBoldItalic' : 'Poppins-SemiBoldItalic',
    PoppinsThin: Platform.OS === 'ios' ? 'Poppins-Thin' : 'Poppins-Thin',
    PoppinsThinItalic: Platform.OS === 'ios' ? 'Poppins-ThinItalic' : 'Poppins-ThinItalic',
};
export default fonts;
