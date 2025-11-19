import { useState } from "react";


export default function FinalCTA() {
  const [open, setOpen] = useState(false);

 

  return (
    <>
      <section className="cta fade-in">
        <h2>Ждём вас на уроке!</h2>
        <p>
          Пусть слова Абая станут не просто страницей учебника, а живым
          ориентиром для наших детей.
        </p>

       
      </section>


    </>
  );
}
