import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import Layout from "./components/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App title="Home" />} />
          <Route path="about" element={<About title="About" />} />
          <Route path="contact" element={<Contact title="Contact" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
)
