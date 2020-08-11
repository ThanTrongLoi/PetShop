import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'

const TabProfile = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.headerTab}>
                <Text style={styles.textHeader}> PROFILE </Text>
            </View>
            {/* End-Header */}


        </SafeAreaView>
    )
}
export default TabProfile
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    headerTab: {
        flex: 1,
        alignItems: 'center',
    },
    textHeader: {
        color: '#000',
        fontSize: 20,
        fontWeight: "bold",
    }
})
