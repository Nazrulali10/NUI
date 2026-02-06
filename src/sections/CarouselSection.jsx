import Carousel1 from "../components/carousels/Carousel1"
import Carousel2 from "../components/carousels/Carousel2"
import Carousel3 from "../components/carousels/Carousel3"

const CarouselSection = () => {
  return (
    <div className='bg-gray-100 rounded-xl p-4 md:p-12' id='bento'>
      <h1 className='font-semibold text-purple-600 text-2xl md:text-3xl'>Carousel</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-2 p-2 md:gap-6 md:p-6 items-center'>
        <Carousel1/>
        <Carousel3/>
        <Carousel2/>
    </div>
    </div>
  )
}
export default CarouselSection