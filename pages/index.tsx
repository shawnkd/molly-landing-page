import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import {useRef} from 'react';
//@ts-ignore
import Typist from "react-typist"
import {useState} from 'react';
import { useMoralis } from "react-moralis";
import Room from './Room';
import { browserName, browserVersion, isMobile } from "react-device-detect";

// import './room.scss';

const Home: NextPage = () => {


  /*
		Designed by: Jarlan Perez
		Original image: https://www.artstation.com/artwork/VdBllN

*/

const { authenticate, isAuthenticated, user, logout, isWeb3Enabled} = useMoralis();


const truncateAddress = (address: any) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};







const texts = ["game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips", "livestream moments", "warzone clutches", "valorant plays", "vlog clips", "podcast highlights", "montages", "music videos", "discord memories", "game clips"];
const [currentTextCounter, setCurrentTextCounter] = useState(0);

  return (
    <div className="flex min-h-screen max-h-fit  flex-col items-center justify-center py-2">
      <Head>
        <title>molly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mb-48">
      {!isMobile ?
      <div>
        <div className=" hero-container flex font-sans font-bold justify-center ">
                    <div className="environment"></div>
                    <h2 className="hero glitch layers" data-text="사이퍼"><span>molly</span></h2>
      </div>
      <div className=" mb-10 flex content-between justify-center align-left items-center w-screen  ">
  <h1  className=" flex  flex-row gap-1   font-sans text-2xl">collect your favorite {<Typist  loop className=" flex flex-row font-bold text-sky-400 ">{texts.map((item,index) => (<div key={index}>{texts[index] ? <div> <Typist.Backspace count={20} delay={250} />{texts[index]}</div> : null}</div>))}</Typist>}</h1>
      </div>
      </div>
      :
      <div>
        <div className=" hero-container flex font-sans font-bold justify-center ">
                    <div className="environment"></div>
                    <h2 className="hero " data-text="사이퍼"><span>molly</span></h2>
      </div>
      <div className=" mb-10 flex content-between justify-center align-left items-center w-screen  ">
  <h1  className=" flex  flex-row gap-1   font-sans text-2xl">collect your favorite {<Typist  loop className=" flex flex-row font-bold text-sky-400 ">{texts.map((item,index) => (<div key={index}>{texts[index] ? <div> <Typist.Backspace count={20} delay={250} />{texts[index]}</div> : null}</div>))}</Typist>}</h1>
      </div>
      </div>
      
  }

      
      <span >
      <div className=" flex h-80 justify-center   pb-24">
        {!isAuthenticated ? 

        <span className="mt-4 flex flex-col h-14 gap-5">
              <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
              <ul className="m-4 justify-center flex flex-col space-y-3">

          <h1 className="text-lg text-center text-white -mt-4 mb-2 font-bold font-sans">connect to wallet</h1>
            <button onClick={()=> {
               authenticate({provider: "metamask"})
               }
               } className=" shadow-lg shadow-blue-500/50 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-sans font-bold tracking-tighter text-white bg-orange-600 rounded-lg group">

                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative text-black  ">metamask</span>
            </button>
            <button onClick={()=> 
                authenticate({provider: "walletconnect"})
              } className="shadow-lg shadow-blue-500/50 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-sans font-bold tracking-tighter text-white bg-sky-600 rounded-lg group">
                
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative  ">walletconnect</span>
            </button>
            {/* <button onClick={()=> 
                authenticate({type: "sol"})
              } className="shadow-lg shadow-blue-500/50 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-sans font-bold tracking-tighter text-white bg-purple-900 rounded-lg group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative  ">phantom</span>
            </button> */}
            </ul>
</div>
            
            
      </span>
      : <span className=" justify-center   ">
        {/* <a href="#" className="  mb-20 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> */}
        <span className="text-center block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  ">

        <h1 className="flex text-xl text-black font-sans glitch justify-left ">welcome, &nbsp; {<div className="font-bold text-sky-400 ">{truncateAddress(user?.get("ethAddress"))}</div>}! </h1>
        <h2 className="flex text-black text-xl pt-5 font-bold font-sans justify-center ">we're launching our beta soon.</h2>
        <h2 className="flex text-xl text-black font-sans justify-center  pt-5 ">join the discord to be notified when we launch...</h2>

        
        <a href="https://discord.gg/n8g4yAksav" target="_blank"  onClick={()=> console.log("discord inv")} className=" flex  flex-row mt-7 shadow-lg shadow-blue-500/50  inline-flex items-center justify-center px-10 py-4 overflow-hidden font-sans font-bold tracking-tighter text-white bg-discord-purple rounded-lg group">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-900 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative ">Discord</span>
      </a>
      
        <button onClick={()=> logout()} className="flex flex-row ml-4 mt-7 shadow-lg shadow-blue-500/50 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-sans font-bold tracking-tighter text-white bg-blue-800 rounded-lg group">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative  ">Log Out</span>
      </button>
      
        </span>
        </span>
        }
        
      </div>
      
      </span>

      </div>

      <main className="flex w-full -mt-8 flex-col items-center justify-center   ">
        
      <Room/>
        
      </main>
      
      <footer className="flex mt-96  w-full items-center justify-center ">
        <a
          className="flex items-center glitch justify-center   gap-2 text-white"
          href="https://cypher.so"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/cypher-logo.png" alt="Cypher Logo" width={85} height={27} />
        </a>
      </footer>
      

      
    </div>
  )
}

export default Home
