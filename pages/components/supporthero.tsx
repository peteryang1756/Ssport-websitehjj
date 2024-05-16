import styles from './Button.module.css';
import { DocSearch } from '@docsearch/react'
import a from './docsearch.module.css';
import '@docsearch/css';


function supporthero() {
  return (
<section
  className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-900 py-17"
>
  <div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
      需要 <span className={styles.c}>雙龍體育</span>的幫助嗎?
    </h2>
    
    
     
    <div className={`${a.docSearch} ${a.container}`}>
      <DocSearch
        apiKey="f17332c3a1c0389e31da9845b6a6bdf1"
        appId="YHQ31RR2WW"
        indexName="help"
      />
    
       </div>
  </div>
</section>

  )
}

export default supporthero;
