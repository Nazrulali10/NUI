import Tab1 from "../components/tabs/Tab1"
import Tab2 from "../components/tabs/Tab2"

const TabSection = () => {
  return (
    <div className='bg-gray-100 rounded-xl p-4 md:p-12' id='bento'>
      <h1 className='font-semibold text-purple-600 text-2xl md:text-3xl'>Tab</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-2 p-2 md:gap-6 md:p-6 items-center'>
        <Tab1/>
        <Tab2/>
    </div>
    </div>
  )
}
export default TabSection