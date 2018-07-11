import {StyleSheet} from "react-native";
import colors from "../../../utils/colors";

export  default styles = StyleSheet.create({
    oval: {
        backgroundColor: colors.shape,
        transform: [
            {scaleX: 2}
        ]
    }
});