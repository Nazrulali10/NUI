import { Button1Code, Button2Code, Button3Code, Button4Code, Button5Code, Button5_2Code, Button5_3Code, Button6Code, Button6_2Code, Button7Code, Button8Code, Button8_2Code } from "../assets/codeSnippets"
import Button1 from "../components/buttons/Button1"
import Button2 from "../components/buttons/Button2"
import Button3 from "../components/buttons/Button3"

import Button4 from "../components/buttons/Button4"
import Button5 from "../components/buttons/Button5"
import Button5_2 from "../components/buttons/Button5_2"
import Button5_3 from "../components/buttons/Button5_3"
import Button6 from "../components/buttons/Button6"
import Button6_2 from "../components/buttons/Button6_2"
import Button7 from "../components/buttons/Button7"
import Button8 from "../components/buttons/Button8"
import Button8_2 from "../components/buttons/Button8_2"
import CopyWrapper from "../components/CopyWrapper"

const ButtonsSection = () => {
  return (
    <div className='bg-gray-100 rounded-xl p-4 md:p-12'>
      <h1 className='font-semibold text-purple-600 text-2xl md:text-3xl'>Button</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 px-2 md:px-12  justify-items-center gap-12">
        <CopyWrapper code={Button1Code}> <Button1 h='40px' w='120px' /></CopyWrapper>

        <CopyWrapper code={Button2Code}><Button2 h='40px' w='120px' /></CopyWrapper>
        <CopyWrapper code={Button3Code}><Button3 h='40px' w='120px' /></CopyWrapper>


        <CopyWrapper code={Button4Code}><Button4 h='40px' w='120px' /></CopyWrapper>
        <div className="gap-2 flex">
          <CopyWrapper code={Button5Code}><Button5 h='40px' w='120px' /></CopyWrapper>
          <CopyWrapper code={Button5_2Code}><Button5_2 h='40px' w='120px' /></CopyWrapper>
          <CopyWrapper code={Button5_3Code}><Button5_3 h='40px' w='120px' /></CopyWrapper>

        </div>
        <div className="gap-2 flex">
          <CopyWrapper code={Button6Code}><Button6 h='40px' w='120px' /></CopyWrapper>
          <CopyWrapper code={Button6_2Code}><Button6_2 h='40px' w='120px' /></CopyWrapper>
        </div>
        <CopyWrapper code={Button7Code}><Button7 h='40px' w='160px' /></CopyWrapper>
        <div className="gap-2 flex">
          <CopyWrapper code={Button8Code}><Button8 h='40px' w='160px' /></CopyWrapper>
          <CopyWrapper code={Button8_2Code}><Button8_2 h='40px' w='160px' /></CopyWrapper>
        </div>
        
      </div>
    </div>
  )
}

export default ButtonsSection