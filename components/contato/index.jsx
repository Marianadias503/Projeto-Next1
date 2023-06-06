
import Link from "next/link";
import Input from "../input";

import Styles from "./contato.module.scss";


const Contato = () => {

 return ( <div className={Styles.container}>

  <div className={Styles.texts}>

    <span> ENTRE EM CONTATO </span>
    <h1> Aumente seu resultado de vendas e performance </h1>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
  </div>
    

<div className={Styles.form}>

<h1> Fale com um especialista </h1>

<form>
<Input type="text" placeholder="Nome completo" required />
<Input type="email" placeholder="E-mail profissional" required />
<Input type="text" placeholder="Celular/Whatsapp" 
pattern="∧ [+] * {] {0,1} [0-9] {1,4} [}] {0,1} [-\s\./0-9]*$"
required/>


<button className={Styles.button}>Enviar</button>
    
</form>



</div>


<div className={Styles.footer}>

<p>Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <Link href="/"> <span> Política de Privacidade.</span>
</Link> </p> 
</div>

    </div>



 );
};

export default Contato;