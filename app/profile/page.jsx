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

    useEffect(() => {
        const fetchPosts = async () => {
        const res = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await res.json();

          setPosts(data);
          console.log(data);
        }

        if(session?.user.id) fetchPosts();

      }, []);

    const handleEdit = (post) =>{
        router.push(`/update-prompt?id=${post._id}`);
    }

    const handleDelete =async (post) =>{
        const hasConfirmed = confirm('Are you sure you want to delete this prompt?');

        if(hasConfirmed){
            try{
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: 'DELETE'
            })

            const filteredPosts = posts.filter((p) => p._id !== post._id);
            setPosts(filteredPosts);

            }catch(error){
                console.log(error);
            }
        }
    }

    return(
        <Profile
            name="My"
            desc="Welcomoe to your pesonlaized profile page"
            data={posts}
            data2={clients}
            handleEdit={ handleEdit }
            handleDelete={ handleDelete }
        />
    )
}

export default MyProfile
