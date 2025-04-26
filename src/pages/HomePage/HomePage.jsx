<<<<<<< HEAD
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"


const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
     
      <Footer></Footer>
    </div>
=======
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar"
import References from "../../components/References/References"

const HomePage = () => {
  return (
   <div>
    <Navbar></Navbar>
    <Hero />
    <References />
   </div>
>>>>>>> b2d4b49be18ddef08aa4bc9e470518802ea2f29b
  )
}

export default HomePage