import {useContext} from 'react';
import { ContentContext } from '../context/ContentContext';
import { IoMdCode } from "react-icons/io";
import { FiMonitor } from "react-icons/fi";
import Work from '../icons/Work';
import Colors from '../icons/Colors';
import Lightning from '../icons/Lightning';
import Light from '../icons/Light';
import Prise from '../icons/Prise';
import '../styles/about.css';

import Container from '../components/Container';
import ExperienceComponent from '../components/ExperienceComponent';
import Skill from '../components/skill';

const formatDate = (dateStr) => {
  if (!dateStr) return 'Present';
  const [year, month] = dateStr.split('-');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return `${months[parseInt(month) - 1]}, ${year}`;
};

function About() {

  const {content} = useContext(ContentContext)

  

  return (
    <div className='page about-page'>
      <h1>About <span>Me</span></h1>
      
      {content && content['about'] ? (
          <Container dangerouslySetInnerHTML={{ __html: content['about'] }}  className={'about-container'}></Container>
        ): (
          <Container  className={'about-container'}>
            <p>
            As a passionate digital designer with over 8 years of experience, I specialize in creating immersive visual experiences that bridge the gap between aesthetics and functionality. My journey in design has been driven by a deep fascination with how visual elements can transform ideas into compelling digital narratives.
            </p>
            <br />
            <p>
            Based in Amman, Jordan, I've had the privilege of working with clients worldwide, bringing a unique Middle Eastern perspective to global design challenges. My approach combines traditional artistic principles with cutting-edge digital techniques, creating designs that are both culturally resonant and technologically advanced.
            </p>
          </Container>
      )}

      <br />
      <br />
      <section className="one">
        <Container className={'experience'}>
          <h3>
            <IoMdCode /> Design Expertises
          </h3>
          <br />
          <div>
            {content && content['expertise'] ? content['expertise'].map((xp, idx) => {
              return (
                <>
                <ExperienceComponent key={xp['name']} name={xp['name']} val={xp['percentage']} />
                {idx < content['expertise'].length-1 && <br />}
                </>
              )
            }): (<>
              <ExperienceComponent name={'Motion Design'} val={95} />
              <br />
              <ExperienceComponent name={'Visual Development'} val={92} />
              <br />
              <ExperienceComponent name={'UI/UX Design'} val={90} />
              <br />
              <ExperienceComponent name={'3D Visualization'} val={88} />
            </>)}
          </div>
          
        </Container>
        <Container className={'skills'}>
          <h3>
            <FiMonitor /> Creative Tools
          </h3>
          <br />
          <div>
            <Skill name={"Photoshop"} />
            <Skill name={"After Effects"} />
            <Skill name={"Adobe XD"} />
            <Skill name={"Blender"} />
            <Skill name={"Illustrator"} />
            <Skill name={"Premiere Pro"} />
            <Skill name={"Light Room"} />
            <Skill name={"CSP"} />
          </div>
        </Container>
      </section>
      <br />
      <br />
      <section className="two">
        <Container className={'pro-experience'}>
          <h3><Work /> Professional Experience</h3>
          <br />
          <div>
            {content && content['experience'] ? content['experience'].map((ex, idx) => {
              return (
                <div key={ex['name']}>
                  <h4>{ex['name']}</h4>
                  <span>{ex['name_2']}</span>
                  <p>{formatDate(ex['start_date'])} - {formatDate(ex['end_date'])}</p>
                  <p>{ex['desc']}</p>
                </div>
              )
            }) : (<>
              <div>
                <h4>Freelance Designer</h4>
                <span>Telescope Agency</span>
                <p>January, 2023 - Present</p>
                <p>Working as UI/UX designer and CGI artist, creating engaging digital experiences and visual content.</p>
              </div>
              <div>
                <h4>Freelance Designer</h4>
                <span>INNOVANJI</span>
                <p>October, 2021 - February, 2022</p>
                <p>Gained hands-on experience in social media design and 3D modeling, contributing to various client projects.</p>
              </div>
              <div>
                <h4>Freelance Designer</h4>
                <span>Upwork & Freelancer.com</span>
                <p>September, 2019 - Present</p>
                <p>Successfully delivered diverse design projects through leading freelance platforms, building a strong client portfolio.</p>
              </div>
            </>)}
          </div>
        </Container>
      </section>
      <br />
      <br />
      <section className="three">
        {content && content['services'] ? content['services'].map(service => {
          return (
            <Container key={service.name} className='service'>
              <span dangerouslySetInnerHTML={{__html: service['icon']}} className='icon'>
              </span>
              <h3>{service['name']}</h3>
              <p>{service['desc']}</p>
            </Container>
          )
        }): (
          <>
            <Container className={'service'} >
              <span className="icon">
                <Colors />
              </span>
              <h3>
              Visual Development
              </h3>
              <p>
              Creating compelling visual narratives through innovative design solutions.
              </p>
            </Container>
            <Container className={'service'} >
              <span className="icon">
                <Lightning />
              </span>
              <h3>
              Motion Design
              </h3>
              <p>
              Bringing stories to life through dynamic animation and visual effects.
              </p>
            </Container>
            <Container className={'service'} >
              <span className="icon">
                <FiMonitor />
              </span>
              <h3>
              3D Visualization
              </h3>
              <p>
              Crafting immersive 3D experiences and realistic product visualizations.
              </p>
            </Container>
            <Container className={'service'} >
              <span className="icon">
                <Light />
              </span>
              <h3>
              Creative Direction
              </h3>
              <p>
              Guiding projects from concept to completion with strategic vision.
              </p>
            </Container>
            <Container className={'service'} >
              <span className="icon">
                <Prise />
              </span>
              <h3>
              Brand Design
              </h3>
              <p>
              Developing distinctive brand identities that capture audience attention.
              </p>
            </Container>
            <Container className={'service'} >
              <span className="icon">
              <IoMdCode /> 
              </span>
              <h3>
              Interactive Design
              </h3>
              <p>
              Creating engaging user experiences across digital platforms.
              </p>
            </Container>
          </>
        )}
        
      </section>
    </div>
  )
}

export default About;