import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Header, Footer } from './Components'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { value: null, items: [], allComplete: false }
  }

  handleToggleAllComplete = () => {
    const allComplete = !this.state.allComplete
    const items = this.state.items.map(item => ({ ...item, allComplete }))
    this.setState({ items, allComplete })
  }

  handleAddItem = () => {
    if (!this.state.value) return
    const items = [
      ...this.state.items,
      { key: Date.now(), text: this.state.value, complete: false },
    ]
    this.setState({ value: null, items })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          value={this.state.value}
          addItem={this.handleAddItem}
          change={value => this.setState({ value })}
          toggleAllComplete={this.handleToggleAllComplete}
        />
        <View style={styles.content}>
          <Text>Content</Text>
        </View>
        <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    ...Platform.select({
      ios: { paddingTop: 35 },
    }),
  },
  content: {
    flex: 1,
  },
})
