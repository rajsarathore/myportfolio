import React from 'react';
import Welcome from '../images/welcome.gif'
import smilyCartoon from '../images/smilycartoon.gif'
import scrolling from '../images/scrolling.gif'
import myprofile from '../images/myprofile.jpg'
import github from '../images/github.gif';
import linkedin from '../images/linkedin.png'
import './home.css'
import { dateOfJoining, GITHUBPROFILE, LINKEDINPROFILE } from './constant';
import LinkedInLogo from '../components/LinkedlnLogo';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import { FaReact } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isShowWelcome:true
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({isShowWelcome:false})
        }, 5000);
    }

    yearsDiff=()=> {
        let today = new Date();
        let joiningDate = new Date(dateOfJoining.YEAR,dateOfJoining.MONTH,dateOfJoining.DAY);
        let totalMonths =  (today.getTime() - joiningDate.getTime())/(1000*60*60*24*30);
        let years= parseInt((totalMonths/12));
        let months = parseInt((totalMonths-12*years))
        return years+' years and '+months+' months'
    }

    render(){
        return(
            <div style={{width:'100%',height:'100%'}}>
                {this.state.isShowWelcome?
                    <img src={Welcome}  width="80%" height="80%" alt="Welcome" /> 
                :
                    <div>
                        <img src={smilyCartoon} width="200px" height="200px" alt="Hi" />
                        <h2>Hi !, I'm <h1>Rajendra Singh</h1> Welcome to my page</h2>
                        <h3> I am a Full-stack developer (Expert in &nbsp;
                            <FaReact style={{color:'blue'}}/><b className="blueText"> React js</b> and &nbsp;
                            <SiSpring style={{color:'green',backgroundColor:'white'}}/><b className='greenText'> Spring boot</b>)
                        </h3>
                        <img src={scrolling} width='150px' height='120px' alt='Scroll down please'/>
                        <div style={{marginTop:'50px'}}>
                            <h1>ABOUT Me</h1>
                        </div>
                        <div className='row aboutme'>
                            <div className='column'>
                                <img className="profilePic" src={myprofile} width="200px" height="200px" alt='Profile pic'/>
                                <div className='row icons'>
                                    <a href={GITHUBPROFILE}>
                                        <img className="profilePic" src={github} width="40px" height="40px" alt='Profile pic'/>
                                    </a>
                                    <a href={LINKEDINPROFILE}>
                                        <img className="profilePic" src={linkedin} width="40px" height="40px" alt='Profile pic'/>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3>Hello !, I'm <b className='backgroundOrange'> Rajendra.</b> Nice to meet you..</h3>
                                <p style={{maxWidth:'800px'}}>
                                    I am a full-stack developer and proficient in React JS, JavaScript, Spring Boot, Spring Framework, Git and many more.
                                    I have <b className='backgroundOrange'>{this.yearsDiff()}</b> of experience in <b className='backgroundOrange'> ATOS | SYNTEL</b>.<br/> Currently, 
                                    I am working on USA based project <b className='backgroundOrange'>(AutoZone)</b>.
                                    We are following the Agile Methodology scrum and have experience dealing with the direct foreign native client.<br/>
                                    I have written several Rest full webservice and React js code on various projects in Autozone.
                                </p>
                                <h3>I'm extremely passionate to learn new on daily basis...</h3>
                            </div>
                        </div>
                        <Skills/>
                    </div>
                }
                <LinkedInLogo/>
                <Footer/>
            </div>
        )
    }
}