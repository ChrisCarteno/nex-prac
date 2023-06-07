'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import ClientForm from '@/components/ClientForm';

const EditClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const clientId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [post , setPost] = useState({
    name: '',
    email: '',
    phone: '',
    idNumber: 0,
    comment: '',
  });


useEffect(() => {
    const getClientDetails = async () => {
        const response = await fetch(`/api/client/${clientId}`);
        const data = await response.json();

        setPost({
            name: data.name,
            email: data.email,
            phone: data.phone,
            idNumber: data.idNumber,
            comment: data.comment,
        })
    }

    if(clientId) getClientDetails();
}, [clientId]);

  const editClient = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if(!clientId) return alert('Client ID not found');

    try {
      const response = await fetch(`/api/client/${clientId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: post.name,
          email: post.email,
          phone: post.phone,
          idNumber: post.idNumber,
          comment: post.comment
        })
      })

    if(response.ok) {
      router.push('/')
    }
    } catch(error) {
      console.log(error);
    }finally{
      setSubmitting(false);
    }
  }
  return (
    <ClientForm
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={editClient}
    />
  )
}

export default EditClient
