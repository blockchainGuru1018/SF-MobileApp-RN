import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import { Light_Color } from '../Colors/Colors';
import fonts from '../Fonts';
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    font_PoppinsBlack: { fontFamily: fonts.PoppinsBlack },
    font_PoppinsBlackItalic: { fontFamily: fonts.PoppinsBlackItalic },
    font_PoppinsBold: { fontFamily: fonts.PoppinsBold },
    font_PoppinsExtraBold: { fontFamily: fonts.PoppinsExtraBold },
    font_PoppinsExtraBoldItalic: { fontFamily: fonts.PoppinsExtraBoldItalic },
    font_PoppinsExtraLight: { fontFamily: fonts.PoppinsExtraLight },
    font_PoppinsLight: { fontFamily: fonts.PoppinsLight },
    font_PoppinsMedium: { fontFamily: fonts.PoppinsMedium },
    font_PoppinsMediumItalic: { fontFamily: fonts.PoppinsMediumItalic },
    font_PoppinsRegular: { fontFamily: fonts.PoppinsRegular },
    font_PoppinsSemiBold: { fontFamily: fonts.PoppinsSemiBold },
    font_PoppinsSemiBoldItalic: { fontFamily: fonts.PoppinsSemiBoldItalic },
    font_PoppinsThin: { fontFamily: fonts.PoppinsThin },
    font_PoppinsThinItalic: { fontFamily: fonts.PoppinsThinItalic },
    fontSize_24: { fontSize: 24 },
    Container: {
        display: 'flex',
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    Heading: {
        fontSize: 30,
        color: Light_Color.white,
        fontFamily: fonts.PoppinsMedium,
    },
    SubHeading: {
        fontSize: 18,
        color: Light_Color.white,
        fontFamily: fonts.PoppinsRegular,
        top: -10
    },
    Heading_Black: {
        fontSize: 30,
        color: Light_Color.black,
        fontFamily: fonts.PoppinsMedium,
        top: -5
    },
    Heading_Blue: {
        fontSize: 30,
        color: Light_Color.blue,
        fontFamily: fonts.PoppinsMedium,

    },
    SubHeading_gray: {
        fontSize: 18,
        color: Light_Color.gray,
        fontFamily: fonts.PoppinsRegular,
        top: -5
    },
    MainContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    alignItems_End: {
        justifyContent: 'flex-end'
    },
    alignItems_Center: {
        justifyContent: 'center',
        alignContent: 'center',

    },
    textAlign_center:
        { textAlign: 'center' },
    height_d3: {
        height: height / 3
    },
    height_d4: {
        height: height / 4
    },
    flex_1: {
        flex: 1,
    },
    flex_2: {
        flex: 2,
    },
    flex_3: {
        flex: 3,
    },
    flex_4: {
        flex: 4,
    },
    flex_5: {
        flex: 5,
    },
    flex_10: {
        flex: 10,
    },
    justifyContent_Top: {
        justifyContent: 'flex-start',
    },
    MainHeadingBold: {
        fontSize: 16,
        color: Light_Color.gray,
        fontFamily: fonts.PoppinsRegular,
    },
    Action_Container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        paddingHorizontal: 40
    },
    ColorBlue: {
        color: Light_Color.blue
    },
    MV_10: {
        marginVertical: 10
    },
    MV_20: {
        marginVertical: 20
    },
    MV_30: {
        marginVertical: 30
    },
    MV_40: {
        marginVertical: 40
    },
    MT_20: {
        marginTop: 20
    },
    MT_30: {
        marginTop: 30
    },
    MT_40: {
        marginTop: 40
    },
    ScrollViewStyle: {
        flexGrow: 1
    },
    ButtonContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5
    },
    Buttom_sm: {
        width: '40%',
        height: 40
    },
    Buttom_mid: {
        width: '70%',
        height: 40
    },
    Buttom_lg: {
        width: '100%',
        height: 40
    },
    SubHeading_white: {
        fontSize: 18,
        color: Light_Color.white,
        fontFamily: fonts.PoppinsRegular,
    },
    InputSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 6,
        borderRadius: 5,
        marginVertical: 10
    },
    InputIcon: {
        height: 30,
        width: 20,
        marginLeft: 10
    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius: 5
    },
    BackHeader_Start: {
        width: width,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    Back: {
        fontSize: 30,
        fontFamily: fonts.PoppinsSemiBold,
        color: Light_Color.black,
        paddingHorizontal: 20
    },
    SubHeading_gray_16: {
        fontSize: 14,
        color: Light_Color.gray,
        fontFamily: fonts.PoppinsRegular,
        top: -5,
        textAlign: 'center'
    },
    CodeSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 10,
        width: 40,
        margin: 10
    },
});

export default styles