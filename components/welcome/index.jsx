import Styles from "./welcome.module.scss";
import BannerWelcome from "/public/images/BannerWelcome.svg";
import Image from "next/image";

const Welcome = () =>{

    return ( 
    
    <div className={Styles.container }> 

     <div className={Styles.text}>

        
    <h1> Melhor agência de marketing do bairro </h1>
    <p> Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>
    <button className={Styles.button}  > Aumentar vendas</button>

    </div>


    <div className={Styles.image}>
    <Image src ={BannerWelcome} alt= "Banner Welcome" />
    </div>
    


    
    </div>
    
      
         
       
    );
} 
export default Welcome