import Feed from "@components/Feed";

function Home () {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">A Custom CRM
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center"> Made Just For You</span>
        </h1>
        <p className="desc text-center">
        This is a custom CRM that I made for a client. It is a full
         stack application that uses React, Node, Express, and MongoDB.
          It is a work in progress, but I am excited to see where it goes.
        </p>

        <Feed />
    </section>
  )
}

export default Home
