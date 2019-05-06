import React from "react";
import { Button,View, Text ,ImageBackground,StatusBar,StyleSheet,TextInput,CheckBox
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import {styles1} from './styles1';
import {styles} from './styles';
import {styles2} from './styles2';

class HomeScreen extends React.Component {
  
  
  
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground source={require('./Images/back.jpg')} style={{width: '100%', height: '100%'}}>
        <StatusBar backgroundColor="#a98274" barStyle="light-content" />
        <View style={styles1.loginContainer}>
        
        <ImageBackground source={require('./Images/slider2.jpeg')} style={styles1.slider}>
         <View style={styles1.textContainer}>
           <Text>connect with people...</Text>
         </View>
         
        </ImageBackground> 
        <View style={styles1.con}>

        <View > 
 
              <Text style={styles1.text}>Don't have an account?</Text>
                

              </View>
              <View>

              <TouchableOpacity
                    style={styles1.button}
                    onPress={() => this.props.navigation.navigate('SignUp')}
                  >
                    <Text style={styles1.buttonText} > Sign up </Text>
              </TouchableOpacity>

              </View>
              
        </View>
        <View style={styles1.con}>

<View > 

      <Text style={styles1.text}>Already have an account?</Text>
       

      </View>
      <View>

      <TouchableOpacity
            style={styles1.button2}
            onPress={() => this.props.navigation.navigate('Details')}
          >
            <Text style={styles1.buttonText} >Log in</Text>
      </TouchableOpacity>

      </View>
      
</View>
        
        
        
        </View>
        
        
     </ImageBackground>
      </View>
      
    );
  }
}
/*const styles1 = StyleSheet.create({
  textContainer:{
    color:'#000000',
    backgroundColor:'#b39ddb',
    width:300,
    height:45,
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
   
    
  },
  button2:{
    backgroundColor:'#af4448',
    width:120,
    height:35,
   
    borderRadius:200,
  },
  buttonText:{
    color:'#ffffff',
    textAlign:'center',
    paddingTop:10,
    fontWeight:"900",
    fontSize:15,
    paddingBottom:20,
    
  },
  loginContainer:{
    width:"100%",
    height:"100%",
    backgroundColor:"rgba(30,14,4,0.7)",
  },
  slider:{
    width:"100%",
    height:300,
  },
  con:{
    flexDirection:'row',
    marginTop:80,
    alignItems:'center',
    justifyContent:'center',
    

  },
  text:{
    color:'#ffffff',
    marginLeft:15,
    marginRight:20,
  },
  button:{
    backgroundColor:'#c97b63',
    width:120,
    height:35,
   
    borderRadius:200,
  },
});*/

class DetailsScreen extends React.Component {
  
  state = {username :"", password:""}
checkLogin(){

const  {username,password}=this.state
console.warn(username,password)
if (username =="admin" && password =="admin"){
  console.warn("log in succesfull!")
  alert("correct")
  this.props.navigation.navigate('form')
}


}

  
  
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground source={require('./Images/back.jpg')} style={{width: '100%', height: '100%'}}>
        
        <StatusBar backgroundColor="#a98274" barStyle="light-content" />
        <View style={styles.loginContainer}>
        
            <TextInput
              style={styles.input}
              placeholder="User Name ..."
              onChangeText={text =>this.setState({username : text})}
              placeholderTextColor="#efebe9"
                
              />
           
            <TextInput
              style={styles.input}
              placeholder="Password ..."
              secureTextEntry={true} 
              placeholderTextColor="#efebe9"
              onChangeText={text =>this.setState({password : text})}
              />
              <View style={styles.check}>
              <CheckBox style={styles.cBox}
                       checkedColor='rgba(240,208,193,0.6)'
                        />
                <Text style={{color:"#ffffff"}}>remember me</Text>
                <TouchableOpacity>
                 <Text style={{color:'rgba(240,208,193,0.9)' , marginLeft:50, fontStyle:'italic'}}>Forgot Password</Text>
                </TouchableOpacity>
              </View>
             
              <TouchableOpacity
                    style={styles.button}
                    onPress={_=>this.checkLogin()}
                   
                  >
                    <Text style={styles.buttonText} > Log in </Text>
              </TouchableOpacity>
              <Text style={{color:"#ffffff",marginTop:20,}}>or Log in with</Text>
              <View style={styles.apiLogIn}>
                      <TouchableOpacity
                            style={styles.buttonFB}
                            onPress={this.onPress}
                          >
                            <Text style={styles.buttonText} > facebook</Text>
                      </TouchableOpacity>
                     
                      <TouchableOpacity
                            style={styles.buttonL}
                            onPress={this.onPress}
                          >
                            <Text style={styles.buttonText} > LinkedIN </Text>
                      </TouchableOpacity>
              
