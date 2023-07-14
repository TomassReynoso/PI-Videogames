import React from 'react'
import Card from '../Card/Card'
import styles from './CardsContainer.module.css'

export const CardsContainer = ({ games }) => {

    return (
        <div>
            <h3>Contenedor de Cartas</h3>
            <div className={styles.cardsContainer}>
                {games && games.map(game =>
                    <Card
                        key={game.id}
                        name={game.name}
                        image={game.image}
                        genres={game.genres}
                    />)}
            </div>
        </div>
    )
}
