import PromptCard from "./PromptCard";
import ClientCard from "./ClientCard";

function Profile({name, desc, data, data2, handleEdit, handleDelete}) {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className='mt-10 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleEdit={ () => handleEdit && handleEdit(post) }
          handleDelete={ () => handleDelete && handleDelete(post)}
        />
      ))}
    </div>
    <div className='mt-10 prompt_layout'>
      {data2.map((post) => (
        <ClientCard
          key={post._id}
          post={post}
          handleEdit={ () => handleEdit && handleEdit(post) }
          handleDelete={ () => handleDelete && handleDelete(post)}
        />
      ))}
    </div>
    </section>
  )
}

export default Profile
