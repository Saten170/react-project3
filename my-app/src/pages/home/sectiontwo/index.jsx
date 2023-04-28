import './style.scss'
import image1 from "./01.jpg"
import image2 from './02.jpg'
import image3 from "./03.jpg"
import image4 from './04.jpg'
import image5 from "./05.jpg"
import image6 from './06.jpg'
import image7 from "./07.jpg"
import image8 from './08.jpg'
function SectionTwo() {
    return (
        <div className='Gallery'>
            {/* <div className='galler-page'> */}
                <div className='G-image'>
                    <div className='aaa'>
                        <div className='Gallery-image' ><img src={image1} alt="" /></div>
                        <div>
                         <h4 className='image-title'>Fusce dictum finibus</h4>
                         <p className='image-description'>Nam in suscipit nisi, sit amet <br/>
                          consectetur metus. Ut sit amet <br/> 
                          tellus accumsan</p>
                         <p className='image-p'>$45 / $55</p>
                        </div>
                        
                    </div>
                    <div>
                    <div className='Gallery-image' ><img src={image2} alt="" /></div>
                        <div>
                         <h4 className='image-title'>Aliquam sagittis</h4>
                         <p className='image-description'>Nam in suscipit nisi, sit amet <br/>  
                         consectetur metus. Ut sit amet <br/> 
                         tellus accumsan</p>
                         <p className='image-p'>$65 / $70</p>
                        </div>
                    </div>
                    <div>
                    <div className='Gallery-image' ><img src={image3} alt="" /></div>
                        <div>
                         <h4 className='image-title'>Sed varius turpis</h4>
                         <p className='image-description'>Nam in suscipit nisi, sit amet <br/> 
                          consectetur metus. Ut sit amet <br/> 
                           tellus accumsan</p>
                         <p className='image-p'>$30.50</p>
                        </div>
                    </div>
                    <div>
                    <div className='Gallery-image' ><img src={image4} alt="" /></div>
                        <div>
                         <h4 className='image-title'>Aliquam sagittis</h4>
                         <p className='image-description'>Nam in suscipit nisi, sit amet <br/> 
                          consectetur metus. Ut sit amet <br/> 
                           tellus accumsan</p>
                         <p className='image-p'>$25.50</p>
                        </div>
                    </div>
                </div>

                <div className='G-image'>
                    <div>
                        <div className='Gallery-image' ><img src={image5} alt="" /></div>
                        <div>
                         <h4 className='image-title'>Maecenas eget justo</h4>
                         <p className='image-description'>Nam in suscipit nisi, sit amet <br/> 
                          consectetur metus. Ut sit amet <br/> 
                           tellus accumsan</p>
                         <p className='image-p'>$80 / $25</p>
                        </div>
                        
                    </div>
                    <div>
                    <div className='Gallery-image' ><img src={image6} alt="" /></div>
                        <div>
                         <h4 className='image-title'>Quisque et felis eros</h4>
                         <p className='image-description'>Nam in suscipit nisi, sit amet <br/> 
                          consectetur metus. Ut sit amet <br/>  tellus accumsan</p>
                         <p className='image-p'>$20 / $40 / $60</p>
                        </div>
                    </div>
                    <div>
                    <div className='Gallery-image' ><img src={image7} alt="" /></div>
                        <div>
                         <h4 className='image-title'>Sed ultricies dui</h4>
                         <p className='image-description'>Nam in suscipit nisi, sit amet <br/> consectetur metus. Ut sit amet <br/> tellus accumsan</p>
                         <p className='image-p'>$94</p>
                        </div>
                    </div>
                    <div>
                    <div className='Gallery-image' ><img src={image8} alt="" /></div>
                        <div>
                         <h4 className='image-title'>Donec porta consequat</h4>
                         <p className='image-description'>Nam in suscipit nisi, sit amet <br/>
                          consectetur metus. Ut sit amet <br/> tellus accumsan</p>
                         <p className='image-p'>$15</p>
                        </div>
                    </div>
                </div>


            {/* </div> */}

        </div>
    )
}
export default SectionTwo