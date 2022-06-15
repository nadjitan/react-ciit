import { FC, PropsWithChildren } from "react"
import { Link } from "react-router-dom"

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <nav className="bg-base-100 p-10 flex justify-between w-full">
        <div>
          <a className="btn btn-ghost normal-case text-2xl font-extrabold">
            REACT CIIT
          </a>
        </div>

        <div>
          <ul className="menu menu-horizontal font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="w-full h-full flex flex-col items-center">
        {children}
      </main>
    </>
  )
}

export default Layout
