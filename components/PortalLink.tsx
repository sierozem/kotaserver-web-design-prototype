import { IconType as ReactIconType } from 'react-icons'

interface Props {
  title: string
  iconType: ReactIconType
}

const PortalLink: React.VFC<Props> = ({ title, iconType }) => {
  const IconType = iconType

  return (
    <div className="p-2 w-1/3">
      <div className="flex items-center py-4 px-6 bg-white rounded-xl shadow">
        <IconType className="mr-4 w-12 h-12" />
        <p className="text-lg font-bold">{title}</p>
      </div>
    </div>
  )
}

export default PortalLink
