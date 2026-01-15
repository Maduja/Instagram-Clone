import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Profile() {

const[profile,setProfile] = useState(null)

useEffect(()=>{
    axios.get('http://localhost:3000/profile')
    .then(data=>setProfile(data.data))
},[])

    function HandleOnChange(e){
        setProfile(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
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

                <button className='btn btn-primary my-4'>
                    Update
                </button>

            </div>
    ):(
        <div>Loading</div>
    )}</div>
  )
}

export default Profile