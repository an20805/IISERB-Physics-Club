import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Member from './team';
import { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 } from '../assets';
import Footer from './footer';
const About = (props) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const teamData = [
    {
      id: 1,
      img: p1,
      name: 'Kuncham Krishna Aasrith',
      batch: 2022
    },
    {
      id: 2,
      img: p2,
      name: 'Soumyadeep Mukherjee',
      batch: 2022
    },
    {
      id: 3,
      img: p3,
      name: 'Adishree Srinivasan',
      batch: 2022
    },
    {
      id: 4,
      img: p4,
      name: 'Rakhe Somshekhar Pushkar',
      batch: 2022
    },
    {
      id: 6,
      img: p6,
      name: 'Maharnab Goswami',
      batch: 2022
    },
    {
      id: 5,
      img: p5,
      name: 'Siddhant Patra',
      batch: 2022
    },
    {
      id: 7,
      img: p7,
      name: 'Shaziya Shabnam',
      batch: 2022
    },
    {
      id: 8,
      img: p8,
      name: 'Vaidehi Manoj Sawant',
      batch: 2022
    },
    {
      id: 9,
      img: p9,
      name: 'Vedant Ravindra Kalkotwar',
      batch: 2022
    },
    {
      id: 10,
      img: p10,
      name: 'Vinil Visweswara Shastry',
      batch: 2022
    }
  ]

  const member = teamData.map((item) => (<Member key={item.id} img={item.img} batch={item.batch} name={item.name} />))


  return (
    <div >
      <h1 className='mt-6  ml-6 mb-6 font-sans text-5xl' >2023-24</h1>
      <Carousel 
        responsive={responsive}
        >
        {member}
      </Carousel>
    </div>

  )
}

export default About