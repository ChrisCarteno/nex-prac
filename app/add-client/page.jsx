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
    clientId: '',
    comments: ''
  });

  

  const addClient = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/client/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
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
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={() => {}}
    />
  )
}

export default AddClient