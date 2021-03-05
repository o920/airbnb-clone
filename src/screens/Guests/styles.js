import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    button : {
        borderWidth : 1,
        width : 30,
        height : 30,
        borderRadius : 30,
        justifyContent : 'center',
        borderColor : '#8d8d8d',
        alignItems : 'center'
    },
    row : {
        flexDirection : 'row', 
        justifyContent : 'space-between', 
        paddingVertical : 20,
        borderBottomWidth : 1,
        borderColor : 'lightgrey',
        marginHorizontal : 20,
    }
});

export default styles;