import Link from 'next/link';
import styles from './Button.module.css';
import a from './a.module.css';
import Image from 'next/image';
function hotdocs() {
  return ( 
<section className="bg-white dark:bg-gray-900 antialiased">
  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        熱門文章
      </h2>
  
    </div>
    <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
      <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
      
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            <a href="https://ssangyongsports.eu.org/docs/contact/form" className="hover:underline">
              如何使用聯繫表聯繫我們
            </a>
          </h3>
        </div>
        
        <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
          
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            <a href="https://ssangyongsports.eu.org/docs/forum/setting" className="hover:underline">
            如何自訂論壇通知設定
            </a>
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>

 )
}

export default hotdocs;
