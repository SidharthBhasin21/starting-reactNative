import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCard</Text>
            <ScrollView horizontal>
                <View style={styles.container}>
                    <Text style={styles.cards}>Scroll me</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.cards}>Scroll me</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.cards}>Scroll me</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.cards}>Scroll me</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.cards}>Scroll me</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 8,
    },
    cards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        borderRadius: 5,
        margin: 10,
        backgroundColor: "#BADDFA",
        color: 'black'
    }
})