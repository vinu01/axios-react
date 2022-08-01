import React,{useState} from 'react'
import axios from 'axios';

function FetchNews() {
    const [news,setNews]=useState([]);
    const fetchName=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=248290b276d54d9590a4547b7fe3f7a8")
        .then((response)=>{
            console.log(response.data.articles);
            setNews(response.data.articles);
        })
        
    }
  return (
   <>
   <div className='container my-3'>
    <div className='row'>
        <div className='col-4'>
        <button className='btn btn-primary' onClick={fetchName}>Fetch News</button>
        </div>
    </div>
   </div>
   <div className="container">
    <div className="row">
      {
        news.map((value)=>{
            return(
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                     <img src={value.urlToImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{value.title}</h5>
                            <p className="card-text">{value.description}</p>
                            <a href={value.url} className="btn btn-primary">Main Source</a>
                        </div>
                     </div>
                 
                </div>
            );
        })
      }
    </div>
    
   </div>
   </>
  )
}

export default FetchNews