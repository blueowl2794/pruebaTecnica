import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';
import { getInfo } from '../store/reducer';
import CardAC from './CardAC';

const AdminContent = () => {
    const { infos } = useSelector(state => state.info);
    const dispatch = useDispatch();
    const [id, setId] = useState("")
    const [data,setData] = useState({
        title:'',
        description:'',
        myFile:'',
        categoryId:'',
    })
    console.log("admincontent",infos)

    useEffect(() =>{
        dispatch(getInfo());
        
    },[]) 

    const onChange = (e)=>{
        e.preventDefault()
        setData( {
            ...data,
            [e.target.name]: e.target.value
        }) 
    }

    const onSubmit = async(e)=>{
        e.preventDefault()
        const dataFile = new FormData();
        dataFile.append('myFile',data.myFile)


        const config = {
            headers: { Authorization: `Bearer ${localStorage.token}` }
        };

        await axios.patch(`http://localhost:3000/content/${id}`,data,config )//{ withCredentials: true }
        .then((c)=>{
            axios.defaults.headers.common['Authorization']=`Bearer ${c.data['token']}`;
            console.log("cDeOnsubmit", c.data);
            
        })

    }    
  return (
    <div>
        <Swiper
            spaceBetween={0}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            >

                {infos?infos.map(i=>(
                    <SwiperSlide key={"i.id"}>
                        {/* <CardMenu key={a.id} props ={a}/>  */}
                        <CardAC key={i.id} props ={i} setId={setId}/>

                    </SwiperSlide>
                
                )):null}
                
        </Swiper>
        <form onSubmit={onSubmit}>
            {/* <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>selecciona el contenido a modificar</option>
                {infos?infos.map(i=>(<option value={i.id}>{i.title}</option>)):null}
            </select> */}
            
            <div class="col-md-4">
                <label for="validationCustom01" class="form-label">Nuevo titulo</label>
                <input type="text" onChange={onChange}  value={data.title} name="title" class="form-control" id="validationCustom01"  required/>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Nueva descripcion</label>
                <textarea onChange={onChange}  value={data.description} name="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <select name="categoryId" onChange={onChange} class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>Selecciona una nueva categoria</option>
                <option  name="categoryId" value="1">entretenimiento</option>
                <option  name="categoryId" value="2">aventura</option>
                <option  name="categoryId" value="3">infantil</option>
                <option  name="categoryId" value="4">adultos</option>
            </select>
        
            <div class="mb-3">
                <label for="formFile" class="form-label">Nuevo archivo </label>
                <input class="form-control" type="file" id="formFile" onChange={(e)=>setData({...data, [e.target.name]:e.target.files[0]})}  /*value={data.myFile}*/ name="myFile" />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default AdminContent
