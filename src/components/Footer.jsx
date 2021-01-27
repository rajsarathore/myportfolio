import './css/footer.css'

export default function Footer(){
    return(
        <div className="footerContent">
            <h2>You can contact me via email / whatsapp</h2>
            <div className='iconDiv'>
                <div className='iconRow'>
                    <a href="mailto:rajendrarathore1997@gmail.com">
                        <i class="fa fa-envelope" aria-hidden="true" title="gmail"></i>
                    </a>
                    <a href="https://wa.me/+918890007385" target="_blank">
                        <i class="fa fa-whatsapp" aria-hidden="true" title="whatsapp"></i>
                    </a>
                    <a href="tel:+918890007385">
                        <i class="fa fa-phone" aria-hidden="true" title="copy number"></i>
                    </a>
                </div>
            </div>
            <br/><br/>
            <p>I've made this website using React JS.<br/>
            It is being hosted using GitHub pages. Click on top right side to change the theme.
            <span style={{fontSize:'20px'}}>😊</span></p>
            <h6>(c)Rajendra Singh</h6>
        </div>
    )
}