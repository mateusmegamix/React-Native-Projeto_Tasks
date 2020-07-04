import React from 'react'
import {Platform, ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import {Gravatar} from 'react-native-gravatar'
import commonStyles from '../commonStyles'

import axios from 'axios'
import {AsyncStorage} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {

    const logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData')
        props.navigation.navigate('AuthOrApp')
    }
    
    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Tarefas</Text>
                <Gravatar style={styles.avatar}
                    options={{
                        email: props.navigation.getParam('email'),
                        secure: true
                    }} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>
                        {props.navigation.getParam('name')}
                    </Text>
                    <Text style={styles.email}>
                        {props.navigation.getParam('email')}
                    </Text>
                </View>
                <TouchableOpacity onPress={logout}>
                    <View style={styles.logoutIcon}>
                        <Icon name='sign-out' size={30} color='#800' />
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerItems {...props} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    title: {
        color: '#000',
        fontFamily: commonStyles.fontFamily,
        fontSize: 30,
        paddingTop: Platform.OS === 'ios' ? 70 : 30,
        padding: 10
    },
    avatar: {
        width: 70,
        height: 70,
        borderWidth: 5,
        borderRadius: 40,
        margin: 5,
    },
    userInfo: {
        marginLeft: 10,
    },
    name: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        marginBottom: 5
    },
    email: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 15,
        color: commonStyles.colors.subText,
        marginBottom: 10
    },
    logoutIcon: {
        marginLeft: 10,
        marginBottom: 10
    }
})