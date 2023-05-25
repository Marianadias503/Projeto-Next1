import Styles from "./welcome.module.scss";

const Welcome = () =>{

    return  <div className={Styles.text}>

        
        <h1> Melhor agência de marketing do bairro </h1>
        <p> Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>
        <button className={Styles.button}  > Aumentar vendas</button>
        
         </div>


} 
export default Welcome