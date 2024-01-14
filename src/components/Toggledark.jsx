import { BiSun } from 'react-icons/bi'
import { BiMoon } from 'react-icons/bi'

const ToggleDark = ({ darkMode, setDarkMode }) => {

    const toggle = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div onClick={toggle} className={`bg-neutral-200 cursor-pointer rounded-full w-11 border border-neutral-400 ${darkMode ? 'bg-neutral-700 border-neutral-500' : ''}`}>
            <div className={`bg-white dark:bg-neutral-900 w-[18px] h-[18px] m-[2px] rounded-full grid place-items-center transition-transform duration-150 ease-out ${darkMode ? 'translate-x-[111%] ' : ''}`}>
                <BiSun className={`absolute p-[1px] text-black duration-200 ease-out ${darkMode ? 'opacity-0' : ''}`}/>
                <BiMoon className={`absolute p-[1px] text-white duration-200 ease-out ${darkMode ? '' : 'opacity-0'}`}/>
            </div>
        </div>
    )
}

export default ToggleDark