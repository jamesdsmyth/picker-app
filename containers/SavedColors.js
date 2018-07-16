import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';

class SavedColors extends Component {
  render() {
    const list = this.props.colors;
    console.log(this.props.colors);
    console.log(this.props.colors[Object.keys(this.props.colors)[0]].rgb.toString());
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            // {key: 'Devin'},
            // {key: 'Jackson'},
            // {key: 'James'},
            // {key: 'Joel'},
            // {key: 'John'},
            // {key: 'Jillian'},
            // {key: 'Jimmy'},
            // {key: 'Julie'},
            list
          ]}
          renderItem={({item, index}) => {
            <Text key={index}>
              {list[Object.keys(list)[index]].toString()}
              {/* THIS IS NOT RENDERING PROPERLY!!!!! */}
            </Text>
          }
          }
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    colors: state.colors
  }
}

export default connect(mapStateToProps)(SavedColors);