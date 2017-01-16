/**
 * Created by artem on 12/11/16.
 */
import React from 'react';
import {
    StyleSheet,
  ListView,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
    Button
} from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class BeerList extends React.Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
    }
    render() {
        const {beerList, isProfileView, onPressHandler }= this.props;
        const listOfBeersAll = [
            {id: 1, name: 'Amstel Light'},
            {id: 2, name: 'Blue Moon'},
            {id: 3, name: 'Blue Point Blueberry'},
            {id: 4, name: 'Blue Point Toasted'},
            {id: 5, name: 'Budweiser'},
            {id: 6, name: 'Bud Light'},
            {id: 7, name: 'Bud Light Platinum'},
            {id: 8, name: 'Coors Light'},
            {id: 9, name: 'Corona'},
            {id: 10, name: 'Corona Light'},
            {id: 11, name: 'Dos Equis'},
            {id: 12, name: 'Guiness'},
            {id: 13, name: 'Heineken'},
            {id: 14, name: 'Heineken Light'},
            {id: 15, name: 'Miller Light'},
            {id: 16, name: 'Sam Adams'},
            {id: 17, name: 'Stella Artois'}
        ];
        console.log('comp: ', beerList, beerList.length);
        /*const beerList = this.props.beerList;
         const removeBeerFromMyList = this.props.removeBeerFromMyList;*/
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let datSource = isProfileView ? ds.cloneWithRows(beerList) : ds.cloneWithRows(listOfBeersAll);

        let btnTitle = isProfileView ? 'DEL' : 'ADD';

        let fullListBtnFragment = function() {
            return (
                <Button title="Full beer list"
                        onPress={() => Actions.details()}/>
            );
        };

        let rowBtnFragment = function(rowData) {
            let filteredList = beerList.filter(function(el) {
                return el.id === rowData.id;
            });
            //console.log('filteredList: ', filteredList.length);
            if (!isProfileView && filteredList.length === 1) {
                return (
                    <Text>Already In Tasting...</Text>
                );
            }
            return (
                <Button title={btnTitle}
                        onPress={() => onPressHandler(undefined, rowData)}/>
            )
        };

        if (isProfileView && beerList.length === 0) {
            return (
                <View style={styles.container}>
                    <Text>No beers chosen yet. Proceed to </Text>
                    {fullListBtnFragment()}
                    <Text> for adding a few.</Text>
                </View>
            )
        } else {
            return (
                <View style={{paddingTop: 22}}>
                    <ListView
                        dataSource={datSource}
                        renderRow={(rowData) =>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#000000'}}>
                                <View>
                                    <Text>{rowData.id}: {rowData.name}</Text>
                                </View>
                                <View>
                                    {rowBtnFragment(rowData)}
                                </View>
                            </View>
                        }
                    />
                    {isProfileView ? fullListBtnFragment() : <Text></Text>}
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2C57C',
    },
    welcome: {
        fontSize: 30,
        fontWeight: '900',
        color: '#1C110A',
    },
});
