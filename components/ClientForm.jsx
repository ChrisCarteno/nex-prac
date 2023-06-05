import Link from 'next/link'

function ClientForm({ type, post, setPost, submitting, handleSubmit }) {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text'>
        <span className='blue_gradient'>{type} New Client </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} clients.
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
            value={post.name}
            onChange={(e) => setPost({ ...post, name: e.target.value })}
            placeholder='First Last'
            className='form_input'
            required
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Email
          </span>
          <input
            value={post.email}
            type="email"
            onChange={(e) => setPost({ ...post, email: e.target.value })}
            placeholder='email@weaversdev.com'
            className='form_input'
            required
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Phone
          </span>
          <input
            value={post.phone}
            type='tel'
            onChange={(e) => setPost({ ...post, phone: e.target.value })}
            placeholder='(760) 123-4567'
            className='form_input'
            min="0"
            required
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Client ID number
          </span>
          <input
            value={post.idNumber}
            type='number'
            onChange={(e) => setPost({ ...post, idNumber: e.target.value })}
            placeholder='1234'
            min='0'
            className='form_input'
            required
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Comments
          </span>
          <textarea
            value={post.comment}
            onChange={(e) => setPost({ ...post, comment: e.target.value })}
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
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default ClientForm