import Link from 'next/link'
import { IconType as ReactIconType } from 'react-icons'

interface Props {
  title: string
  iconType: ReactIconType
}

const PortalLink: React.VFC<Props> = ({ title, iconType }) => {
  const IconType = iconType

  return (
    <div className="p-2 w-64">
      <Link href="/doc">
        <a className="flex overflow-hidden flex-col w-full h-full bg-white rounded-xl shadow transition-transform ease-in-out hover:scale-105">
          <div className="p-6 w-full bg-gray-50">
            <IconType className="mx-auto w-24 h-24" />
          </div>
          <p className="flex flex-grow justify-center items-center p-4 text-lg font-bold">
            {title}
          </p>
        </a>
      </Link>
    </div>
  )
}

export default PortalLink
