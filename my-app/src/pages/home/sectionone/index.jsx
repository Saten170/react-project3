import './style.scss'

function SectionOne() {
    return (
        <div>
            <div className='welcome-text'>
                <h2 className='main-title'>Welcome to Simple House</h2>
                <p className='main-text'>Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
            </div>

            <div className='buttons'>
                <button id='P-button'><a className='active-link' href="">Pizza</a></button>
                <button className='P-button'><a className='active-link' href="">Salad</a></button>
                <button className='P-button'><a className='active-link' href="">Noodle</a></button>
            </div>
        </div>

    )
}
export default SectionOne