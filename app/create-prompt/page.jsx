'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import Form from '@/components/Form';

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post , setPost] = useState({
    title: '',
    content: '',
    tags: [],
  });

  const CreatePrompt = async (e) => {
    e.preventDefault();
  }
  return (
    <Form
      type="create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handlerequired
    />
  )
}

export default CreatePrompt