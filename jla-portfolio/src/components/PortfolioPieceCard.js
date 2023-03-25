import React from 'react'
import styles from './PortfolioPieceCard.module.css'

const PortfolioPieceCard = ({ title, image, description, technologies, githubLink }) => {
  return (
    <div className={styles['portfolio-piece-card']}>
      <img className={styles['portfolio-piece-card__image']} src={image} alt={title} />
      <div className={styles['portfolio-piece-card__content']}>
        <h2 className={styles['portfolio-piece-card__title']}>{title}</h2>
        <p className={styles['portfolio-piece-card__description']}>{description}</p>
        <div className={styles['portfolio-piece-card__tags']}>
          {technologies.map((tag, index) => (
            <span key={index} className={styles['portfolio-piece-card__tag']}>{tag}</span>
          ))}
        <a href={githubLink} target="_blank" rel="noopener noreferrer"> {/* Add a link to the GitHub repo */}
          <img className={styles['github-link']} src="/github_white.png" alt="GitHub Link" /> {/* Use the image in the public folder */}
        </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPieceCard