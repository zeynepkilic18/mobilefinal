import { View, Text,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/Shared/GlobalApi';
import { FlatList } from 'react-native-gesture-handler';
//Strapide kayıtlı datanın gösterilmesi 
type SliderItem = {
    id: number;
    name: string;
    image: string;
  };
  
  type SliderResponse = {
    data: {
      id: number;
      attributes: {
        name: string;
        image: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
    }[];
  };

export default function Slider() {
    const [slider,setSlider]=useState<SliderItem[]>([]);
    useEffect(()=>{
        getSlider();
      },[]);
        const getSlider=async()=>{
          try{
            const result=(await GlobalApi.getSlider()).data as SliderResponse;
          const resp=result.data?.map((item)=>({
            id:item.id,
            name:item.attributes.name,
            image:item.attributes.image.data.attributes.url
          }))
          //console.log("Slider list",resp);
          setSlider(resp);
          }catch(err){
            console.error('Error fetching slider data:', JSON.stringify(err, null, 2));


          }
        }
  return (
    <View>
      <FlatList
        data={slider}
        renderItem={({item})=>(
            <View>
                <Image source={{uri:item.image}}
                style={{width:100,height:100}}/>
            </View>
        )}
      />
    </View>
  )
}