import { useState } from "react"
import ToggleDark from "./Toggledark"
import { Link } from 'react-router-dom'

const Navbar = ({ darkMode, setDarkMode, overFlow, setOverflow }) => {

    const [open, setOpen] = useState(false)

    window.onresize = function () { // close navbar after screen resize
        var w = window.innerWidth
        if (w > 768) {
            setOpen(false)
            setOverflow(false)
        }
    }

    return (
        <div>
            <div className="absolute z-10 h-[60px] w-full shadow-md bg-white dark:bg-neutral-800 dark:text-neutral-200 flex justify-between items-center px-5 font-semibold">
                <div>Brand</div>
                <div className="cursor-pointer md:hidden" onClick={() => {setOpen(!open); setOverflow(!overFlow)}}>menu</div>
                <ul className="hidden md:flex">
                    <li className="mr-3"><Link to='/'>Home</Link></li>
                    <li><Link to='/about/'>About</Link></li>
                    <li className="mx-3"><Link to='/docs/'>Docs</Link></li>
                    <ToggleDark darkMode={darkMode} setDarkMode={setDarkMode} />
                </ul>
            </div>
            {/* toggle navbar */}
            <div className={`absolute bg-white dark:bg-neutral-800 dark:text-neutral-200 overflow-auto h-[calc(100vh-60px)] w-full top-[60px] transition-transform duration-150 ease-out ${open ? '' : '-translate-y-full'}`}>
                <ul className="text-center m-5">
                    <li><Link onClick={() => {setOpen(false); setOverflow(false)}} to='/'>Home</Link></li>
                    <li className="my-3"><Link onClick={() => {setOpen(false); setOverflow(false)}} to='/about/'>About</Link></li>
                    <li><Link onClick={() => {setOpen(false); setOverflow(false)}} to='/docs/'>Docs</Link></li>
                    <div className="grid place-items-center my-3">
                        <ToggleDark darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar