import Accordian1 from "../components/accordians/Accordian1"
import Accordian2 from "../components/accordians/Accordian2"
import Accordian3 from "../components/accordians/Accordian3"

const AccordianSection = () => {
  return (
    <div className='bg-gray-100 rounded-xl p-4 md:p-12' id='bento'>
      <h1 className='font-semibold text-purple-600 text-2xl md:text-3xl'>Accordian</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-2 p-2 md:gap-6 md:p-6 items-center'>
        <Accordian1/>
        <Accordian2/>
        <Accordian3/>
    </div>
    </div>
  )
}
export default AccordianSection