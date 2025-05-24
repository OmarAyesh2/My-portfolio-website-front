import {useState, useEffect, createContext} from 'react';
import axios from 'axios'

export const ContentContext = createContext({});
const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
    baseURL: baseURL+'/api/'
})



export const ContentContextProvider = ({children}) => {
    const [content, setContent] = useState();

    const ContextProivder = ContentContext.Provider;

    const handleGetContent = async () => {
        try {
            const response = await api.get('all-content/');
            
            if (response.status === 200) {
                const data = await response.data;

                setContent(data);
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleGetContent();

    }, [])

    useEffect(() => {
        if (content && document) {
            console.log(content)
            document.querySelector('#root').style.cssText = `background-image: url(${baseURL+content.profile.background}); `
        }
    }, [content])

    return (
        <ContextProivder value={{content, setContent}}>
            {children}
        </ContextProivder>
    )
}
