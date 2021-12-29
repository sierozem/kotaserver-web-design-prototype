import { FaSearch, FaTwitter, FaDiscord } from 'react-icons/fa'
import Logo from '../images/logo.svg'
import Brand from '../images/brand.svg'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen text-[15px] leading-[1.8] text-gray-700">
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <header className="flex fixed top-0 right-0 left-0 items-center px-2 pt-5 pb-2 bg-white bg-layerd-bottom bg-repeat-x bg-wave-bottom shadow-sm bg-[length:auto_15px]">
        <div className="flex items-end">
          <Logo className="w-[40px] h-[48px]" />
          <Brand className="ml-[-3px] w-[210px] h-[40px]" />
        </div>
        <div className="flex flex-1 items-center py-3 px-4 mx-4 text-deep-orange bg-gray-100 rounded-lg">
          <FaSearch />
          <span className="ml-3 text-sm text-gray-500">検索窓は準備中です！</span>
        </div>
        <FaTwitter className="mx-2 w-6 h-6 text-deep-orange transition ease-in-out hover:scale-[1.3] cursor-pointer" />
        <FaDiscord className="mx-2 w-6 h-6 text-deep-orange transition ease-in-out hover:scale-[1.3] cursor-pointer" />
      </header>
      <main className="pt-[76px]">
        <nav className="overflow-y-scroll fixed top-[76px] bottom-0 left-0 p-8 w-72 font-bold">
          <ul>
            <li className="mb-12">
              <h5 className="inline-block py-1 px-2 mb-2 text-xs text-white bg-deep-orange rounded">
                はじめる
              </h5>
              <ul className="pl-4 text-gray-600">
                <li className="mt-1">こた鯖案内</li>
                <li className="mt-1">ルール</li>
                <li className="mt-1">免責事項</li>
              </ul>
            </li>
            <li className="mb-12">
              <h5 className="inline-block py-1 px-2 mb-2 text-xs text-white bg-deep-orange rounded">
                イベント
              </h5>
              <ul className="pl-4 text-gray-600">
                <li className="mt-1">建築コンテスト</li>
                <li className="mt-1">オークション</li>
                <li className="mt-1">イベント</li>
                <li className="mt-1">さばちゃんぽん</li>
              </ul>
            </li>
            <li className="mb-12">
              <h5 className="inline-block py-1 px-2 mb-2 text-xs text-white bg-deep-orange rounded">
                ガイド
              </h5>
              <ul className="pl-4 text-gray-600">
                <li className="mt-1">サーバーの機能</li>
                <li className="mt-1">機能の一覧</li>
                <li className="mt-1">MODの導入方法</li>
                <li className="mt-1">日本語入力のしかた</li>
                <li className="mt-1">Discordの使い方</li>
                <li className="mt-1">ワールド</li>
              </ul>
            </li>
            <li>
              <h5 className="inline-block py-1 px-2 mb-2 text-xs text-white bg-deep-orange rounded">
                サーバー情報
              </h5>
              <ul className="pl-4 text-gray-600">
                <li className="mt-1">掲示板</li>
                <li className="mt-1">生放送・動画</li>
                <li className="mt-1">スタッフ</li>
                <li className="mt-1">よくある質問</li>
                <li className="mt-1">問い合わせ</li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
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
