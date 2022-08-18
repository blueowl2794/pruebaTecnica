// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../store/reducer';
import CardsContent from './CardsContent';

const Content = () => {
  const { infos } = useSelector(state => state.info);
  const dispatch = useDispatch();
  // const [data,setData] = useState([])
  console.log("soyinfos",infos[0])
  useEffect(() =>{
    dispatch(getInfo());

    // ( async () => {

    //   const config = {
    //     headers: { Authorization: `Bearer ${localStorage.token}` }
    //   };
    //   // console.log(localStorage.token)
    
    //   // const bodyParameters = {
    //   //   key: "value"
    //   // };
    
    //   await axios.get( 
    //     'http://localhost:3000/content',
    //     config
    //   ).then((data)=>setData(data.data)).catch(console.log);
    //     // const {subdata} = await axios.get('http://localhost:3000/content')
    //     // setData(subdata)
    // }
    // )();
  },[]) 
  return (
    <div>
      content 
      {infos?infos.map(data => (<CardsContent props={data}/>)): null}
      {/* <img src={'maxresdefault.jpg'} alt="img" /> */}
    </div>
  )
}

export default Content
