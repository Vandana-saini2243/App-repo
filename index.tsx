import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, View, Button, ActivityIndicator } from 'react-native';



export default function Home() {
  const [data, setdata] = useState<any>([]);
  const getdata = async () => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products`,
    );
    const json = await response.json();
    //console.log(json);
     setdata(json);
  } catch (error) {
    console.error(error);
  }
};

 
  //sachine();
  //const arr= sachine();
    getdata();
    
  return <View style={{
    height:'100%',
     display:'flex',
  //  justifyContent:'center',
  backgroundColor:'#ddd',
   alignItems:'center',
   paddingTop:100,
   gap:40
   
   //padding:500
  //   //justifyContent:'flex-end',
  //   width:'100%',
  //   gap:10

 }}>
    <Text>The Whole Lists are there : </Text>
    <View >
    
    <FlatList data={data}  renderItem={function (arrayelement){
    //console.log(arrayelement);
    //console.log(arrayelement.index,arrayelement.item);
    return <View style={{
      
      paddingVertical:10,
      paddingHorizontal:10,
      backgroundColor:'#deb887',
      //display:'flex',
      //flexDirection:'row',
      gap:5,
      marginBottom:10,
     alignSelf:'center',
     maxWidth:'70%',
     

    }
    }>

      <Text>Tiems Id : {arrayelement.item.id}</Text>
      
      <Text >Title: {arrayelement.item.title}</Text>
      <Text>Price: {arrayelement.item.price}</Text>
      <Text>Rating's rate: {arrayelement.item.rating.rate}</Text>
      <Text>Rating's count: {arrayelement.item.rating.count}</Text>


    </View>
    }} >
     

  </FlatList>

  </View>
  </View>




 // return <Text>Hello world</Text>

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#deb887',
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
