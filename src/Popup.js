import React, {Component} from "react"
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from "./home.styles"

class Popup extends Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {

        }
    }

    render()
    {
        const {item, onPress} = this.props
        return(
            <View style={[styles.selectedView]}>
            <View style={styles.contentSelectedView}>
                <Image style={styles.imageSelectedView} source={{uri: item.image}}/>
            </View>
                <TouchableOpacity style={[styles.selectedView1, styles.overlaySelectedView]}
                onPress= {onPress}/>
            
        </View>
        )
    }
}

export default Popup