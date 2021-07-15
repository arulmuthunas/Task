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
        margin: wp(1.5),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5.00,
        height: wp(43),
        width: wp(55),
        elevation: 2,
        borderRadius: wp(3),
        padding: wp(3),
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

  
    name: {
        textAlign: "left",
        fontSize: wp(4),
        color: "black",
        fontWeight: "bold",
        marginBottom: wp(1),
        marginTop: wp(2),
    },
    price: {
        fontSize: wp(3.5),
        color: "black",
        fontWeight: "bold",
    },
    productRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: wp(4),
        marginHorizontal: wp(3),
        marginBottom:wp(2)
    },
    topSellers: {
        fontSize: wp(5.4),
        color: "black",
        fontWeight: "bold",
    },
    view:{
        fontSize: wp(5.1),
        color: "black",
        fontWeight: "bold",
    },
})