import {StyleSheet} from "react-native";
import colors from "../../../utils/colors";

export  default styles = StyleSheet.create({
    parallelogram:{
        marginTop: 300
    },
    parallelogramInner: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: colors.shape,
    },
    parallelogramRight: {
        top: 0,
        position: 'absolute'
    },
    parallelogramLeft: {
        top: 0,
        position: 'absolute',
        transform: [
            {rotate: '180deg'}
        ],
    }
});