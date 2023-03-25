import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

import { useState } from 'react'
import Head from 'next/head'
import { Element } from 'react-scroll'
import PortfolioPieceCard from '../components/PortfolioPieceCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Footer from '../components/Footer';
import styles from './Home.module.css'


const portfolioPieces = [
  {
    title: 'My Awesome Project',
    image: '/underConst.jpg', // use the path to the image in the public folder
    description: 'This is a description of my awesome project.',
    technologies: ['React', 'Next.js', 'CSS'],
    githubLink: 'https://github.com/myusername/my-awesome-project',
  },
  {
    title: 'My Cool Project',
    image: '/underConst.jpg', // use the path to the image in the public folder
    description: 'This is a description of my cool project.',
    technologies: ['ReactNative', 'Redux', 'Node.js'],
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
  centerPadding: '15%', // add padding to the left and right of the current slide
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

  // Download resume
  const downloadResume = () => {
    window.open('/Resume2023.pdf', '_blank');
  };

  // Hero image animation
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const img = imageRef.current;
    if (img.complete) {
      setImageLoaded(true);
    }
  }, []);

  const fadeIn = {
    opacity: imageLoaded ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
  };


  return (
    <>
      <Head>
        <title>Juan Luis Aquino</title>
      </Head>
      <div className="container">
        <div className="content">
          <Element id='home'name="home" className={styles.profileImageWrapper}>
            <img
              src="/Aquino_juan.jpg"
              alt="Juan Luis Aquino"
              style={{ width: '200px', height: '200px', borderRadius: '50%', ...fadeIn }}
              ref={imageRef}
            />
          </Element>
          <h1>Juan Luis Aquino</h1>
          <Element id='bio' name='bio' className="page-transition"> 
            <p className='main-text'>
              Hey, my name is Juan, a recently graduated web developer with a passion for crafting 
              elegant and user-friendly web applications. I am always eager to explore new technologies 
              and continually expanding my developer's toolkit. As the field of development rapidly evolves, 
              I'm constantly keeping up with the latest tools and techniques to deliver high-performance 
              solutions to clients. If you're looking for a reliable and committed developer for your project, I'm your guy!
            </p>            
          </Element>        
          <h1>Check out my projects</h1>
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
          <h1>About me</h1>
          <Element name="skills" className="page-transition">
            <p className='main-text'>I'm pretty solid with essential web development languages like HTML, CSS, and JavaScript. 
              I'm also comfortable working with front-end and back-end frameworks like React, ReactNative, 
              Node.js, and Express, which allow me to build some pretty cool web applications. 
              I've had hands-on experience using Git, Agile methodology, RESTful APIs, and database management systems. 
              I'm also an obsessive problem-solver and pay great attention to detail. 
              I consider myself a team player, and love working with others to develop interesting tools and products.
              Some of my more recent interests include machine learning, prompt manipulation, 3D modeling, and containerized applications.
              Outside of coding I also enjoy playing video games and Dungeons and Dragons whenever my schedule allows for it.</p>
          </Element>
        </div>
      </div>
      <Footer></Footer>
      
    </>
  );
}

export default Home;