"use client";

import {useState} from 'react';
import Image from 'next/image';
import {useSession } from 'next-auth/react';
import { usePathname, useRouter} from 'next/navigation';

function ClientCard({ post, handleEdit, handleDelete }) {
  const { data: session } = useSession();
  const pathName = usePathname();

  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.phone);
    navigator.clipboard.writeText(post.phone);
    setTimeout(() => setCopied(""), 3000);
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
      <a href={'tel:' + post.phone} className='font-inter text-sm'>
        {post.phone}
      </a>
        <div className="copy_btn" onClick={handleCopy}>  
          <Image
            src={copied === post.phone ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            alt="copy_icon"
            width={12}
            height={12}
            className='object-contain'
          />
        </div>
      </div>
      <p className="font-satoshi text-sm text-gray-700">{post.name}</p>
      <p className="font-satoshi text-sm text-gray-700">{post.email}</p>
      <p className="font-satoshi text-sm text-gray-700">{post.idNumber}</p>
      <p className="font-satoshi text-sm text-gray-700">{post.comment}</p>
      {session?.user.id === post.creator._id && pathName === '/profile' && (
        <div className="mt-5 flex-center gap-4 broder-t border-gray-100 pt-3">
          <p className='font-inter text-sm green_gradient cursor-pointer' onClick={handleEdit}>
            Edit
          </p>
          <p className='font-inter text-sm orange_gradient cursor-pointer' onClick={handleDelete}>
            Delete
          </p>
        </div>
      )}
    </div>
  )
}

export default ClientCard
