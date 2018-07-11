import {StyleSheet} from "react-native";
import colors from "../../../utils/colors";

const styles = StyleSheet.create({
    hexagon: {
        marginTop: 100
    },
    hexagonInner: {
        backgroundColor: colors.shape
    },
    hexagonAfter: {
        position: 'absolute',
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: colors.shape
    },
    hexagonBefore: {
        position: 'absolute',
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: colors.shape

    }
});

export default styles;