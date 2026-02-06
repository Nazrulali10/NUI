
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

const CopyWrapper = ({code,children}) => {
     const [copied,setCopied] = useState(false)
        const handleCopy = async()=>{
            await navigator.clipboard.writeText(code)
            setCopied(true)
            setTimeout(()=>setCopied(false),1500)
        }
  return (
    <div className='relative '><button onClick={handleCopy} className='absolute rounded-full bg-purple-50 text-purple-500 -right-3 -top-3 p-1 hover:text-purple-600'>{copied?<Check size={12} />:<Copy size={16}/>}</button>
    <div className=''>{children}</div>
    </div>
  )
}

export default CopyWrapper

