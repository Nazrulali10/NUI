import { BentoGrid1 } from '../components/bento-grids/BentoGrid1'
import { BentoGrid2 } from '../components/bento-grids/BentoGrid2'
import { BentoGrid3 } from '../components/bento-grids/BentoGrid3'

const BentoSection = () => {
  return (
    <div className='bg-gray-100 rounded-xl p-4 md:p-12' id='bento'>
      <h1 className='font-semibold text-purple-600 text-2xl md:text-3xl'>Bento Grid</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-12 p-6 md:gap-6 md:p-12'>
        <BentoGrid1/>
        <BentoGrid2/>
        <BentoGrid3/>
    </div>
    </div>
  )
}
export default BentoSection