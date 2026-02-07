import Menu1 from "../components/menu-bars/Menu1"
import Menu2 from "../components/menu-bars/Menu2"


const MenuSection = () => {
  return (
    <div className='bg-gray-100 rounded-xl p-4 md:p-12 min-h-72'>
      <h1 className='font-semibold text-purple-600 text-2xl md:text-3xl'>Menu</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-12 p-6 md:gap-6 md:p-12 items-center'>
        <Menu1/>
        <Menu2/>
    </div>
    </div>
  )
}
export default MenuSection