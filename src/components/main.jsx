import Nav from "./nav"
import Hero from "./hero"
import Project from "./project"
import Service from "./service"
import Contact from "./contact"
import Footer from "./footer"

const main = () => {
  return (
  <div className="bg-white-700">
    <Nav/>
    <Hero/>
    <Project/>
    <Service/>
    <Contact/>
    <Footer/>
  </div>
  )
}

export default main
