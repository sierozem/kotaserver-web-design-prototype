import type { NextPage } from 'next'
import Link from 'next/link'
import { FaBox, FaPaperPlane, FaTree } from 'react-icons/fa'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="pt-[76px] min-h-screen text-[15px] leading-[1.8] text-gray-700">
      <header className="fixed top-0 right-0 left-0 z-50">
        <Header />
      </header>
      <main className="relative">
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <div className="p-24 bg-top bg-no-repeat bg-layered-waves-bottom bg-[length:100%_640px]">
          <h1 className="mb-8 text-6xl font-black text-center">
            いいかんじの<br />キャッチコピーをここに
          </h1>
          <p className="mb-12 text-center">
            ちょっと長めに文章を書くちょっと長めに文章を書くちょっと長めに文章を書く
          </p>
          <div className="flex justify-center items-center">
            <button className="py-3 w-40 text-lg font-bold text-center text-white bg-deep-orange hover:bg-orange rounded-full shadow-flat active:shadow-inner transition-colors duration-150">
              参加してみる
            </button>
            <Link href="/doc">
              <a className="py-3 ml-4 w-40 text-lg font-bold text-center text-deep-orange bg-white hover:bg-gray-50 active:bg-gray-100 rounded-full shadow-flat active:shadow-inner transition duration-150">
                プレイガイド
              </a>
            </Link>
          </div>
        </div>
        <div className="p-16">
          <h2 className="mb-16 text-4xl font-black text-center">こた鯖の魅力</h2>
          <div className="flex justify-evenly items-center">
            <div className="p-8 mx-4 text-center bg-white rounded-lg shadow-lg">
              <FaPaperPlane className="mx-auto mb-8 w-16 h-16 text-deep-orange" />
              <h3 className="mb-2 text-2xl font-bold">はやい</h3>
              <p className="text-gray-500">こた鯖の魅力の説明こた鯖の魅力の説明こた鯖の魅力の説明</p>
            </div>
            <div className="p-8 mx-4 text-center bg-white rounded-lg shadow-lg">
              <FaTree className="mx-auto mb-8 w-16 h-16 text-deep-orange" />
              <h3 className="mb-2 text-2xl font-bold">やすい</h3>
              <p className="text-gray-500">こた鯖の魅力の説明こた鯖の魅力の説明こた鯖の魅力の説明</p>
            </div>
            <div className="p-8 mx-4 text-center bg-white rounded-lg shadow-lg">
              <FaBox className="mx-auto mb-8 w-16 h-16 text-deep-orange" />
              <h3 className="mb-2 text-2xl font-bold">うまい</h3>
              <p className="text-gray-500">こた鯖の魅力の説明こた鯖の魅力の説明こた鯖の魅力の説明</p>
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <div className="absolute top-[640px] right-0 left-0 h-[600px] bg-center bg-stacked-waves -z-50 bg-[length:100%_600px]" />
      </main>
    </div>
  )
}

export default Home
