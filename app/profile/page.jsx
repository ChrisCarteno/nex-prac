"use client";

import {useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {useRouter } from 'next/navigation';

import Profile from '@components/Profile';


const MyProfile = () => {
    const { data: session } = useSession();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await res.json();

          setPosts(data);
        }
    
        if(session?.user.id) fetchPosts();
      }, []);
    
    const handleEdit = () =>{
        console.log("Edit");
    }

    const handleDelete =async () =>{
        console.log("Delete");
    }

    return(
        <Profile 
            name="My"
            desc="Welcomoe to your pesonlaized profile page"
            data={posts}
            handleEdit={ handleEdit }  
            handleDelete={ handleDelete }
        />
    )
}

export default MyProfile