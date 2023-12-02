import { StyleSheet, Text, View, ScrollView,TextInput, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './style'
import {useState} from 'react'

export default function App() {
  const [name,setName] = useState('') 
  const [email,setEmail] = useState('')
  const [mobile,setMobile] = useState('')
  const [work,setWork] = useState('')

  const [toggle,setToggle] =useState(false)

  const handleSubmit = ()=>{
      setToggle(true)
  }
  const handleReset = ()=>{
    setToggle(false)
}

  return (
    <SafeAreaView style={styles.safeArea}>

      <ScrollView>
        <View style={styles.body}>

          <View style={styles.heading}>
            <Text style={styles.headWord}>Shubham Gaonkar</Text>
          </View>
        
          <Text style={styles.headline}> Get in touch with me</Text>
          
        <View style={styles.form}>
          <Text style={styles.label} >Name</Text>
          <TextInput  style={styles.input} placeholder='Enter Name' placeholderTextColor='#C0C0C0' onChangeText={(name)=>setName(name)}/>

          <Text style={styles.label} >Email</Text>
          <TextInput style={styles.input} placeholder='Enter Email' placeholderTextColor='#C0C0C0' onChangeText={(email)=>setEmail(email)}/>

          <Text style={styles.label} >Mobile</Text>
          <TextInput style={styles.input} placeholder='Enter Mobile' placeholderTextColor='#C0C0C0' onChangeText={(mobile)=>setMobile(mobile)}/>

          <Text style={styles.label} >College/Work Place</Text>
          <TextInput style={styles.input} placeholder='Enter ' placeholderTextColor='#C0C0C0'
          
          onChangeText={(work)=>setWork(work)}/>
          <View style={styles.mainButtons}>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={{color: 'white', fontSize: 20}}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleReset} style={styles.button}>
                <Text style={{color: 'white', fontSize: 20}}>Reset</Text>
            </TouchableOpacity>
          </View>
          {/* <Button title='Submit' onPress={handleSubmit} style={styles.button}/> */}
        </View>
      
      {toggle ? <View style={styles.content}> 
                        <Text style={styles.content1}>{name} </Text>
                        <Text style={styles.content1}> {email} </Text>
                        <Text style={styles.content1}> {mobile} </Text>     
                          <Text style={styles.content1}> {work}</Text>  
              </View>
                      
            : null
      }
    <Text></Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}