import './style.scss'
import image1 from "./about-01.jpg"

function Images() {
    return (
        <div className='Images'>
            <div className='P-image'>
                <div className='section1-image' ><img src={image1} alt="" /></div>
                <div className='image-text'>
                    <h4 className='image-h4'>Jennifer Soft</h4>
                    <p className='image-p'>Founder and CEO</p>
                    <h2 className='image-h2'>Vivamus cursus leo nec sem feugiat sagittis.
								Duis ut feugiat odio, sit amet accumsan
								odio.</h2>
                </div>
            </div>

            <div className='P-image'>
                <div className='section1-image' ><img src={image1} alt="" /></div>
                <div className='image-text'>
                    <h4 className='image-h4'>Jennifer Soft</h4>
                    <p className='image-p'>Founder and CEO</p>
                    <h2 className='image-h2'>Vivamus cursus leo nec sem feugiat sagittis.
								Duis ut feugiat odio, sit amet accumsan
								odio.</h2>
                </div>
            </div>
        </div>
    )
}
export default Images