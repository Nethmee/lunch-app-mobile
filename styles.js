
import { StyleSheet } from "react-native";


 export const styles = StyleSheet.create({
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
  });