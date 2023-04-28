import './style.scss'
function SectionTwo() {
    return (
        <div className='section-two' >
            <div className='inputs'>
                <input className='input1' placeholder='Name' type="text" />
                <input className='input2' placeholder='Email' type="text" />
                <textarea className='input3' placeholder='Message' type="text" />
                <div id="button_div">
                    <button className='row-btn'>Send</button>
                </div>
            </div>
            <div className='address'>
                <p className='address-p1'>Our Address</p>
                <h2 className='address-h2'>180 Orci varius natoque penatibus et <br />
                    magnis dis parturient montes, nascetur <br />
                    ridiculus mus 10550</h2>
                <p className='address-p2'>080-090-0110</p>
                <p className='address-p2'>info@company.co</p>
            </div>
        </div>
    )
}
export default SectionTwo