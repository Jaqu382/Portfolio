import React from 'react'
import styles from './PortfolioPieceCard.module.css'

const PortfolioPieceCard = ({ title, image, description, technologies, githubLink }) => {
  return (
    <div className={styles['portfolio-piece-card']}>
      <img src={image} className={styles['portfolio-piece-card__image']} alt={title} />
      <div className={styles['portfolio-piece-card__content']}>
        <h2 className={styles['portfolio-piece-card__title']}>{title}</h2>
        <p className={styles['portfolio-piece-card__description']}>{description}</p>
        <div className={styles['portfolio-piece-card__tags']}>
          {technologies.map((technology, index) => (
            <span key={index} className={styles['portfolio-piece-card__tag']}>
              {technology}
            </span>
          ))}
        </div>
        <a href={githubLink} className={styles['portfolio-piece-card__link']}>
          View on GitHub
        </a>
      </div>
    </div>
  )
}

export default PortfolioPieceCard