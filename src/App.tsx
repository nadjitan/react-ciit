import { FC, useEffect } from "react"
import { Link } from "react-router-dom"

const App: FC<{ title: string }> = ({ title }) => {
  useEffect(() => {
    document.title = title
  }, [])

  return (
    <aside className="overflow-hidden text-white lg:grid lg:grid-cols-2 lg:items-center rounded-lg">
      <div className="p-12 text-center sm:p-16 lg:p-24 lg:text-left">
        <div className="max-w-lg mx-auto lg:ml-0 lg:pt-12">
          <p className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Lorem ipsum, dolor sit amet consectetur.
          </p>

          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus iusto odit, magni repellat aliquam!
          </p>
          <Link
            className="mt-10 inline-flex items-center px-8 py-3 text-white border border-white rounded hover:bg-white hover:text-black active:bg-black-500 focus:outline-none focus:ring"
            to="/about"
          >
            <span className="text-sm font-medium">Learn More</span>

            <svg
              className="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="lg:pt-24">
        <div className="relative w-full h-64 sm:h-96 lg:h-[500px]">
          <img
            className="absolute inset-0 object-cover w-full h-full lg:rounded-tl-3xl"
            src="https://images.unsplash.com/photo-1539683255143-73a6b838b106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80"
            alt=""
          />
        </div>
      </div>
    </aside>
  )
}

export default App
