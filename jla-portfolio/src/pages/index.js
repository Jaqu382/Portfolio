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
import styles from '/styles/Home.module.css';



const portfolioPieces = [
  {
    title: 'Portfolio website',
    image: 'images/underConst.jpg', // use the path to the image in the public folder
    description: 'This website was created using React and Next.js. The styling was done using CSS and it is hosted on github pages. The intent behind this website is not only to have it be a record of the work I do, but to evolve as I improve as a developer.',
    technologies: ['React', 'Next.js', 'CSS'],
    githubLink: 'https://github.com/Jaqu382/Portfolio.git',
  },
  {
    title: 'KnightsCrest',
    image: 'images/underConst.jpg', // use the path to the image in the public folder
    description: 'Created in group as part of my DIG4172 senior workshop class at UCF. This is a mobile app project that attempted to emulate the features of a physical campus card on a digital platform. The app was build using react native and utilized redux to pass data stored in a firebase realtime database between components of the app. ',
    technologies: ['ReactNative', 'Redux', 'Firebase', 'Node.js'],
    githubLink: 'https://github.com/Jaqu382/KC_Mobile.git',
  },
]

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true, // enable center mode
  centerPadding: '25%', // add padding to the left and right of the current slide
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
        <title>Juan Aquino's portfolio</title>
        <meta name="description" content="This is a digital portfolio for the web developer, Juan Aquino. It is a continous work in progress" />
      </Head>
      <div className={styles.container}>
        <header>
          <h1 className={styles.sectionTitle}>Juan Luis Aquino</h1>
        </header>
        <Element id='home' name="home" className={styles.profileImageWrapper}>
        <img
          src="images/Aquino_juan.jpg"
          alt="Juan Luis Aquino, a web developer with a passion for crafting elegant and user-friendly web applications."
          ref={imageRef}
        />
        </Element>
        <Element id="bio" name="bio" className={styles.bio}>
          <p className={styles.mainText}>
            Hey, my name is Juan, a recently graduated web developer with a passion for crafting
            elegant and user-friendly web applications. I am always eager to explore new technologies
            and continually expanding my developer's toolkit. As the field of development rapidly evolves,
            I'm constantly keeping up with the latest tools and techniques to deliver high-performance
            solutions to clients. If you're looking for a reliable and committed developer for your project, I'm your guy!
          </p>
        </Element>
        <h2 className={styles.sectionTitle}>Check out my projects</h2>
        <Element name="projects" className={styles.projects}>
  <div className={styles.sliderWrapper}>
    <Slider {...settings}>
      {portfolioPieces.map((piece, index) => (
        <div key={index} className={styles.carouselItem}>
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
  </div>
</Element>

        <h2 className={styles.sectionTitle}>About me</h2>
        <Element name="skills" className={styles.aboutMe}>
          <p className={styles.mainText}>
            I'm pretty solid with essential web development languages like HTML, CSS, and JavaScript.
            I'm also comfortable working with front-end and back-end frameworks like React, ReactNative,
            Node.js, and Express, which allow me to build some pretty cool web applications.
            I've had hands-on experience using Git, Agile methodology, RESTful APIs, and database management systems.
            I'm also an obsessive problem-solver and pay great attention to detail.
            I consider myself a team player, and love working with others to develop interesting tools and products.
            Some of my more recent interests include machine learning, prompt manipulation, 3D modeling, and containerized applications.
            Outside of coding I also enjoy playing video games and Dungeons and Dragons whenever my schedule allows for it.
          </p>
        </Element>
      </div>
      <Footer />
    </>
  );
}

export default Home;