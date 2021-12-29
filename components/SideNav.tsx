interface MenuItem {
  title: string
  children: string[]
}

const SideNav: React.VFC = () => {
  const items: MenuItem[] = [
    {
      title: 'はじめる',
      children: [
        'こた鯖案内',
        'ルール',
        '免責事項',
      ],
    },
    {
      title: 'イベント',
      children: [
        '建築コンテスト',
        'オークション',
        'イベント',
        'さばちゃんぽん',
      ],
    },
    {
      title: 'ガイド',
      children: [
        'サーバーの機能',
        '機能の一覧',
        'MODの導入方法',
        '日本語入力のしかた',
        'Discordの使い方',
        'ワールド',
      ],
    },
    {
      title: 'サーバー情報',
      children: [
        '掲示板',
        '生放送・動画',
        'スタッフ',
        'よくある質問',
        '問い合わせ',
      ],
    },
  ]

  return (
    <ul className="p-8 font-bold">
      {items.map(item => (
        <li key={item.title} className="mb-12 last:mb-0">
          <h5 className="inline-block py-1 px-2 mb-2 text-xs text-white bg-deep-orange rounded">
            {item.title}
          </h5>
          <ul className="pl-4 text-gray-600">
            {item.children.map(child => (
              <li key={child} className="mt-1">{child}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default SideNav
