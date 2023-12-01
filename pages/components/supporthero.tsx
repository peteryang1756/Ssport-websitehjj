import styles from './Button.module.css';
import { DocSearch } from '@docsearch/react'
import a from './docsearch.module.css';
import '@docsearch/css';


export default function supporthero() {
const { data: session, status } = useSession();
if (session) {
return (
  <>
<section
  className="bg-gradient-to-br from-indigo-50 via-white to-cyan-100"
>
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
   {session.user.name}   你好👋， 需要 <span className={styles.abc}>雙龍體育</span>的幫助嗎?
    </h2>
        <div className={`${a.docSearch} ${a.container}`}>
    <DocSearch
              apiKey="c2e792c2e75fe1dd3e40574f8b4c9a80"
              appId="70GEOCJCSX"
              indexName="help"
            />
          </div>    
  </div>
</section>
    </>
)
}
