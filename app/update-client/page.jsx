'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import ClientForm from '@/components/ClientForm';

const EditClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [client , setClient] = useState({
    name: '',
    email: '',
    phone: '',
    idNumber: '',
    comment: '',
  });


useEffect(() => {
    const getClientDetails = async () => {
        const response = await fetch(`/api/client/${promptId}`);
        const data = await response.json();

        setPost({
            name: data.name,
            email: data.email,
            phone: data.phone,
            idNumber: data.idNumber,
            comment: data.comment,
        })
    }

    if(promptId) getClientDetails();
}, [promptId]);
  
  const editClient = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if(!promptId) return alert('Client ID not found');

    try {
      const response = await fetch(`/api/client/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag
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
      post={client}
      setPost={setClient}
      submitting={submitting}
      handleSubmit={editClient}
    />
  )
}

export default EditClient