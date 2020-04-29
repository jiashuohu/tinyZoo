import React from 'react';
import { View, Image, ScrollView, Text, StyleSheet, ImageBackground } from 'react-native';

const ProfileScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerTitleStyle}>Seal</Text>
                        <Image
                            style={styles.headerHeartStyle}
                            source={require('../Assets/heart.png')}
                        />
                        <Text style={styles.likeNumberTextStyle}>158,15k</Text>
                    </View>
                </View>

                <View style={styles.profileContainer}>
                    <Image
                        source={require('../Assets/アセット-3.png')}
                    />
                    <View style={styles.profileContentContainer}>
                        <View style={styles.profileCategoryTextStyle}>
                            <Text>Name</Text>
                            <Text>Gender</Text>
                            <Text>Category</Text>
                            <Text>Location</Text>
                        </View>
                        <View style={styles.profileContentTextStyle}>
                            <Text>Seal</Text>
                            <Text>Male</Text>
                            <Text>Seal</Text>
                            <Text>Taipei Zoo</Text>
                        </View>
                    </View>
                </View>


            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E3E3E3",
    },
    header: {
        marginLeft: 70,
        marginTop: -150,
        height: 280,
        width: 280,
        backgroundColor: '#878787',
        borderRadius: 300,
        transform: [
            { scaleX: 2 }
        ],
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerTitleStyle: {
        transform: [
            { scaleX: 0.5 }
        ],
        marginTop: 180,
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
    },
    headerHeartStyle: {
        marginLeft: 30,
        transform: [
            { scaleX: 0.5 }
        ],
    },
    likeNumberTextStyle: {
        transform: [
            { scaleX: 0.5 }
        ],
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 8,
    },
    leftFeather: {
        marginRight: 10,
    },
    rightFeather: {
        marginLeft: 10,
    },
    imageContainer: {
        marginLeft: 5,
        marginRight: 5,
        // backgroundColor: '#000',
    },
    crownContainer: {
        height: 60,
        width: 196,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#7B7B7B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 10,
    },
    crownImageStyle: {
        height: 40,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rankingTextStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#7B7B7B',
        marginTop: 8,
    },
    profileContainer: {
        marginLeft: 10,
        marginTop: -40,
    },
    profileContentContainer: {
        height: 165,
        width: null,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#7B7B7B',
        flexDirection: 'row',
        marginBottom: 10,
    },
    profileCategoryTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    profileContentTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#BCBCBC',
    }
})
export default ProfileScreen;