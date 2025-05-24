import {useContext} from 'react';
import { ContentContext } from '../context/ContentContext';
import { FiPhone } from "react-icons/fi";
import { LuLinkedin, LuInstagram } from "react-icons/lu";
import { FaUpwork } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaPixiv } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import Contact from '../icons/Contact';
import '../styles/contact.css';

import Container from '../components/Container';

function ContactPage() {

  const {content} = useContext(ContentContext);


  return (
    <div className='page contact-page'>
      <h1>
        Let's <span>Connect</span>
      </h1>
      <br />
      <Container className={'contact-info'}>
        <h3>Contact Information</h3>
        <br />
        <div>
          <a href='mailto:info@omardesigner.art' target='_blank' className='info'>
            <span>
              <Contact />
            </span>
            <div>
              <span>Email</span>
              <span>{content && content['contact_info'] ? content['contact_info']['email'] : 'info@omardesigner.art'}</span>
            </div>
          </a>
          <a href='tel:+962792704673' target='_blank' className='info'>
            <span>
              <FiPhone />
            </span>
            <div>
              <span>Phone</span>
              <span>{content && content['contact_info'] ? content['contact_info']['phone'] : '+962 7 9270 4673'}</span>
            </div>
          </a>
          <div className='info'>
            <span>
              <IoTimeOutline />
            </span>
            <div>
              <span>Timezone</span>
              <span>{content && content['timezone'] ? content['contact_info']['email'] : 'Amman, Jordan (GMT+3)'}</span>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <br />
      <Container className='social'>
        <h3>Social Profiles</h3>
        <br />
        <div>
          {content && content['social_media'] ? content['social_media'].map(s => {
            return (
              <Container className={'profile'}>
                <a target='_blank' href="https://www.linkedin.com/in/omar-ayesh-1948ab255">
                  <span dangerouslySetInnerHTML={{ __html: s['icon'] }}>
                  </span>
                  <div>
                    <span>{s['name']}</span>
                    <span>{s['name_2']}</span>
                  </div>
                </a>
              </Container>
            )
          }): (
            <>
              <Container className='profile'>
                <a target='_blank' href="https://www.linkedin.com/in/omar-ayesh-1948ab255">
                  <span>
                    <LuLinkedin />
                  </span>
                  <div>
                    <span>LinkedIn</span>
                    <span>Professional Network</span>
                  </div>
                </a>
              </Container>  
              {/* <Container className='profile'>
                <a target='_blank' href="https://www.instagram.com/omarayesh02">
                  <span>
                    <FaUpwork />
                  </span>
                  <div>
                    <span>Instagram</span>
                    <span>Visual Portfolio</span>
                  </div>
                </a>
              </Container>   */}
              {/* <Container className='profile'>
                <a target='_blank' href="https://www.instagram.com/omarayesh02">
                  <span>
                    <RiTiktokFill />
                  </span>
                  <div>
                    <span>Instagram</span>
                    <span>Visual Portfolio</span>
                  </div>
                </a>
              </Container>   */}
              <Container className='profile'>
                <a target='_blank' href="https://www.instagram.com/omarayesh02">
                  <span>
                    <LuInstagram />
                  </span>
                  <div>
                    <span>Instagram</span>
                    <span>Visual Portfolio</span>
                  </div>
                </a>
              </Container>  
              {/* <Container className='profile'>
                <a target='_blank' href="https://www.instagram.com/omarayesh02">
                  <span>
                    <FaXTwitter />
                  </span>
                  <div>
                    <span>Instagram</span>
                    <span>Visual Portfolio</span>
                  </div>
                </a>
              </Container>  
              <Container className='profile'>
                <a target='_blank' href="https://www.instagram.com/omarayesh02">
                  <span>
                    <FaPixiv />
                  </span>
                  <div>
                    <span>Instagram</span>
                    <span>Visual Portfolio</span>
                  </div>
                </a>
              </Container> */}
            </>
          )}
            
        </div>  
      </Container>
      <br /><br />
      <Container className='contact-pref'>
        <h3>Contact Preferences</h3>
        <br />
        <p>
        The best way to reach me is via email. I typically respond within 24 hours during business days. For urgent matters, feel free to call during business hours.
        </p>
        <br />
        <Container >
          <h3>Current Location</h3>
          <div>
            <span>Amman, Jordan</span>
            <span>GMT+3 Time Zone</span>
          </div>
        </Container>
      </Container>
    </div>
  )
}

export default ContactPage