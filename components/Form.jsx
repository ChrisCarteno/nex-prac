import Link from 'next/link'

function Form({ type, post, setPost, submitting, handleSubmit }) {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share prompts.
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Title
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write prompt here...'
            className='form_textarea'
            required
          />
        </label>
      </form>
    </section>
  )
}

export default Form