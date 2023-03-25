import React from 'react'

const PortfolioPieceCard = ({ title, image, description, technologies, githubLink }) => {
  return (
    <div className = 'portfolio-piece-card'>
      <img className= 'portfolio-piece-card__image' src={image} alt={title} />
      <div className= 'portfolio-piece-card__content'>
        <h2 className= 'portfolio-piece-card__title'>{title}</h2>
        <p className='portfolio-piece-card__description'>{description}</p>
        <div className='portfolio-piece-card__tags'>
          {technologies.map((tag, index) => (
            <span key={index} className= 'portfolio-piece-card__tag'>{tag}</span>
          ))}
        <a href={githubLink} target="_blank" rel="noopener noreferrer"> 
          <img className='github-link' src="/github_white.png" alt="GitHub Link" /> 
        </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPieceCard