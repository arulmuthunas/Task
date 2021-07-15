import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    Bannercontainer: {
        flex: 1,
        marginTop: wp(3),
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    listView: {
        margin: wp(2),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.00,
        height: wp(43),
        width: wp(45),
        backgroundColor: "white",
        elevation: 4,
        borderRadius: wp(3),
        padding: wp(3),
    },
    flatlistView:{
  marginHorizontal:wp(1)
    },
    productImg: {
        width: wp(25),
        height: wp(20),
        marginBottom: wp(2),
        alignSelf: "center"
    },
    absolute: {
        position: "absolute",
        bottom: wp(3),
        left: wp(4)
    },
    captialText: {
        fontSize: wp(5),
        marginVertical: wp(6),
        marginHorizontal: wp(6)
    },
    flagImg: {
        width: wp(20),
        height: wp(20),
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    topSellers: {
        textAlign: "left",
        fontSize: wp(5.4),
        color: "black",
        fontWeight: "bold",
        marginBottom: wp(4),
        marginTop: wp(3),
        marginHorizontal: wp(3)
    },
    name: {
        textAlign: "left",
        fontSize: wp(4),
        color: "black",
        fontWeight: "bold",
        marginBottom: wp(1),
        marginTop: wp(2),
    },
    productRow: {
        marginTop: wp(2),
        flexDirection: "row",
        justifyContent: "space-between",

    }
})