import './style.scss'
import image1 from "./about-01.jpg"
import image2 from "./about-02.jpg" 
import image3 from "./about-03.jpg"
import image4 from "./about-04.jpg" 

function Images() {
    return (
        <div className='Images'>
            <div className='G-image'>
                <div className='P-image'>
                    <div 
                      className='section1-image' ><img src={image1} alt="" />
                    </div>
                    <div className='image-text'>
                        <div>
                            <h4 className='image-h4'>Jennifer Soft</h4>
                        </div>
                        <div>
                            <p className='image-p'>Founder and CEO</p>
                        </div>
                        <div>
                            <h2 className='image-h2'>
                                Vivamus cursus leo nec sem feugiat <br/> sagittis.
                                Duis ut feugiat odio, sit  amet<br/> accumsan odio.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='P-image'>
                    <div className='section1-image' >
                        <img src={image2} alt="" />
                    </div>
                    <div className='image-text'>
                        <div>
                            <h4 className='image-h4'>Daisy Walker</h4>
                        </div>
                        <div>
                            <p className='image-p'>Executive Chef</p>
                        </div>
                        <div>
                        <h2 className='image-h2'>Praesent non vulputate elit. Orci varius  <br/> natoque et magnis dis parturient,  <br/> nascetur ridiculus mus.</h2>
                        </div>                        
                    </div> 
                </div>
            </div>

            <div className='G-image'>
                <div className='P-image'>
                    <div 
                      className='section1-image' ><img src={image3} alt="" />
                    </div>
                    <div className='image-text'>
                        <div>
                            <h4 className='image-h4'>Florence Nelson</h4>
                        </div>
                        <div>
                            <p className='image-p'>Kitchen Manager</p>
                        </div>
                        <div>
                            <h2 className='image-h2'>
                            Aenean sapien sem, ultricies sed <br/> 
                            vulputate et, auctor vel mauris. Integer sit <br/> 
                            amet diam eget est facilisis lacinia vitae.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='P-image'>
                    <div className='section1-image' >
                        <img src={image4} alt="" />
                    </div>
                    <div className='image-text'>
                        <div>
                            <h4 className='image-h4'>Valentina Martin</h4>
                        </div>
                        <div>
                            <p className='image-p'>Culinary Director</p>
                        </div>
                        <div>
                        <h2 className='image-h2'>Praesent non vulputate elit. Orci varius<br/>
                         natoque penatibus et magnis montes,<br/>
                          nascetur ridiculus mus.</h2>
                        </div>                        
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Images