import Head from 'next/head';
import styles from './components/Button.module.css';
import { Label, Select } from 'flowbite-react';
import { FileInput } from 'flowbite-react';
import { useRouter } from 'next/router';

function C() {
  const router = useRouter();
  const { mode } = router.query;

  let subjectDefaultValue = '';
  if (mode === 'tv') {
    subjectDefaultValue = '我想要購買雙龍體育TV會員(不要更改此處,有助於加速回復)';
  }
  if (mode === 'status') {
    subjectDefaultValue = '報告錯誤(不要更改此處,有助於加速回復)';
  }

  return (
    <div>
      <section>
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            ></div>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              聯繫我們
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              有任何問題，立刻聯繫我們😊
            </p>
          </div>
          <form
            action="https://contact-api.ssangyongsports.eu.org"
            name="聯繫表單"
            method="POST"
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            {/* 在 HTML 表单中添加隐藏的 honeypot 字段 */}
            <input type="text" name="honeypot" style={{ display: 'none' }} />
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  名字
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="Email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  你的電子郵件
                </label>
                <div className="mt-2.5">
                  <input
                    id="Email"
                    type="email"
                    name="Email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="peter@ssangyongsports.org"
                    required={true}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="mb-2 block">
                  <Label htmlFor="幫助範圍" value="幫助範圍" />
                </div>
                <Select name="help" required>
                  <option value="雙龍體育">雙龍體育</option>
                  <option value="雙龍職籃">雙龍職籃</option>
                  <option value="雙龍職棒">雙龍職棒</option>
                  <option value="其他">其他</option>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="Subject"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  主旨
                </label>
                <div className="mt-2.5">
                  <input
                    id="Subject"
                    type="text"
                    name="Subject"
                    defaultValue={subjectDefaultValue} // 在此處設置預設值
                    required={true}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="讓我們得知如何幫助你"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  內容
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    rows={4}
                    required={true}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Leave a comment..."
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <button
                    type="button"
                    className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    role="switch"
                    aria-checked="false"
                    aria-labelledby="switch-1-label"
                  >
                    <span className="sr-only">同意我們的隱私政策</span>
                    <span
                      aria-hidden="true"
                      className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    ></span>
                  </button>
                </div>
                <label
                  className="text-sm leading-6 text-gray-600"
                  id="switch-1-label"
                >
                  點擊此，代表你同意我們的
                  <a href="https://ssangyongsports.eu.org/p" className="font-semibold text-indigo-600">
                    隱私政策
                  </a>
                  .
                </label>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                發送訊息
              </button>
            </div>
          </form>
        </div>
      </section>
      <Head>
        <title>雙龍體育聯絡</title>
        <meta
          name="description"
          content="雙龍體育聯絡，為你提供專業的雙龍體育客服，為你解決問題，或聯絡雙龍體育了解你想得知的消息，就立刻上雙龍體育聯絡網站吧"
        />
      </Head>
    </div>
  );
}

export default C;