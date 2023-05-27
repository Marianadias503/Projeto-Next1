import Styles from "./footer.module.scss"
import Link from "next/link";
import Imagem from 'public/images/logo.png';
import Image from "next/image"
import IconFacebook from "/public/images/iconFacebook.svg"
import IconLinkedin from "/public/images/IconLinkedin.svg"
import IconYoutube from "/public/images/IconYoutube.svg"
import IconInstagram from "/public/images/IconInstagram.svg"
const Footer = () =>{
    return (

            <div className={Styles.container}>

            <div className={ `$ {Styles.column} $ {Styles.columnPrincipal}`}>
            <Image className={Styles.img} src={Imagem} alt="Imagem" />

                <h1 className={Styles.title}>0800 800 800</h1>
                <p className={  Styles.paragrafo}>comercial@agencia.com.br</p>
                
                
             </div>

        <div className={Styles.column}>
                
            <h1>MENU</h1>
            <p>Quem somos </p>
            <p>Cases</p>
            </div>

            <div className={Styles.column}>
                
            <h1>CONTEÚDO</h1>
            <p> E-books  </p>
            <p> Fórmulas prontas</p>
            </div>

            <div className={Styles.column}>
                
            <h1 className={Styles.alignRight} >SOCIAL</h1>
                

                <div className={Styles.icon}>
                <Link href="/">
    <Image src={IconInstagram} alt= "icon" />
</Link>
<Link href="/">
    <Image src={IconFacebook} alt= "icon" />
</Link>
<Link href="/">
    <Image src={IconLinkedin} alt= "icon" />
</Link>
<Link href="/">
    <Image src={IconYoutube} alt= "icon" />
</Link>


                </div>

            </div>

<div className={Styles.allRightReserved}>
  <p>
  ©2022 AGENCIA - Todos os direitos reservados.
    </p> 
</div>

            </div>

    );
}


export default Footer;