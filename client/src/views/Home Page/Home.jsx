import React from 'react'
import styles from './Home.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardsContainer } from '../../components/CardsContainer/CardsContainer'
import { getGames } from '../../redux/actions/actions'
// import { Pagination } from '../../components/Pagination/Pagination'

const Home = () => {
    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.games)

    useEffect(() => {
        dispatch(getGames())
    }, [dispatch])

    //FILTRADO LOCAL


    // PAGINADO LOCAL

    // const CARDS_PER_PAGE = 15;

    // const prevPage = () => {
    //     const prev = currentPage - 1;
    //     const firstIndex = prev * CARDS_PER_PAGE;
    //     if (prev < 0) return;
    //     setCards([...games].splice(firstIndex, CARDS_PER_PAGE));
    //     setCurrentPage(prev);
    // }

    // const nextPage = () => {
    //     const next = currentPage + 1;
    //     const firstIndex = next * CARDS_PER_PAGE;
    //     if (firstIndex >= games.length) return;
    //     setCards([...games.splice(firstIndex, CARDS_PER_PAGE)])
    //     setCurrentPage(next);
    // }

    // useEffect(() => {
    //     setCards([...games].splice(0, CARDS_PER_PAGE));
    // }, [games])


    return (
        <div>
            <h1>Henry VideoGames</h1>
            {console.log('juegos', allGames)}
            <div>
                {/* <div>
                    <button onClick={prevPage}>Anterior</button>
                    <button onClick={nextPage}>Próxima</button>
                </div> */}
                <button className={styles.filterContainer}>Filtrado</button>

                <div>
                    <CardsContainer games={allGames}></CardsContainer>
                </div>
            </div>
        </div>
    )
}

export default Home