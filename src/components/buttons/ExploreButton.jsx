import { ChevronsDown } from "lucide-react"

export const handleClick = ()=>{
        console.log('clickd')
        const bentoSection = document.getElementById('bento')
        bentoSection?.scrollIntoView({behavior:'smooth'})
    }

const ExploreButton = () => {
    
  return (<div className="w-full justify-center flex mt-2">
      <button onClick={handleClick} className="flex flex-col w-14 text-purple-600 justify-center items-center gap-2 text-xl">
        <span>Explore</span>
        <span className='animate-bounce'><ChevronsDown size={16} /></span>
    </button>
  </div>
  
  )
}

export default ExploreButton