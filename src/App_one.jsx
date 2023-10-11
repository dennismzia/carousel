import React from 'react'
import Carousel from './components/Carousel'

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png"
]



const App = () => {
  return (
    <main className="relative">
      <div className="max-w-lg justify-center">
        <Carousel>
          {
            slides.map((slide)=>(
              <img src={slide}/>
            ))

          }
        </Carousel>
      </div>
    </main>
  )
}

export default App