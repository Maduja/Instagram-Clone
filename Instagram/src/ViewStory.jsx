import React, { useEffect, useState } from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'
function ViewStory() {

    const{id} = useParams()

    const[story,setStory] = useState(null)

    //const navigate = useNavigate()

    useEffect(()=>{
        fetch('http://localhost:3000/story/'+ id)
        .then(data=>data.json())
        .then(data=>setStory(data))
        .catch(err=>console.log(err))
    },[id])

  return (
    <div>
        {story? 
            <div className='d-flex justify-content-center align-items-center'>
                <Link to={`http://localhost:5173/story/${Number(id)-1}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
                <img src={story.image} alt="story" className='vh-100'/>
                <Link to={`http://localhost:5173/story/${Number(id)+1}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
            </div>:
        
            <div>Loading</div>}
    </div>
  )
}

export default ViewStory