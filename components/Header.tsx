import { FaSearch, FaDiscord, FaTwitter} from 'react-icons/fa'
import Brand from '../images/brand.svg'
import Logo from '../images/logo.svg'

const Header: React.VFC = () => {
  return (
    <>
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="flex items-center px-2 pt-5 pb-2 bg-white bg-layerd-bottom bg-repeat-x bg-wave-bottom shadow-sm bg-[length:auto_15px]">
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
      </div>
    </>
  )
}

export default Header
