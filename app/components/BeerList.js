/**
 * Created by artem on 12/11/16.
 */
import React from 'react';
import {
  ListView,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native'

async function getMoviesFromApi() {
  try {
    let response = await fetch('https://facebook.github.io/react-native/movies.json');
    let responseJson = await response.json();
    // return responseJson.movies;
    return responseJson;
  } catch(error) {
    return {

    }
  }
}

export default class BeerList extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows([
        'Beer1', 'Beer2', 'Beer3', 'Beer4', 'Beer5', 'Beer6', 'Beer7', 'Beer8', 'Beer9', 'Beer10', 'Beer11', 'Beer12',
        'Beer1', 'Beer2', 'Beer3', 'Beer4', 'Beer5', 'Beer6', 'Beer7', 'Beer8', 'Beer9', 'Beer10', 'Beer11', 'Beer12',
        'Beer1', 'Beer2', 'Beer3', 'Beer4', 'Beer5', 'Beer6', 'Beer7', 'Beer8', 'Beer9', 'Beer10', 'Beer11', 'Beer12',
        'Beer1', 'Beer2', 'Beer3', 'Beer4', 'Beer5', 'Beer6', 'Beer7', 'Beer8', 'Beer9', 'Beer10', 'Beer11', 'Beer12',
        'Beer1', 'Beer2', 'Beer3', 'Beer4', 'Beer5', 'Beer6', 'Beer7', 'Beer8', 'Beer9', 'Beer10', 'Beer11', 'Beer12',
        'Beer1', 'Beer2', 'Beer3', 'Beer4', 'Beer5', 'Beer6', 'Beer7', 'Beer8', 'Beer9', 'Beer10', 'Beer11', 'Beer12'
      ]),
      apiTest: {},
      loading: null
    };

    this.getMovies = this.getMovies.bind(this);
  }

  async getMovies() {
    this.setState({
      loading: 'Wait for api call'
    });
    const data = await getMoviesFromApi();
    this.setState({
      apiTest: data,
      loading: null
    });
  }

  makeItem(data) {
    return (
      <TouchableOpacity
          onPress={() => {}}
          activeOpacity={75 / 100}>
                  <Image 
          style={{
            width:  75 ,
            height:  50 ,
          }}
          resizeMode={"stretch"}
          source={{uri:'https://unsplash.it/300/200/?random=true'}}
        />
        <Text onPress={this.getMovies}>[icon] - {data} - [checks]</Text>
        </TouchableOpacity>
    )
  }

  render() {

    let {apiTest, loading} = this.state;

    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <Text>{loading}</Text>
        <Text>{apiTest.title}</Text>
        
        <Switch
          value={(this.state && this.state.switchValue) || false}
          onValueChange={(value) => {
            this.setState({switchValue: value})
          }}
          // Color props are iOS-only
          // thumbTintColor={'white'} // Removes shadow
          tintColor={"rgba(230,230,230,1)"}
          onTintColor={"rgba(68,219,94,1)"}
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.makeItem(rowData)}
        />
      </View>
    );
  }
}