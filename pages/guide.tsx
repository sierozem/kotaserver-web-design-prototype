import type { NextPage } from 'next'
import { FaBook, FaCalendar, FaCog, FaDoorOpen, FaHome, FaTree } from 'react-icons/fa'
import Header from '../components/Header'
import WavesBackground from '../components/WavesBackground'

const Guide: NextPage = () => {
  return (
    <div className="pt-[76px] min-h-screen text-[15px] leading-[1.8] text-gray-700">
      <header className="fixed top-0 right-0 left-0">
        <Header />
      </header>
      <main className="relative">
        <WavesBackground />
        <div className="py-16">
          <h1 className="mb-16 text-5xl font-black text-center">プレイガイド</h1>
          <section className="py-16">
            <h2 className="mb-8 text-3xl font-black text-center">はじめる</h2>
            <div className="flex flex-wrap justify-center">
              <div className="p-2 w-1/3">
                <div className="flex items-center py-4 px-6 bg-white rounded-xl shadow">
                  <FaDoorOpen className="mr-4 w-12 h-12" />
                  <p className="text-lg font-bold">こた鯖に参加するまで</p>
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="flex items-center py-4 px-6 bg-white rounded-xl shadow">
                  <FaBook className="mr-4 w-12 h-12" />
                  <p className="text-lg font-bold">ルール</p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative py-16">
            <h2 className="mb-8 text-3xl font-black text-center">こた鯖での暮らし</h2>
            <div className="flex flex-wrap justify-center">
              <div className="p-2 w-1/3">
                <div className="flex items-center py-4 px-6 bg-white rounded-xl shadow">
                  <FaTree className="mr-4 w-12 h-12" />
                  <p className="text-lg font-bold">素材をあつめる</p>
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="flex items-center py-4 px-6 bg-white rounded-xl shadow">
                  <FaHome className="mr-4 w-12 h-12" />
                  <p className="text-lg font-bold">建築する</p>
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="flex items-center py-4 px-6 bg-white rounded-xl shadow">
                  <FaCalendar className="mr-4 w-12 h-12" />
                  <p className="text-lg font-bold">イベントに参加する</p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative py-16">
            <h2 className="mb-8 text-3xl font-black text-center">便利な機能</h2>
            <div className="flex flex-wrap justify-center">
              <div className="p-2 w-1/3">
                <div className="flex items-center py-4 px-6 bg-white rounded-xl shadow">
                  <FaCog className="mr-4 w-12 h-12" />
                  <p className="text-lg font-bold">項目1</p>
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="flex items-center py-4 px-6 bg-white rounded-xl shadow">
                  <FaCog className="mr-4 w-12 h-12" />
                  <p className="text-lg font-bold">項目2</p>
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="flex items-center py-4 px-6 bg-white rounded-xl shadow">
                  <FaCog className="mr-4 w-12 h-12" />
                  <p className="text-lg font-bold">項目3</p>
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="flex items-center py-4 px-6 bg-white rounded-xl shadow">
                  <FaCog className="mr-4 w-12 h-12" />
                  <p className="text-lg font-bold">項目4</p>
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="flex items-center py-4 px-6 bg-white rounded-xl shadow">
                  <FaCog className="mr-4 w-12 h-12" />
                  <p className="text-lg font-bold">項目5</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Guide
