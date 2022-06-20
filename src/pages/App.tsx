import { useState } from 'react'
import logo from './logo.svg'
import '../index.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function App() {
  return(
    <>
    <Header />

    <section>
      <img src="../assets/images/valdir_logo_resized.svg" alt="logo do programa em forma de desenho" />
    <span>
      <h1>Quem é valdir?</h1>
      <p>
      Valdir é um podcast criado por André Young e seus amigos, onde nele você ouve sobre as desaventuranças deles nos temas mais aleatórios possíveis, como por exemplo: Fezes, ET’s, Rato da AIDS, Folclore brasileiro , Transformers (muitos Transformers) e muito mais!
      </p>
    </span>
    </section>
    <a href='./Ouvir.tsx'>Ouça aqui!</a>


    <Footer />
    </>

  )

}
export default App
