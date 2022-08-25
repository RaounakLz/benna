import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Home.css"
import CardsProduct from './CardsProduct';
import AvisHome from './AvisHome';

function Home() {
  return (
    <div>

      <div >
        <Carousel showThumbs={false} infiniteLoop autoPlay={true} interval={3000}>
          <div>
            <img src="https://images.unsplash.com/photo-1531594652722-292a43e752b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" />

          </div>
          <div>
            <img src="salé.jpg" />

          </div>
          <div>
            <img src="hlow1.jpg" />

          </div>
          <div>
            <img src="https://images-gmi-pmc.edge-generalmills.com/2c1e4896-701a-4fd5-ad9e-049f94843b1e.jpg" />

          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0603/2801/8158/articles/header-article-baklawa_1024x1024.jpg?v=1642371763" />

          </div>


        </Carousel>
      </div>


      <CardsProduct />

      <AvisHome />


    </div >








  )
}

export default Home