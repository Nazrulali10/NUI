import { useState } from 'react'

export const CopyCode = ({code}) => {
    const [copied,setCopied] = useState(false)
    const handleCopy = async()=>{
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(()=>setCopied(false),1500)
    }
  return (
    <div>
        <button className={`,  hover:bg-purple-200 hover:text-purple-800 rounded-xl px-4 py-2  transition-colors duration-300 mt-4`} onClick={handleCopy}>{copied?'Copied!':'Copy'}</button>
    </div>
    
  )
}
