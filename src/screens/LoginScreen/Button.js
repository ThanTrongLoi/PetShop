import React, {PureComponent} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DimensionApp } from '../../unit/dimensions'

import LogoGoogle from '../../assets/images/googlelogo.png'
import LogoFaceBook from '../../assets/images/facebooklogo.png'

class ButtonLogin extends PureComponent {
    render(){
        return (
            <View style = {styles.container}>
                <View style = {{flex: 1}}>
                    {/* Button SignIn */}
                    <TouchableOpacity 
                        style = {styles.btnSignIn}
                        onPress = {() => this.props.onGoToMainScreen()}>
                        <Text style = {styles.textSign}>SignIn</Text>
                    </TouchableOpacity>
                    {/* text Or */}
                    <Text style = {{textAlign: 'center', 
                                    marginVertical: 10,
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    color: '#00867d'}}>Or</Text>
                    {/* btnGroup */}
                    <View style = {styles.btnGroup}>
                        {/* login with google */}
                        <TouchableOpacity 
                            style = {styles.btnGoogle}>
                            <Image 
                                style = {{width: 20, height: 20}}
                                source = {LogoGoogle}/>
                            <Text style = {{
                                color: '#000000',
                                fontSize: 20,
                                fontWeight: '600',
                                marginLeft: 10,
                            }}>Goolge</Text>
                        </TouchableOpacity>
                        {/* login with facebook */}
                        <TouchableOpacity 
                            style = {styles.btnFacebook}>
                            <Image 
                                style = {{width: 20, height: 20}}
                                source = {LogoFaceBook}/>
                            <Text style = {{
                                color: '#ffffff',
                                fontSize: 20,
                                fontWeight: '600',
                                marginLeft: 10
                            }}>FaceBook</Text>
                        </TouchableOpacity>
                    </View>
    
                    {/* sign Up */}
                    <View style = {styles.viewTEXTSIGNUP}>
                        <Text style = {{
                            fontSize: 18,
                            fontWeight: '500',
                        }}>Not yet a Member? </Text>
                        <TouchableOpacity>
                            <Text style = {styles.textSign}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default ButtonLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    btnSignIn: {
        backgroundColor: '#00867d',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        padding: 10,
        marginHorizontal: 25,
        borderRadius: 10,
    },
    btnGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
    },
    btnGoogle: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        marginHorizontal: 10,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1
    },
    btnFacebook: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#002f6c',
        marginHorizontal: 10,
        borderRadius: 5,
        // borderColor: 'gray',
        borderWidth: 1
    },
    viewTEXTSIGNUP:{
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    textSign:{
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center'
    },
    
})