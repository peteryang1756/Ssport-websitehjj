import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>雙龍體育購物</title>
        <meta
          name="description"
          content="雙龍體育購物網站。立刻上網站選購想要的商品吧！！"
        />
      </Head>

      <div>
  
      <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
      我們的商品
    </h2>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src="https://i.imgur.com/SMZkCQm.png"
            alt="Front of men's Basic Tee in black."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                雙龍體育TV
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">半年繳</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$500</p>
        </div>
      </div>
      {/* More products... */}
    </div>
  </div>
</div>

    </>
  );
};

export default Home;
