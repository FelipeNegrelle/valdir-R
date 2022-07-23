import { useState } from 'react'
import logo from './logo.svg'
import '../index.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function App() {
  return(
    <>
    <Header />

    <main>
        <section className='flex flex-col '>
          <img src="../assets/images/valdir_logo_resized.svg" alt="logo do programa em forma de desenho"  className='w-50 h-56'/>
          <span className='flex flex-col w-483 h-430 text-white bg-[rgba(196, 196, 196, 0.2)] rounded-lg px-2 py-10'>
            <h1 className='font-questrial font-normal text-5xl'>Quem é valdir?</h1>
            <p>
            Valdir é um podcast criado por André Young e seus amigos, onde nele você ouve sobre as desaventuranças deles nos temas mais aleatórios possíveis, como por exemplo: Fezes, ET’s, Rato da AIDS, Folclore brasileiro , Transformers (muitos Transformers) e muito mais!
            </p>
          </span>
        </section>
        <a href='./Ouvir.tsx'>Ouça aqui!</a>
    </main>
    
    <Footer />
    </>

  )

}
export default App
