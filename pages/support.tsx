import Supportchoice from './components/supportchoice';
import Head1 from './components/head1';
import Supporthero from './components/supporthero';
import Supportend from './components/supportend'; // 添加缺失的引号
import styles from './components/docsearch.module.css';
import Ticket from './components/ticket';
import Hotdocs from './components/hotdocs';
import Head from 'next/head';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';
import clsx from "clsx";
import dynamic from 'next/dynamic'; // 添加动态导入

const CrispWithNoSSR = dynamic(
  () => import('../app/components/crisp')
);

const support = () => {
  return (
    <>
      <Head>
        <title>雙龍體育幫助</title>
        <meta name="description" content="歡迎來到雙龍體育幫助中心,任何問題立刻聯繫" />
      </Head>      
      <div>
        <Head1 />
        <Supporthero />
           <Hotdocs />
        <Supportchoice />
     
        <Supportend />
        {/* 添加 CrispWithNoSSR 组件 */}
        <CrispWithNoSSR />
      </div>
    </>
  );
}

export default support;
