import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Profile() {

const[profile,setProfile] = useState(null)

const[followers,setFollowers] = useState([])

useEffect(()=>{
    axios.get('http://localhost:3000/profile')
    .then(data=>setProfile(data.data))
    .catch(err=>console.log(err))

    axios.get('http://localhost:3000/followers')
    .then(data=>setFollowers(data.data))
    .catch(err=>console.log(err))

},[])

    function HandleOnChange(e){
        setProfile(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const handledUpdate = async()=>{
        axios.put('http://localhost:3000/profile',profile)
        .then(console.log('updated'))
        .catch(err=>console.log(err))
    }


  return (
    <div className='m-5'>
        {profile? (
            <div>
                <img src={profile.profilePic} alt="profile image" className='profile rounded-circle'/>
                <h5>{profile.username}</h5>

                <input type='text'
                        value={profile.username}
                        name='username'
                        className='form-control my-4'
                        onChange={HandleOnChange}
                />
                <input type='text'
                        value={profile.profilePic}
                        name='profilePic'
                        className='form-control'
                        onChange={HandleOnChange}
                />

                <button className='btn btn-primary my-4' onClick={handledUpdate}>
                    Update
                </button>

            </div>
    ):(
        <div>Loading</div>
    )}
    <div className='my-2 fs-4 text'>Followers</div>
    {followers.length>0 ? (
        
            followers.map(follower=>(
                <div key={follower.id} className='d-flex my-2'>
                    
                    <img src={follower.image} alt="image" className='followr-dp rounded-circle my-1'/>
                    {follower.username}
                    <button className='btn btn-secondary ms-auto'>unFollow</button>
                </div>
            ))
        
    ):(
        <div>
            Loading Followers
        </div>
    )}
    
    
    
    
    </div>
  )
}

export default Profile