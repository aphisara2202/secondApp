import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Flex = () => {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
            <Image styles={styles.image} source={require('../assets/lru.png')} />
            </View>

            <View style={[styles.section]}>
                <Text style={styles.text}>สมุนไพรท้องถื่นไทเลย</Text>
            </View>

            <View style={styles.section}>
                <Image style={styles.coverScreenImage} source={require('../assets/khing.jpg')} />
            </View>
                    
            
            <View style={styles.screenSection}>        
                <Image style={styles.image} source={require('../assets/k1.jpg')} />
                <Image style={styles.image} source={require('../assets/k2.jpg')} />
                <Image style={styles.image} source={require('../assets/k3.jpg')} />
            </View>
            
            <View style={[styles.section]}>
                <Text style={styles.text}>มหาวิทยาลัยราชภัฏเลย</Text>
            </View>
        </View>
    );        
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        blackgroundColor: 'blue',
        flexDirection: 'column',
    },
    section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    coverScreenImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginTop: 100,
    },
    screenSection:{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        marginTop: 100,
    },
    image:{
        width: 120,
        height: 120,
        marginHorizontal: 10,
    },
    text: {
        textAlign:'center',
        fontSize: 32,
        color: 'red'
    },
});
export default Flex;