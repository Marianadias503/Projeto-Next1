

import Header from "../components/Header"
import Welcome from "../components/welcome"
import styles from './Home.module.scss'



export default function Home() {
  return (
   <div className={styles.container}>

          <Header />

          <Welcome />

          

          
   </div>
  )
}
