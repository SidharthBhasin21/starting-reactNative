import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: "https://images.pexels.com/photos/13389806/pexels-photo-13389806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardHeading}>Dal Lake</Text>
                    <Text style={styles.cardLabel}>Largest Lake in srinagar</Text>
                    <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, alias ratione nostrum laudantium beatae nemo itaque deserunt et aspernatur vel illum ullam quisquam asperiores at eveniet doloremque fugit, accusantium facere?</Text>
                    <Text style={styles.cardFooter}>12KM away</Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,

    },
    card: {
        width: 420,
        height: 400,
        borderRadius: 6,
        marginHorizontal: 16,
        marginVertical: 12,

    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 210,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6

    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardHeading: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 4
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginTop: 6,
        marginBottom: 12
    },
    cardFooter: {
        fontSize: 13,
        color: '#000000',
    }
})