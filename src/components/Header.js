import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <span className="btn btn-ghost normal-case text-xl">ToDo</span>
            </div>
            <div className="navbar-end">
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Header