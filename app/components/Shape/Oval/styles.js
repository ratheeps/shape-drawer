import {StyleSheet} from "react-native";
import colors from "../../../utils/colors";

const styles = StyleSheet.create({
    oval: {
        backgroundColor: colors.shape,
        transform: [
            {scaleX: 2}
        ]
    }
});
export default styles;