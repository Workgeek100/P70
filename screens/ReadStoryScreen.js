import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text>ReadStory</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"lightblue"
    }
})