

import Features from "../components/features"
import Header from "../components/Header"
import Welcome from "../components/welcome"
import Contato from "../components/contato"
import Footer from "../components/footer"
import styles from './Home.module.scss'



export default function Home() {
  return (
   <div className={styles.container}>

          <Header />

          <Welcome />

          <Features />

          <Contato />

          <Footer />

          
   </div>
  )
}
