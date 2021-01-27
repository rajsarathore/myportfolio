import { FaAndroid, FaBootstrap, FaCss3Alt, FaGit, FaHtml5, FaJava, FaJenkins, FaReact, FaSass } from 'react-icons/fa';
import { SiAndroidstudio, SiEclipseide, SiFirebase, SiGit, SiJavascript, SiMysql, SiPivotaltracker, SiRedux, SiSpring, SiVisualstudiocode } from "react-icons/si";

import './css/skills.css'

export default function Skills(){
    const languages=[
        {
            icon:<FaJava style={{color:'lightblue'}}/>,
            name:'Java'
        },
        {
            icon:<SiJavascript style={{color:'yellow',backgroundColor:'black'}}/>,
            name:'JavaScript'
        },
        {
            icon:<FaHtml5 style={{color:'red',backgroundColor:'white'}}/>,
            name:'HTML'
        },
        {
            icon:<FaCss3Alt style={{color:'blue',backgroundColor:'white'}}/>,
            name:'CSS'
        },
        {
            icon:<SiMysql style={{color:'blue',backgroundColor:'white'}}/>,
            name:'SQL'
        },
    ]
    const frameworkAndLib=[
        {
            icon:<FaReact style={{color:'lightblue'}}/>,
            name:'React js'
        },
        {
            icon:<FaReact style={{color:'lightblue'}}/>,
            name:'React Native'
        },
        {
            icon:<FaAndroid style={{color:'green',backgroundColor:'white'}}/>,
            name:'Android(Java)'
        },
        {
            icon:<SiSpring style={{color:'green',backgroundColor:'white'}}/>,
            name:'Sring Framework'
        },
        {
            icon:<SiRedux style={{color:'purple',backgroundColor:'white'}}/>,
            name:'Redux'
        },
        {
            icon:<FaBootstrap style={{color:'purple', backgroundColor:'white'}}/>,
            name:'BootStrap'
        },
        {
            icon:<FaSass style={{color:'purple', backgroundColor:'white'}}/>,
            name:'SASS'
        },
    ]
    const tools=[
        {
            icon:<SiGit style={{color:'red', backgroundColor:'white'}}/>,
            name:'Git'
        },
        {
            icon:<SiMysql style={{color:'blue', backgroundColor:'white'}}/>,
            name:'MySQL'
        },
        {
            icon:<FaJenkins style={{color:'blue', backgroundColor:'red'}}/>,
            name:'Jenkins'
        },
        {
            icon:<SiPivotaltracker style={{color:'blue', backgroundColor:'white'}}/>,
            name:'PCF'
        },
        {
            icon:<SiFirebase style={{color:'orange', backgroundColor:'white'}}/>,
            name:'Firebase'
        },
        {
            icon:<SiEclipseide style={{color:'darkblue', backgroundColor:'white'}}/>,
            name:'Eclipse IDE'
        },
        {
            icon:<SiAndroidstudio style={{color:'green', backgroundColor:'white'}}/>,
            name:'Android Studio'
        },
        {
            icon:<SiVisualstudiocode style={{color:'blue', backgroundColor:'white'}}/>,
            name:'VS Code'
        },

    ]
    const skillSet=(name,skills)=>{
        return (
            <div className='skillContainer'>
                <h2>{name}</h2>
                <ul style={{textAlign:'left'}}>
                    {skills.map(skill=>(<li>{skill.icon} {skill.name}</li>))}
                </ul>
            </div>
        )
    }
    return(
        <div className='container'>
            <div>
                <h1>My Skills</h1>
                <hr style={{border:'5px solid blue' }}/>
            </div>
            <div className='skills'>
                {skillSet('Languages',languages)}
                {skillSet('Frameworks & Libraries',frameworkAndLib)}
                {skillSet('Tools',tools)}
            </div>
        </div>
    )
}