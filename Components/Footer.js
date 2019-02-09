import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Footer extends Component {
  render() {
    return (
      <View style={null}>
        <Text style={null}>Footer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
})
