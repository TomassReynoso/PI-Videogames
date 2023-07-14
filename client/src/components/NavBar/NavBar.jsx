import React from 'react'
import style from './NavBar.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { SearchBar } from '../../components/SearchBar/SearchBar'

const NavBar = () => {
    return (
        <div className={style.navContainer}>

            <div>
                <Link to={'/home'}>
                    <button className={style.homeButton}>
                        Henry Videogames
                    </button>
                </Link>
            </div>

            <div className={style.SearchBar}>
                <SearchBar />
            </div>

            <div>
                <Link to={'/form'}>
                    <button className={style.formButton}>
                        Add Game
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;