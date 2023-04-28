import './style.scss'
import { useState } from 'react'


function SectionFour(){
    const [lorem1,setLorem1]=useState(false)
    const [lorem2,setLorem2]=useState(false)
    const [lorem3,setLorem3]=useState(false)
    const [lorem4,setLorem4]=useState(false)

    const handleClick1=()=>{
        if(!lorem1){
            setLorem1(true)
            setLorem2(false)
            setLorem3(false)
            setLorem4(false)
        }else{
            setLorem1(false)
        }
       
    }
    const handleClick2=()=>{
        setLorem2(true)
        setLorem1(false)
        setLorem3(false)
        setLorem4(false)
    }
    const handleClick3=()=>{
        setLorem3(true)
        setLorem1(false)
        setLorem2(false)
        setLorem4(false)
    }
    const handleClick4=()=>{
        setLorem4(true)
        setLorem1(false)
        setLorem2(false)
        setLorem3(false)
    }

    return (
        <div className='main-div'>
            <div className='text-div'>
                <h1 className='main-h1'>FAQs</h1>
                <p className='main-p'>This section comes with Accordion tabs for different questions and answers <br/>
                 about Simple House HTML CSS template. Thank you. #666</p>
            </div>
            <div className='main-div2'>
                <div onClick={handleClick1} className='lorem'>
                    <p className='lorem-p'>1. Fusce eu lorem et dui #09C maximus varius?</p>
                    {
                        lorem1 && <p>
                            #666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.
                        </p>
                    }
                </div>
                <div onClick={handleClick2} className='lorem'>
                    <p className='lorem-p'>2. Vestibulum #999 ante ipsum primis in faucibus orci?</p>
                </div>
                <div onClick={handleClick3} className='lorem'>
                    <p className='lorem-p'>3. Um erat. Lorem ipsum dolor sit amet consectetur?</p>
                </div>
                <div onClick={handleClick4} className='lorem'>
                    <p className='lorem-p'>4. Ut ac erat sit amet neque efficitur faucibus et in lectus?</p>
                </div>
            </div>
        </div>
    )
}
export default SectionFour