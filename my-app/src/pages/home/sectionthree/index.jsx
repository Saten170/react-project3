import './style.scss'
import image1 from "./img-01.jpg"

function SectionThree(){
    return(
       
<div className='row'>
  <div className=' row-image'><img src={image1} alt="" /> </div>
  <div className='row-text'>
    <h4 className='text-h4'>Maecenas nulla neque</h4>
    <p className='text-p'> Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to 
        <a href="">talk to us</a>  for additional permissions about our templates. Thank you.
    </p>
    <a className='row-btn' href="">Read More</a>
  </div>
</div>
        
    )
}
export default SectionThree