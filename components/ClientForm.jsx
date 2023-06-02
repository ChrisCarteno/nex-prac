import Link from 'next/link'

function ClientForm({ post, setPost, submitting, handleSubmit }) {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>Add New Client </span>
      </h1>
      <p className="desc text-left max-w-md">
         Fill out Form to add a new client
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-5 w-full max-w-2xl flex flex-col gap-2 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-small text-gray-700'>
            First and Last Name
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#tag'
            className='form_input'
            required
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Email
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#tag'
            className='form_input'
            required
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Phone
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#tag'
            className='form_input'
            required
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Address
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#tag'
            className='form_input'
            required
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag <span className='font-normal'>(#vip, #lead, #lowPriority)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#tag'
            className='form_input'
            required
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Comments
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Enter Client Comments'
            className='form_textarea'
            required
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className='text-gray-500 hover:text-gray-700 text-sm'>
            Cancel
          </Link>
          <button type="submit" disabled={submitting} className='button_btn'>
            {submitting}
          </button>
        </div>
      </form>
    </section>
  )
}

export default ClientForm