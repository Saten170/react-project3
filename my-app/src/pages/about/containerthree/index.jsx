import './style.scss'
import image6 from "./about-06.jpg"
function ContainerThree() {
    return (
        <div className='section'>
            <div 
              className='section-img'> <img src={image6} alt="" />
            </div>
            <div className='section-text'>
                <h2 className='text-h2'>History of our restaurant</h2>
                <p className='text-p1'>Sed ligula risus, interdum aliquet imperdiet sit amet, auctor <br/> sit amet justo. Maecenas posuere lorem id augue interdum <br/> vehicula. Praesent sed leo eget libero ultricies congue.</p>
                <p className='text-p2'>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. <br/> Ut id bibendum erat. Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Maecenas interdum porttitor <br/> imperdiet. Integer facilisis.</p>
            </div>
        </div>
    )
}
export default ContainerThree