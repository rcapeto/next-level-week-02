import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


export default function TeacherItem() {
   return(
      <article className="teacher-item">
         <header>
            <img src="https://avatars1.githubusercontent.com/u/61842405?s=460&u=9f634261e85236ed064c5eb472628c1ecb8a6acf&v=4" alt="Raphael"/>
            <div>
               <strong>Raphael Capeto</strong>
               <span>Lógica</span>
            </div>
         </header>

         <p>
            Apaixonado por Lógica de programção e ensinar a todos como "comandar" a máquina,
            <br/><br/>
            100.000 pessoas começaram a comandar as máquinas
         </p>
         
         <footer>
            <p>
               Preço/hora <strong>R$ 80, 00</strong>
            </p>

            <button type="button">
               <img src={whatsappIcon} alt="WhatsApp"/>
               Entrar em contato
            </button>
         </footer>
      </article>
   );
}