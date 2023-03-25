import React from 'react'
import Head from 'next/head'
import { Element } from 'react-scroll'
import PortfolioPieceCard from '../components/PortfolioPieceCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const portfolioPieces = [
  {
    title: 'My Awesome Project',
    image: '../public/images/underConst.jpg',
    description: 'This is a description of my awesome project.',
    technologies: ['React', 'Next.js', 'CSS'],
    githubLink: 'https://github.com/myusername/my-awesome-project',
  },
  {
    title: 'My Cool Project',
    image: '../public/images/underConst.jpg',
    description: 'This is a description of my cool project.',
    technologies: ['React', 'Redux', 'Node.js'],
    githubLink: 'https://github.com/myusername/my-cool-project',
  },
  // add more portfolio pieces as needed
]

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true, // enable center mode
  centerPadding: '10%', // add padding to the left and right of the current slide
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: '15%', // adjust padding for larger screens
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: '10%', // adjust padding for medium-sized screens
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0%', // remove padding for small screens
      }
    }
  ]
}
function Home() {
  return (
    <>
      <Head>
        <title>Juan Luis Aquino</title>
      </Head>
      <div className="container">
        <div className="content">
          <h1>Juan Luis Aquino</h1>
          <Element name="Home" className="page-transition">  
            <p>
              Hey, my name is Juan, a recently graduated web developer with a passion for crafting 
              elegant and user-friendly web applications. I am always eager to explore new technologies 
              and continually expanding my developer's toolkit. As the field of development rapidly evolves, 
              I remain vigilant in keeping up with the latest tools and techniques to deliver high-performance 
              solutions to clients. If you're seeking a reliable and committed developer for your project, I'm here to help.
            </p>
          </Element>
          <h1>About</h1>
          <Element name="about" className="page-transition">
            
          </Element>
          <h1>Projects</h1>
          <Element name="projects" className="page-transition">
            <Slider {...settings}>
              {portfolioPieces.map((piece, index) => (
                <div key={index} className="carousel-item">
                  <PortfolioPieceCard
                    title={piece.title}
                    image={piece.image}
                    description={piece.description}
                    technologies={piece.technologies}
                    githubLink={piece.githubLink}
                  />
                </div>
              ))}
            </Slider>
          </Element>
          <h1>Resume</h1>
          <Element name="resume" className="page-transition">
            
            <p>Download my resume...</p>
          </Element>

        </div>
      </div>
    </>
  );
}

export default Home;