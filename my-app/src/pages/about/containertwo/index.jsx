import './style.scss'

function ContainerTwo() {
    return (
        <div className='main'>
            <div className='read-more'>
                <p className='main-p'>Donec sed orci fermentum, convallis <br/> lacus id, tempus elit. Sed eu neque <br/> accumsan, porttitor arcu a, interdum<br/> est. Donec in risus eu ante.</p>
                <div className="button1_div">
                    <button className='row-btn1'>Read More</button>
                </div>
            </div>
            <div className='read-more'>
                <p className='main-p'>Maecenas pretium rutrum molestie.<br/> Duis dignissim egestas turpis sit. Nam <br/> sed suscipit odio. Morbi in dolor finibus,<br/> consequat nisl eget.</p>
                <div className="button2_div">
                    <button className='row-btn2'>Read More</button>
                </div>
            </div>
            <div className='read-more'>
                <p className='main-p'>Morbi in dolor finibus, consequat nisl <br/> eget, pretium nunc. Maecenas pretium <br/> rutrum molestie. Duis dignissim egestas <br/> turpis sit.</p>
                <div className="button3_div">
                    <button className='row-btn3'>Read More</button>
                </div>
            </div>

        </div>
    )
}
export default ContainerTwo