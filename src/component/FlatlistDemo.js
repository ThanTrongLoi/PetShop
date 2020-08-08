import React, { Component } from 'react'
import {Text, 
        View,
        StyleSheet, 
        FlatList,
        TouchableOpacity,
        SafeAreaView,
        TextInput,
        Alert} from 'react-native' 
import {DimensionApp} from '../unit/dimensions'
import RNPickerSelect from 'react-native-picker-select';




export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = { 
            words:  [
                {id: 1, en: 'One', vn: 'Một', isMemorized: true},
                {id: 2, en: 'Two', vn: 'Hai', isMemorized: true},
                {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
                {id: 4, en: 'Four', vn: 'Bốn', isMemorized: true},
                {id: 5, en: 'Five', vn: 'Năm', isMemorized: true}
            ],
            shouldShowForm : false,
            en : '',
            vn : '', 
            filterMode: 'Show_All',
        }
    }
  

    toggleForm = () => {
        this.setState({shouldShowForm : !this.state.shouldShowForm})
    }
    
    
    renderForm = () => {
        if (this.state.shouldShowForm){
            return (
                <View >
                    <View style={styles.containerTextInput}>
                    <TextInput 
                        ref={ref=>this.textInputEn = ref}
                        onChangeText={text =>  this.state.en = text}
                        placeholder="English"
                        style={styles.textInput}/>
                    <TextInput 
                        ref={ref=>this.textInputVn = ref}
                        onChangeText={text => this.state.vn = text}
                        placeholder="Vietnamese"
                        style={styles.textInput}/>
                    </View>
                    <View style={styles.containerTouchable}>
                        <TouchableOpacity
                            onPress = {()=>{
                                const { en , vn } = this.state
                                if(!en.length > 0 || !vn.length > 0){
                                    Alert.alert(
                                        "Thong bao",
                                        "Ban chua nhap du thong tin",
                                        [
                                            {text : 'Da hieu' , style : 'cancel'},
                                        ],
                                        { cancelable: false }
                                    ) 
                                }else{
                                    const newWords = Object.assign([],this.state.words)
                                    const newWord = {
                                        
                                    }
                                }
                            }}
                            style={styles.touchableAddword}
                        >
                            <Text style={styles.textTouchable}>Add word</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.toggleForm}
                            style={styles.touchableCancel}
                        >
                            <Text style={styles.textTouchable}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            );
        } else {
            return (
                <TouchableOpacity
                    style={styles.buttonOpenForm}
                    onPress={this.toggleForm}>
                    <Text style={styles.textOpenForm}>+</Text>
                </TouchableOpacity>
            )
        }
    }
    toggleWord = (id) => {
        const newWords = this.state.words.map(word => {
            if (word.id == id){
                return {...word , isMemorized : !word.isMemorized}
            }
            return word
        })
        this.setState({words : newWords})
    }
    removeWord = (id) => {
        
            const newWords = this.state.words.filter(word => word.id != id)
            this.setState({words : newWords})
        
    }
    renderItemWord = (item) => {
        const { filterMode } = this.state
        if(filterMode === 'Show_Forgot' && item.isMemorized){
            return null
        } else if (filterMode === 'Show_Memorized' && !item.isMemorized){
            return null
        } else{
            return(
                <View style = {styles.flexBoxWords}>
                    <View style = {styles.flexBoxElement}>
                        <Text style = {styles.textEN}>
                            {item.en}
                        </Text>
                        <Text style = {[styles.textVN]}>
                            {item.isMemorized == false ? '----' : item.vn}
                        </Text>
                    </View>
                    <View style = {styles.flexBoxElement}>
                        <TouchableOpacity 
                            onPress={() => this.toggleWord(item.id)}
                            style = {[styles.touch,
                                    {backgroundColor: item.isMemorized == false ? '#2BA848' : '#DC3545'}]}>
                            <Text style = {styles.textTouch}>
                                {item.isMemorized == false ? 'Forgot' : 'Memorized'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => this.removeWord(item.id)}
                            style = {[styles.touch,{backgroundColor: '#DC3545'}]}>
                            <Text style = {styles.textTouch}>
                                Remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
       
    }
    render() {
        return (
            <SafeAreaView style = {styles.container}>
                {this.renderForm()}
                <View style={styles.containerPickerStyle}>
                    <RNPickerSelect
                        value={this.state.filterMode}
                        onValueChange={(value) => this.setState({filterMode : value})}
                        items={[
                            { label: 'Show All', value: 'Show_All'},
                            { label: 'Show Forgot', value: 'Show_Forgot' },
                            { label: 'Show Memorized', value: 'Show_Memorized' },
                        ]}
                    />
                </View>
                <FlatList
                    data = {this.state.words}
                    extraData = {this.state.words}
                    keyExtractor = {(item,index)=>index.toString()}
                    renderItem = {({item}) => this.renderItemWord(item)}
                />
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    flexBoxWords: {
                marginHorizontal: 20,
                height: DimensionApp.getHEIGHT()/4,
                flexDirection: 'column',
                backgroundColor: '#4f5b62',
                marginBottom: 10,
                borderRadius: 20,
                justifyContent: 'space-around',
            },
            flexBoxElement: {
                flexDirection: 'row',
                justifyContent: 'space-around',
            },
            textEN: {
                color: '#2BA848',
                fontSize: DimensionApp.getWIDTH()/12,
            },
            textVN: {
                color: '#DC3545',
                fontSize: DimensionApp.getWIDTH()/12
            },
            touch: {
                width: DimensionApp.getHEIGHT()/6,
                padding: DimensionApp.getWIDTH()/50,
                borderRadius: 10
            },
            touchRemove: {},
            textTouch: {
                color: '#ffffff',
                fontSize: DimensionApp.getWIDTH()/16,
                textAlign: 'center'
            },

 
    containerTextInput: {
        width : '100%',
        height: 150,
        justifyContent : 'space-evenly'
    },
    textInput : {
        borderWidth : 1,
        height: 60,
        fontSize : 20,
        paddingHorizontal: 10,
    },
    touchableAddword : {
        backgroundColor : '#218838',
        padding : 15,
        borderRadius : 10
    },
    textTouchable: {
        color : 'white',
        fontSize : 20,
        fontWeight : '500'
    },
    touchableCancel: {
        backgroundColor : 'red',
        padding : 15,
        borderRadius : 10
    },
    buttonOpenForm: {
        width : '100%',
        height : 50,
        backgroundColor : '#45B157',
        borderRadius : 5,
        marginBottom : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    textOpenForm: {
        color : 'white',
        fontSize : 30
    },
    containerTouchable: {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        marginBottom : 10
    },
    containerPickerStyle: {
        borderWidth: 1,
        borderRadius: 1,
        borderColor: 'black',
        padding : 20,
        marginBottom: 10
      },
      pickerStyle: {
        padding: 50,
      },
})
