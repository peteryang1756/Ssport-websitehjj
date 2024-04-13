import Hero from './components/Hero';
import Game from './components/game';
import Table from './components/table';
import Tabl from './components/tabl';
import Sport from './components/sport';
import Action from './components/action';
import React from 'react';
import Head from 'next/head'

const Home = () => {
  return (
    <>
<Head>
        <title>雙龍體育</title>
        <meta name="description" content="雙龍體育網站 - 專業體育賽事！ 提供最新的雙龍體育資訊、TV、運動比賽報導，讓您輕鬆了解雙龍體育。歡迎加入雙龍運動論壇，一起與大家溝通！" />
      </Head>

      <div>
        <div className="bg-gradient h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Hero />
        <Sport />
        <div id="anchor_one" />
        <Table />
        <Tabl />
<Game />
        
      </div>
    </>
  );
}

export default Home;