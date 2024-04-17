import Hero from './components/Hero';
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
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">我們的首頁正在構建中</h1>
  <p>
    我們首頁正在重新設計中，但其他網頁仍可訪問，造成不便敬請見諒。
  </p>

      </div>
    </>
  );
}

export default Home;