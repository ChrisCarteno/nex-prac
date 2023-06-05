"use client";

import {useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {useRouter } from 'next/navigation';

import Profile from '@components/Profile';


const MyProfile = () => {
    const router = useRouter();

    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
        const res = await fetch(`/api/users/${session?.user.id}/clients`);
        const data = await res.json();

          setClients(data);
          console.log(data);
        }

        if(session?.user.id) fetchClients();

      }, []);

    const handleEdit = (post) =>{
        router.push(`/update-prompt?id=${post._id}`);
    }

    const handleDelete = async (post) => {
        const hasConfirmed = confirm('Are you sure you want to delete this client?');

        if(hasConfirmed){
            try{
                await fetch(`/api/client/${post._id.toString()}`, {
                    method: 'DELETE'
            })

            const filteredPosts = posts.filter((p) => p._id !== post._id);
            console.log(filteredPosts);
            setClients(filteredPosts);

            }catch(error){
                console.log(error);
            }
        }
    }

    return(
        <Profile
            name={session?.user.name}
            desc="My clients."
            data={posts}
            data2={clients}
            handleEdit={ handleEdit }
            handleDelete={ handleDelete }
        />
    )
}

export default MyProfile
