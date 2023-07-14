import React from 'react'
import styles from './Card.module.css'

const Card = ({ id, name, image, genres }) => {
    return (
        <div className={styles.cardContainer}>
            <img src={image} alt={name} className={styles.cardImage} />
            <div className={styles.cardTitle}>
                <h5>{name}</h5>
            </div>
            <div>
                <h5>{genres}</h5>
            </div>
        </div>
    )
}

export default Card