                      </View>
        </View>
        <View style={styles.newAccount}>
        <Text style={{color:'#fffffb'}}>Dont have an account?</Text>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('SignUp')}
                          >
        <Text style={{color:'#ffccbc',marginLeft:6,marginBottom:7}}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        
        </ImageBackground>
      </View>
        
        
        
      
    );
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaaaaa',
  },
  newAccount:{
      flexDirection:'row',
      marginTop:5,
     
      justifyContent: 'center',
  },
  apiLogIn :{
    flexDirection:'row',
   // marginTop:20,
    //width:300,
    //marginRight:25,
    //marginLeft:25,
   // alignItems: 'center',
   marginTop:30,
  },
  buttonFB:{
    width:100,
    height:45,
    backgroundColor:'#3b5998',
    borderRadius:10,
    marginRight:30,
  },
  buttonL:{
    width:100,
    backgroundColor:'#0e76a8',
    borderRadius:10,
    height:45,
    marginLeft:30,
  },

  cBox:{
      borderColor:'#ffffff',
      
  },
  check:{
    flexDirection: 'row',
    alignItems:'flex-start',
    width:300,
    paddingLeft:10

  },
  button:{
    backgroundColor:'#c97b63',
    width:120,
    height:35,
    marginTop:30,
    borderRadius:200,
  },
  buttonText:{
    color:'#ffffff',
    textAlign:'center',
    paddingTop:10,
    fontWeight:"900",
    fontSize:15,
    paddingBottom:20,
    
  },
 
  loginContainer:{
      width:350,
      height:500,
      backgroundColor:'rgba(38,14,4,0.5)',
      paddingLeft:40,
      paddingRight:30,
      alignItems: 'center',
      paddingTop:40,
      borderColor:'#c8b7b5',
      marginLeft:30,
      marginRight:30,
      marginTop:70,
      borderRadius:15
  },
  input :{
    borderColor:'#0000dd',
    backgroundColor:'rgba(240,208,193,0.35)' ,
    height:40,
    width:300,
    marginBottom:30,
    marginTop:10, 
    color:'#000000',
    borderRadius:20,
    paddingLeft:20,
    color:'#ffffff',
    

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop:20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/
class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground source={require('./Images/back.jpg')} style={{width: '100%', height: '100%'}}>
        <StatusBar backgroundColor="#a98274" barStyle="light-content" />
        <View style={styles2.loginContainer}>
        
        <Text style={styles2.para}>Sign Up</Text>
        <Text style={styles2.para2}>Please fill in this form to create an account.</Text>
        
        <View style={styles2.signupContainer}>
      <Text>Name</Text>
      <TextInput 
      style={styles2.input}
      placeholder="Enter Name"
      />
        <Text>Email</Text>
      <TextInput 
      style={styles2.input}
      placeholder="Enter Email"
      
      />
        <Text >Password</Text>
      <TextInput 
      style={styles2.input}
      placeholder="EnterPassword"
      secureTextEntry={true}
      />
         <Text>Confirm Password</Text>
      <TextInput 
      style={styles2.input}
      placeholder="Enter Password again"
      secureTextEntry={true}
      />
      <Text style={styles2.para2}>By creating an account you are agreeing to our Terms and Conditons .</Text>
        <Button
                
                title="submit"
                color="#c97b63"
                
              />
     
      </View>
              
        </View>
        
        
        
        
        
     </ImageBackground>
      </View>
      
    );
  }
}
/* const styles2 =StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
   
   // backgroundColor: '#aaaaaa',
    
    paddingBottom:20,


  },
  img:{
    width:50,
    height:100,
  },
  signupContainer:{
    
    
    paddingLeft:40,
    paddingRight:40,
    alignItems: 'center',
   
    
},
input :{
  borderColor:'#0000dd',
  backgroundColor:'rgba(240,208,193,0.5)' ,
  height:40,
  width:300,
  marginBottom:30,
  marginTop:10,
  color:'#000000',
  borderRadius:20,
  fontWeight:'bold'
 
},
welcome: {
  fontSize: 25,
  textAlign: 'center',
  marginBottom:20,
  fontStyle:'italic'
},
instructions: {
  textAlign: 'center',
  color: '#333333',
  marginBottom: 5,
},
para:{
  fontSize: 25,
  paddingLeft:30,
  fontWeight:'bold',
  justifyContent:'flex-start'
},
para2:{
  fontSize: 15,
  paddingLeft:20,
  fontWeight:'bold',
 
}
});*/

class FormOfInterests extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground source={require('./Images/back.jpg')} style={{width: '100%', height: '100%'}}>
        <StatusBar backgroundColor="#a98274" barStyle="light-content" />
        
        
        
     
      
              
        
        
        
        
        
        
     </ImageBackground>
      </View>
      
    );
  }
}
 


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    SignUp:SignUpScreen,
    form:FormOfInterests,
  },
  {
    initialRouteName: "Home"
  }
);

//export default createAppContainer(AppNavigator);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}