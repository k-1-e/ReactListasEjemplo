import React, { useEffect, useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'

const App = () => {

     const [text, setText] = useState ('1990')
     const [edad, setEdad] = useState ( 0 )
     const [nombre, setNombre] = useState ('')
     const [usuarios, setUsurarios] = useState([
      {
        "id": 1,
        "name": "kevin javier",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
        
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
          }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
      }
  },

     ])

     const calcularEdad = (t : string) => {
       const _edad = 2021 - parseInt(t)
      setEdad(_edad)
     }
     const calcularEdadNew = () =>{
       const _edad= 2021 - parseInt(text)
       setEdad (_edad)
     }

     useEffect(() => {
       calcularEdad(text)
     }, [text])
     useEffect(() => {
      setNombre(text)
    }, [])

  return (
    <View style={styles.container}>
      <TextInput 
      style= {{borderColor: "black", borderWidth: 2}}
      onChangeText={setText}
      />
      <Text>Hola su edad es de: { edad } { text } </Text>
     
     {
       usuarios.map(u => (
         <Text key={u.id}>{ u.id} - { u.name }</Text>
       ))
     }
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App




