import React from 'react'
import { StyleSheet,View ,Image,TouchableOpacity,Text } from 'react-native';
import {Colors, Images, Metrics} from '../../theme'
import TextInput from '../../components/common/Input';
import cs from '../../theme/common-styles';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../../components/common/Button';


const validationSchema = yup.object().shape({
    email:yup
    .string()
    .trim()
    .label("Email")
    .email()
    .required("Email field is empty "),
    password:yup
    .string()
    .label("Password")
    .required("Password field is empty"),

})


export default function Login({navigation}) {
    return (
        <View style={cs.container}>
         <Image source={Images.landing} style={{width:'100%'}}/>
         <Formik initialValues={{email:'',password:''}}
                 onSubmit={(values,action)=>{
                     console.log({values});
                 }}
                 validationSchema={validationSchema}
         >

         {
             (formikProps)=>{
                 return (
                    <View style={styles.formWrapper}>
                        <TextInput
                         placeholder="Email"
                         formikProps={formikProps} 
                         formikKey={"email"}
                         autoCapitalize="none"    
                         />
                         <TextInput
                             placeholder="Password"
                             formikProps={formikProps}
                             formikKey={"password"}
                             secureTextEntry={true}
                         />
                         <Button  
                         onPress={formikProps.handleSubmit}
                         style={{margin:Metrics.doubleBase}} 
                         title="Login"/>
                    </View>

                 )
             }
         }

        

         </Formik>
         <View style={styles.footer}>
            <TouchableOpacity onPress={()=>navigation.navigate("Signup")}> 
               <Text>
                  Don't have an account? <Text style={{color:"#18B18D"}}>Sign up</Text>
               </Text>

            </TouchableOpacity>

         </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    formWrapper:{
        marginTop:Metrics.doubleBase,
        marginHorizontal:Metrics.base,
    },
    footer:{
        flex:1,
        justifyContent:"flex-end",
        paddingBottom:Metrics.base,
        alignItems:"center"
    }
    ,
    textCenter:{

       
       
    }
})
