import Link from 'next/link';
import styles from './Button.module.css';

function supportend() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            需要客服
            <span className={styles.abc}>協助</span>
            嗎？
          </h2>
          <div className="space-y-2 sm:grid sm:grid-cols-2 lg:grid-cols-2 sm:gap-2 xl:gap-8 sm:space-y-0 md:mt-12">
            <Link
              href="https://ssangyongsports.eu.org/contact"
              className="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light"
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
                }}
              >
                <img
                  alt=""
                  className="service-icon"
                  src="https://cdn-icons-png.flaticon.com/256/5300/5300598.png"
                  width={75}
                />
                <noscript />
              </span>
              <h3 className="font-semibold text-xl text-gray-900 dark:text-white mt-3.5">
                聯繫我們
              </h3>
            </Link>
            <div
              onClick={() => window.$crisp && window.$crisp.push(['do', 'chat:open'])}
              className="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light"
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
                }}
              >
                <img
                  alt=""
                  className="service-icon"
                  src="https://cdn-icons-png.flaticon.com/512/9165/9165147.png"
                  width={75}
                />
              </span>
              <h3 className="font-semibold text-xl text-gray-900 dark:text-white mt-3.5">
                在線支援
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default supportend;
