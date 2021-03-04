import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
    image : {
        width : '100%',      // whole of the screen
        height : 500,
        resizeMode : 'cover', // cover the whole View which is displayed
        justifyContent : 'center',
        position: 'absolute',
        zIndex : -1
    },
    title : {
        fontSize : 80,
        fontWeight : 'bold',
        color : 'white',
        width : '70%',
        marginLeft : 25,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    button :{
        backgroundColor : '#fff',
        marginLeft : 25,
        marginTop : 25,
        width : 200,
        height : 40,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
    },
    buttonText :{
        fontSize : 16,
        fontWeight : 'bold',
    },
    searchbutton: {
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('screen').width - 20,
        borderRadius: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        zIndex: 300,
      },
      searchbuttonText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    //make width same as screen size
});

export default Styles;