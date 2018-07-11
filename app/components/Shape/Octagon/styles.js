import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    octagon: {

    },
    octagonFlat: {
        position: 'absolute',
        top: 0,
        left: 0,
        transform: [
            {rotate: '90deg'}
        ]
    },
    octagonLeft: {
        position: 'absolute',
        top: 0,
        left: 0,
        transform: [
            {rotate: '-45deg'}
        ]
    },
    octagonRight: {
        position: 'absolute',
        top: 0,
        left: 0,
        transform: [
            {rotate: '45deg'}
        ]
    }
});
export default styles;