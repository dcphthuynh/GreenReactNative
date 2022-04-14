import { StyleSheet, Dimensions } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,   
    },
    listView: {
        backgroundColor: 'white',
        paddingTop: 56,
      },
    spaceView: {
        marginBottom: 11
    },
    childView: {
        flexDirection: 'row',
        height: 50, 
        borderRadius: 8,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black', 
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 16,
    },
    selectedView: {
        position: "absolute",
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        elevation: 10,
    },
    selectedView1:
    {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlaySelectedView: {
        backgroundColor: 'black',
        opacity: 0.8,
    },
    contentSelectedView: {
        padding: 16, 
        zIndex: 2,
    },
    imageSelectedView: {
        width: Dimensions.get('screen').width, 
        height: Dimensions.get('screen').width, 
        resizeMode: 'contain'
    },
    txt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    }

})

export default Styles