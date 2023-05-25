import Image from "next/image";
import link from "next/link";
import logo from 'public/images/logo.png';
import Styles from "./header.module.scss"



const Header = () =>{

return <div className={Styles.container}> 




<div className={Styles.logotipo}>

<Image src={logo} />


</div>

<div className={Styles.menu}>
   <a href="/"> Home </a>
    <a href="/"> O que fazemos </a> 
    <a href="/"> Cases </a>
   

</div>


<div className={Styles.action}>

<button className={Styles.button}>Fale conosco</button>

</div>

 </div>

};

export default Header