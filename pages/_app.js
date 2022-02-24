import '../styles/globals.css'
import Nav from './Components/nav'
import Content from './Components/Content'
import Client from './Components/Client'
import Footer from './Components/footer'
function MyApp() {
  return(
      <div>
         <Nav/>
         <Content/>
         <Client/>
         <Footer/>
      </div>
  )
}

export default MyApp
