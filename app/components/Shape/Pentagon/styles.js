import {StyleSheet} from "react-native";
import colors from "../../../utils/colors";

export  default styles = StyleSheet.create({

    pentagon: {
        backgroundColor: 'transparent'
    },
    pentagonInner: {
        borderBottomColor: colors.shape,
        borderBottomWidth: 0,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: colors.shape,
    },
    pentagonBefore: {
        position: 'absolute',
        height: 0,
        width: 0,
        left: 0,
        borderStyle: 'solid',
        borderBottomColor: colors.shape,
        borderLeftColor: 'transparent',
        borderLeftWidth: 45,
        borderRightColor: 'transparent',
        borderRightWidth: 45,
        borderTopWidth: 0,
        borderTopColor: 'transparent',
    }
});