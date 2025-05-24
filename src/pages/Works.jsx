import {useState, useEffect} from 'react';
import {createPortal} from 'react-dom';
import axios from 'axios';
import { FaPlay } from "react-icons/fa";
import '../styles/works.css';

import MediaPlayer from '../components/MediaPlayer';

const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: baseURL+'/api/'
})

function Works() {

  const [works, setWorks] = useState();
  const [categories, setCategories] = useState();

  const [activeWorks, setActiveWorks] = useState();

  const handleGetCategories = async () => {
    try {
      const response = await api.get('major-categories/');

      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
        setCategories(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleGetAllWorks = async () => {
    try {
      const response = await api.get('media-by-category/');

      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
        setWorks(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleGetWorksByCategory = async (category_id) => {
    try {
      const response = await api.get(`media-filter/${category_id}/`);

      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
        setWorks(data['minor_categories']);
      }
    } catch (error) {
      console.log(error);
    }
  }
  Object.keys({hello: 'world'}).map
  

  useEffect(() => {
    handleGetCategories();
    handleGetAllWorks();
  }, [])

  useEffect(() => {
    if (categories) {
      const btns = document.querySelectorAll('.category');
      btns.forEach((btn) => {
        btn.addEventListener('click', () => {
          btns.forEach((btn) => {
            btn.classList.remove('selected');
          });
          btn.classList.add('selected');
        });
      });
    }
  }, [categories])

  return (
    <div className='works-page'>
      <div className="header">
        <button onClick={handleGetAllWorks} className='category selected'>All Works</button>
        {categories && categories.map((category) => {
          return (
            <button onClick={() => {
              handleGetWorksByCategory(category.id)
            }} key={category.id} className='category'>{category.name}</button>
          )
        })}
      </div>
      <div className="container">
        {!works ? (
          <div>Loading...</div>
        ) : typeof works === 'object' && works !== null ? Object.keys(works).map(key => {
          return (
            <div onClick={() => {
              setActiveWorks(works[key]['media']);
              document.querySelector('main').classList.add('no-scroll')
            }} key={key} className='category-container'>
              <img className='media' src={baseURL+works[key].thumbnail} />
              <h2>{key}</h2>
            </div>
          )
        }) : (
          <h2>No Data</h2>
        )}
      </div>
      {activeWorks && activeWorks.length > 0 && createPortal(
        <MediaPlayer activeWorks={activeWorks} setActiveWorks={setActiveWorks} />,
        document.querySelector('main')
      )}
    </div>
  )
}

export default Works;
