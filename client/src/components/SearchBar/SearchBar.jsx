import React, { useState } from 'react'
import styles from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import { getGameByName } from '../../redux/actions/actions';

export const SearchBar = () => {

    const dispatch = useDispatch();
    const [videogameName, setVideogameName] = useState("")

    const handleChange = (event) => {
        event.preventDefault();
        setVideogameName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getGameByName(videogameName))
    }

    return (
        <div>
            <form className={styles.searchBarContainer} onChange={handleChange}>
                <input placeholder='Search Videogames...' />
                <button type='submit' onClick={handleSubmit}>Search</button>
            </form>

        </div>
    );
}

