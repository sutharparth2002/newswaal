import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Business() {
   const [headlines,setHeadlines]=useState([]);
    const getdata= async ()=>{
        try {
            const res = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=53316e173d804d9abd385b7961b08a28")
            .then((resp)=>setHeadlines(resp.data.articles));
        } catch (error) {
            console.log(error);
        }
    } 
    useEffect(()=>{
        getdata();
    },[])
  return (
      <>
        
        <div className="contianer" style={{height:"auto",color:"#bababa"}}>
            {headlines?headlines.map((headlines,index)=>
                <div className='container my-4' style={{boxShadow:"3px 5px 5px #212529" ,background:"rgb(45 48 58)", height:"auto",width:"50vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <h6 className="title my-3"  style={{fontWeight:"bold"}}>{headlines.title}</h6>
                    {console.log(headlines)}
                    <img src={headlines.urlToImage} alt="" style={{width:"70%"}}/>
                    <p className="desc py-2" style={{fontWeight:"lighter"}}>{headlines.description}</p>
                    <a href={headlines.url} target="_blank" className="btn btn-primary my-4">Read More</a>
                </div>
        ):"Loading..."}
        </div>
        
    </>
  )
}
