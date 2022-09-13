import React from "react";
import './Footer.css'

export default function Footer(){
    return(
       
       <footer>
         <section className="parte-footer">
            
            <article className="footer">
                <ul className="iconos">
                    <li><h2 class="titulos-footer">Nosotros</h2></li>
                    <li>Jacinta Villanueva</li>
                    <li>Luisina Garcia</li>
                    <li>Catalina Martinez</li>
                </ul>
            </article>
    
            <article className="footer">
                <ul className="iconos">
                    <li>
                        <h2 className="titulos-footer">Contacto</h2>
                    </li>
                    <li>
                        <a href="https://twitter.com/home?lang=es"> <i className="fab fa-twitter">views@twitter.com</i></a> 
                    </li>
                    <li>
                        <a href="https://www.facebook.com/"> <i className="fab fa-facebook-square">views@facebook.com</i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/?hl=es"><i className="fab fa-instagram">views@instagram.com</i></a>
                    </li>
                    <li>
                        <a href="https://mail.google.com/mail/u/0/?ogbl"> <i className="fab fa-google-plus-g">views@gmail.com</i></a>
                    </li>
                </ul>
    
            </article>
    
            <article className="footer">
                <ul className="iconos">
                    <li>
                        <h2 className="titulos-footer">Conéctate</h2>
                    </li>
                    <li className="p-iconos">Unirse Ahora</li>
                    <li className="p-iconos">Aprender Más</li>
                    <li className="p-iconos">Manejar Cuenta</li>
                </ul>
    
            </article>

            <div className="tmdb">
                <img className= "fototmdb" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="logo"/>
            </div>
    
        </section>
    
        <div className="footer-abajo">
    
            <p>Políticas de Privacidad |</p>
            <p>  Términos y Condiciones</p>
    
        </div>  
        </footer>
       
    )
   
}