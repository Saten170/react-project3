import './style.scss'
import image1 from "./image1.jpg"
import image2 from './image2.jpg'

function Header (){
    return(
        <div className='header'
          style={{   backgroundImage:  `url(${image1})`
          }}>
            <div className='P-header'>

                <div className='header-inner'>
                    <div className='section1'>
                      <div className='section1-image' ><img src={image2} alt="" /> 
                      </div>
                      <div className='text'>
                        <h1 className='title'>Simple House</h1>
                        <h6 className='description'>new restaurant template</h6>
                      </div>
                    </div>

                    <div className='P-container'>
                     <a id='home' href="Home">Home</a>
                     <a href="">About</a>
                     <a href="">Contact</a>
                    </div>
                </div> 
            </div>
          


        </div>
    )
}
export default Header