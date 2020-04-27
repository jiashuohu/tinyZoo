import React from 'react';
import { View, Image, ScrollView, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.backgroundContainer}>
                    <Image
                        source={require('../Assets/Rectangle_194.png')}
                    />
                    <View style={styles.logoContainer}>
                        <Image
                            style={{ marginTop: -130 }}
                            source={require('../Assets/tiny-zoo-2.png')}
                        />
                        <Image
                            style={{ marginTop: -90, marginRight: -280 }}
                            source={require('../Assets/settings-white-24dp.png')}
                        />
                        <Image
                            style={{ marginTop: 65, marginRight: -220 }}
                            source={require('../Assets/search-white-1.png')}
                        />
                        <View style={styles.searchLine} />
                    </View>
                </View>
                <View style={styles.iconContainer}>
                    <Image
                        style={styles.iconLeft}
                        source={require('../Assets/Group-316.png')}
                    />
                    <Image
                        style={styles.icon}
                        source={require('../Assets/Group-17.png')}
                    />
                    <Image
                        style={styles.icon}
                        source={require('../Assets/Group-318.png')}
                    />
                    <Image
                        style={styles.iconRight}
                        source={require('../Assets/Group-319.png')}
                    />
                </View>
                <Image
                    style={{ height: 150, width: null, marginRight: 30 }}
                    source={require('../Assets/Group-310.png')}
                />
                <View style={styles.photoCotainer}>
                    <View style={styles.photo}>
                        <Image
                            resizeMode='contain'
                            style={styles.photoImage}
                            source={require('../Assets/mouse.png')}
                        />
                    </View>
                    <View style={styles.photo}>
                        <Image
                            // resizeMode='contain'
                            style={styles.photoImage}
                            source={require('../Assets/owl.png')}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 750,
        backgroundColor: "#FCFFD8",
    },
    backgroundContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    backdrop: {
        flex: 1,
    },
    logoContainer: {
        alignItems: "center",
    },
    searchLine: {
        width: 200,
        marginTop: -8,
        marginRight: 20,
        borderBottomColor: '#fff',
        borderBottomWidth: 4,
    },
    iconContainer: {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconLeft: {
        height: 60,
        width: 60,
        marginLeft: 40,
    },
    icon: {
        height: 60,
        width: 60,
    },
    iconRight: {
        height: 60,
        width: 60,
        marginRight: 40,
    },
    photoCotainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
        paddingTop: 30,
    },
    photo: {
        height: 170,
        width: 170,
        backgroundColor: '#F3A6A6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center",
    },
    photoImage: {
        height: 160 ,
        width: 160 ,
        borderRadius: 15
    }
})
export default HomeScreen;