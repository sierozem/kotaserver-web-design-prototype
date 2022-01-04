import type { NextPage } from 'next'
import Link from 'next/link'
import { createRef, useEffect, useState } from 'react'
import { FaBox, FaCheck, FaPaperPlane, FaTree } from 'react-icons/fa'
import Reward, { RewardElement } from 'react-rewards'
import Header from '../components/Header'

const Home: NextPage = () => {
  const [readRules, setReadRules] = useState<boolean>(false)
  const [checkRules, setCheckRules] = useState<boolean>(false)
  const [checkAddServer, setCheckAddServer] = useState<boolean>(false)
  const playSectionRef = createRef<HTMLDivElement>()
  const rewardRef = createRef<RewardElement>()

  useEffect(() => {
    if (localStorage.getItem('readRules')) {
      setReadRules(true)
    }

    if (localStorage.getItem('checkRules')) {
      setCheckRules(true)
    }

    if (localStorage.getItem('checkAddServer')) {
      setCheckAddServer(true)
    }
  }, [])

  const handleCheckRules = () => {
    localStorage.setItem('checkRules', 'true')
    setCheckRules(true)
  }

  const handleCheckAddServer = () => {
    localStorage.setItem('checkAddServer', 'true')
    setCheckAddServer(true)
    rewardRef.current?.rewardMe()
  }

  const scrollToPlaySection = () => {
    playSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="pt-[76px] min-h-screen text-[15px] leading-[1.8] text-gray-700 bg-cream">
      <header className="fixed top-0 right-0 left-0 z-50">
        <Header />
      </header>
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="absolute top-[640px] right-0 left-0 h-[600px] bg-center bg-stacked-waves bg-[length:100%_600px]" />
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
            <button
              onClick={scrollToPlaySection}
              className="py-3 w-40 text-lg font-bold text-center text-white bg-deep-orange hover:bg-orange rounded-full shadow-flat active:shadow-inner transition-colors duration-150"
            >
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
        <div className="p-16" ref={playSectionRef}>
          <h2 className="mb-16 text-4xl font-black text-center">こた鯖であそぼう！</h2>
          <div className="py-4 px-6 mx-auto w-96 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
              {checkRules ? (
                <div className="p-2 mr-4 text-white bg-deep-orange rounded-full shadow-md">
                  <FaCheck className="w-4 h-4" />
                </div>
              ) : (
                <div className="mr-4 w-8 h-8 rounded-full border-4 border-gray-200" />
              )}
              <span className="text-lg">ルールを読んで理解する</span>
            </div>
            {!checkRules && (
              <div className="flex flex-col mt-2 ml-12">
                <p className="mb-3 text-sm">こた鯖でやってはいけないことや気をつけないといけないことをチェックしよう！</p>
                <div className="flex items-center self-end">
                  <Link href="/rules">
                    <a className="py-1 px-3 text-sm font-bold text-deep-orange hover:bg-gray-50 rounded-lg transition">
                      ルールを読む
                    </a>
                  </Link>
                  <button
                    disabled={readRules === true ? false : true}
                    onClick={handleCheckRules}
                    className="py-1 px-3 ml-2 text-sm font-bold text-white bg-deep-orange hover:bg-orange disabled:hover:bg-gray-200 disabled:bg-gray-200 rounded-lg shadow-flat active:shadow-inner disabled:shadow-none transition"
                  >
                    オッケー！
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="mx-auto w-[4px] h-8 bg-black opacity-10"></div>
          <div className="py-4 px-6 mx-auto w-96 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
              {checkAddServer ? (
                <div className="p-2 mr-4 text-white bg-deep-orange rounded-full shadow-md">
                  <FaCheck className="w-4 h-4" />
                </div>
              ) : (
                <div className="mr-4 w-8 h-8 rounded-full border-4 border-gray-200" />
              )}
              {checkRules ? (
                <span className="text-lg">
                  MinecraftにKotaServerを追加する
                </span>
              ) : (
                <span className="text-lg text-gray-400">
                  MinecraftにKotaServerを追加する
                </span>
              )}
            </div>
            <Reward ref={rewardRef} type="confetti">
              {!checkAddServer && checkRules && (
                <div className="flex flex-col mt-2 ml-12">
                  <p className="mb-3 text-sm">MinecraftのマルチプレイサーバーにKotaServerを追加しよう！</p>
                  <div className="flex items-center self-end">
                    <a href="#" className="py-1 px-3 text-sm font-bold text-deep-orange hover:bg-gray-50 rounded-lg transition">
                      手順を見る
                    </a>
                    <button
                      onClick={handleCheckAddServer}
                      className="py-1 px-3 ml-2 text-sm font-bold text-white bg-deep-orange hover:bg-orange disabled:hover:bg-gray-200 disabled:bg-gray-200 rounded-lg shadow-flat active:shadow-inner disabled:shadow-none transition"
                    >
                      オッケー！
                    </button>
                  </div>
                </div>
              )}
            </Reward>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
