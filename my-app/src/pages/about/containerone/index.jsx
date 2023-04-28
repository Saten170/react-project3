import './style.scss'
import image1 from "./about-05.jpg"
function ContainerOne() {
    return (
        <div className='div1'>
            <div className='G-container-image' style={{backgroundImage:`url(${image1})`}} ></div>
        </div>
         
    )
}
export default ContainerOne