import { Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Kashish Sharma',
          status: 'Just an extra ordinary UI/UX Designer',
          imageUrl: 'https://media.licdn.com/dms/image/C4D03AQEHZEcpsEMFiA/profile-displayphoto-shrink_400_400/0/1660124560061?e=1683158400&v=beta&t=N4oyMUVpIszHQNDM0EHwr9ReVewAuzKd0kM-dlzXD3A',
        },
        {
          uid: 2,
          name: 'Sidharth Bhasin',
          status: 'I ❤️ To Code ',
          imageUrl: 'https://media.licdn.com/dms/image/D4E35AQER4CGyaaeX6Q/profile-framedphoto-shrink_400_400/0/1640762557241?e=1678392000&v=beta&t=iafQ99UdvMddEu4j_eAZVW0zSKDL0mpGeckXB2avpCw',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];
  return (
    <View>
      <Text style = {styles.headingText}>ContactList</Text>
      <ScrollView
        style ={styles.container}
        scrollEnabled={false}
      >
        {contacts.map(({uid,name,status,imageUrl}) =>(
            <View key={uid} style = {styles.userCard}>
                <Image
                    source={{
                        uri:imageUrl
                    }}
                    style = {styles.userImage}

                />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        margin: 6,
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container:{
        paddingHorizontal:16,
        marginBottom: 4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom: 3,
        backgroundColor: '#5DA3FA',
        padding:4,
        borderRadius:10
    },
    userImage:{
        width:60,
        height:60,
        borderRadius: 60/2,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight: '600',
        color: "#FFF",

    },
    userStatus:{
        fontSize:12
    }
    
})