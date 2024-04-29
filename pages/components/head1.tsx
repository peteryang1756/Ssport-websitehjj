import { Fragment, useState } from 'react'
import Link from 'next/link'
import { DocSearch } from '@docsearch/react'
import a from './docsearch.module.css';
import '@docsearch/css';
import Login from "./login";
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: '雙龍職棒', description: '雙龍職棒官網', href: 'https://slb.ssangyongsports.eu.org/', icon: ChartPieIcon },
  { name: '雙龍職籃', description: '雙龍職籃官網', href: 'https://sba.ssangyongsports.eu.org/', icon: ChartPieIcon },
]
const callsToAction = [
  { name: '雙龍體育TV', href: '/tv', icon: PlayCircleIcon },
  { name: '購物', href: '#', icon: PhoneIcon },
]
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
export default function Head() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">雙龍體育</span>
            <img className="h-8 w-auto" src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">打開菜單</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
          <a href="https://ssangyongsports.eu.org" className="text-sm font-semibold leading-6 text-gray-900">
            返回官網
          </a>
           <a href="https://ssangyongsports.eu.org" className="text-sm font-semibold leading-6 text-gray-900">
            聯繫客服
          </a>
           <a href="https://support.ssangyongsports.eu.org/portal/zh-tw/home" className="text-sm font-semibold leading-6 text-gray-900">
            查看工單狀態
          </a>
           <a href="https://discuss.ssangyongsports.eu.org" className="text-sm font-semibold leading-6 text-gray-900">
            論壇
          </a>
           <a href="https://status.ssangyongsports.eu.org" className="text-sm font-semibold leading-6 text-gray-900">
            狀態
          </a>
          
          
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                   <DocSearch
              apiKey="c2e792c2e75fe1dd3e40574f8b4c9a80"
              appId="70GEOCJCSX"
              indexName="help"
            />
          <Login />
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">雙龍體育</span>
              <img
                className="h-8 w-auto"
                src="/logo.png"
                alt=""
              />
            </a>
            <Login />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
        
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
           
                <a
                  href="https://ssangyongsports.eu.org"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  返回官網
                </a>
               <a
                  href="https://ssangyongsports.eu.org/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  聯繫客服
                </a>
                <a
                  href="https://support.ssangyongsports.eu.org"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  查看工單狀態
                </a>
                <a
                  href="https://discuss.ssangyongsports.eu.org"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  論壇
                </a>
                    <a
                  href="https://status.ssangyongsports.eu.org"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  狀態
                </a>
              </div>
              <div className="py-6">
                  <DocSearch
              apiKey="c2e792c2e75fe1dd3e40574f8b4c9a80"
              appId="70GEOCJCSX"
              indexName="help"
            />
                             
                        <Login />

              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
   
    </header>
  )
}
