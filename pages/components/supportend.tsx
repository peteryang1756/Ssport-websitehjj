import Link from 'next/link';
import styles from './Button.module.css';

function supportend() {
  return (
    <section className="w-full py-6 md:py-12">
      <div className="container flex flex-col items-center justify-center gap-3 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">需要客服
          <span className={styles.abc}>協助</span>
         嗎？
            </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          立刻與我們客服進行溝通
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <a
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="https://ssangyongsports.eu.org/contact"
          >
            聯絡我們
          </a>
          <div
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            onClick={() => window.$crisp && window.$crisp.push(['do', 'chat:open'])}
          >
            在線支援
          </div>
        </div>
      </div>
    </section>
  )
}

export default supportend;
