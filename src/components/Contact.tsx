import { FC, useEffect } from "react"

const Contact: FC<{ title: string }> = ({ title }) => {
  useEffect(() => {
    document.title = title
  }, [])

  return (
    <>
      <h1 className="font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        CONTACT US
      </h1>
      <form className="w-full max-w-lg mt-20">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input type="text" className="input input-bordered w-full" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              className="textarea textarea-bordered w-full resize-none h-48"
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button className="btn gap-2">
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </>
  )
}

export default Contact
