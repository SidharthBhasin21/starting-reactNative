import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>ActionCard</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style= {styles.headingContainer}>
                    <Text style={styles.headerText}>I am Sidharth Bhasin</Text>
                </View>
                <Image
                    source={{
                        uri: 'https://images.pexels.com/photos/2028261/pexels-photo-2028261.jpeg'
                    }}
                    style={styles.cardImage}
                />
                <View style = {styles.bodyContainer}>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse exercitationem perferendis quis. Ea quibusdam, molestias libero, nobis molestiae repellendus distinctio voluptate eveniet possimus, qui iusto omnis eum. Dignissimos, expedita?
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://github.com/sidharthBhasin21')}
                    >
                        <Text style={styles.socialLinks}>Give me a ⭐</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default ActionCard;
const styles = StyleSheet.create({
    headingText: {
        margin: 6,
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,

    },
    card: {
        width: 350,
        height: 540,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        elevation: 3,
        backgroundColor: '#e07c24',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333'
    },
    headingContainer:{
        height: 40,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',

    },
    headerText:{
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    bodyContainer:{
        padding:10,
    },
    footerContainer:{
        padding:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    cardImage: {
        height: 300
    },
    socialLinks: {
        fontSize:16,
        color:'#000000',
        backgroundColor:'#FFFFFF',
        paddingHorizontal: 15,
        paddingVertical:5,
        borderRadius:6

    },
})