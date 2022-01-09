import type { NextPage } from 'next'
import { FaBook, FaCalendar, FaCog, FaDoorOpen, FaHome, FaTree } from 'react-icons/fa'
import Header from '../components/Header'
import PortalLink from '../components/PortalLink'
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
              <PortalLink title="こた鯖に参加するまで" iconType={FaDoorOpen} />
              <PortalLink title="ルール" iconType={FaBook} />
            </div>
          </section>
          <section className="py-16">
            <h2 className="mb-8 text-3xl font-black text-center">こた鯖での暮らし</h2>
            <div className="flex flex-wrap justify-center">
              <PortalLink title="素材をあつめる" iconType={FaTree} />
              <PortalLink title="建築する" iconType={FaHome} />
              <PortalLink title="イベントに参加する" iconType={FaCalendar} />
            </div>
          </section>
          <section className="py-16">
            <h2 className="mb-8 text-3xl font-black text-center">便利な機能</h2>
            <div className="flex flex-wrap justify-center">
              <PortalLink title="項目1" iconType={FaCog} />
              <PortalLink title="項目2" iconType={FaCog} />
              <PortalLink title="項目3" iconType={FaCog} />
              <PortalLink title="項目4" iconType={FaCog} />
              <PortalLink title="項目5" iconType={FaCog} />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Guide
