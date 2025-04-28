import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar"
import References from "../../components/References/References"
import Services from "../../components/Services/Services"

const HomePage = () => {
  return (
   <div>
    <Navbar></Navbar>
    <Hero />
    <References />
    <Services />
   </div>
  )
}

export default HomePage