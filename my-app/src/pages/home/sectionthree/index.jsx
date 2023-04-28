import './style.scss'
import image1 from "./img-01.jpg"

function SectionThree(){
    return(
       
<div className='row'>
  <div className=' row-image'><img src={image1} alt="" /> </div>
  <div className='row-text'>
    <h4 className='text-h4'>Maecenas nulla neque</h4>
    <p className='text-p'>
    Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus.
    <br/> Ut id bibendum erat. Lorem ipsum dolor sit amet,<br/>
     consectetur adipiscing elit. Maecenas interdum porttitor <br/>
      imperdiet. Integer facilisis.
    </p>
    <div id="button_div">
      <button id='row-btn'>Read More</button>
    </div>
   
  </div>
</div>
        
    )
}
export default SectionThree