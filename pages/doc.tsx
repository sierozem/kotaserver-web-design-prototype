import type { NextPage } from 'next'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen text-[15px] leading-[1.8] text-gray-700">
      <header className="fixed top-0 right-0 left-0">
        <Header />
      </header>
      <nav className="overflow-y-scroll fixed top-[76px] bottom-0 left-0 w-72">
        <SideNav />
      </nav>
      <main className="pt-[76px]">
        <section className="p-8 ml-72">
          <p className="mb-3 text-sm font-black text-deep-orange">ガイド</p>
          <h1 className="mb-8 text-4xl font-black">
            日本語入力のしかた
          </h1>
          <p>Minecraftで日本語を打つ際に必要なテクニックと問題の解決方法を書いたページです。</p>
          <h2 className="flex items-center mt-12 before:mr-2 mb-4 before:w-4 before:h-4 text-2xl font-bold before:bg-deep-orange before:rounded-full">はじめに</h2>
          <p>Minecraftが1.13になってから多くのMODが対応できておらず、日本語MODも久しくアップデートがありません。</p>
          <p>癖はありますが、現在でも日本語チャットはMODなどを入れなくても出来るようになっているため、これを習得しましょう！</p>
          <h2 className="flex items-center mt-12 before:mr-2 mb-4 before:w-4 before:h-4 text-2xl font-bold before:bg-deep-orange before:rounded-full">手順</h2>
          <p>まずTキーを押すとチャット入力画面が出てきます。</p>
          <p>次に全角/半角キーを押すと入力方法がひらがなに変わり、ローマ字入力をすることができます。</p>
          <p>チャットをEnterで送信した後は全角/半角キーを押して入力を直接入力に戻します。</p>
          <h2 className="flex items-center mt-12 before:mr-2 mb-4 before:w-4 before:h-4 text-2xl font-bold before:bg-deep-orange before:rounded-full">トラブル</h2>
          <ul className="pl-6 list-disc">
            <li>日本語打った後、動けなくなるし画面に文字がでてくる</li>
            <li>
              <ul>
                <li>直接入力の戻し忘れだと思います。BackSpaceキーを押して文字を全部消した後、全角半角を押してみて下さい。</li>
              </ul>
            </li>
            <li>日本語に切り替わらない・入力そのものが変</li>
            <li>
              <ul>
                <li>
                  トラブルが発生しやすいキーをわかりやすくまとめてくれているページがあります。<br />
                  http://tabotabo.my.coocan.jp/key/key001.htm
                  </li>
              </ul>
            </li>
          </ul>
          <footer className="pt-8 mt-8 text-center text-gray-400 border-t-2 border-gray-100">
            <p>Copyright &copy; 2021 KotaServer</p>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default Home
