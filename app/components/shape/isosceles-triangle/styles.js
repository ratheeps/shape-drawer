import {StyleSheet} from "react-native";
import colors from "../../../utils/colors";

export  default styles = StyleSheet.create({
    triangle :{
        marginTop: 100,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: colors.shape
    }
});