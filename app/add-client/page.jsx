'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import ClientForm from '@components/ClientForm';

const AddClient = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post , setPost] = useState({
    name: '',
    email: '',
    phone: '',
    idNumber: 0,
    comment: ''
  });


  const addClient = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/client/new', {
        method: 'POST',
        body: JSON.stringify({
          userId: session?.user.id,
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
      type='Add'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={addClient}
    />
  )
}

export default AddClient