import {FaFacebook} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'

import styles from './index-module.css'

function Icones(){
    return(
    <div>
        <ul className='social_lista'>
            <li className='item'><FaFacebook/></li>
            <li className='item'><ImTwitter/></li>
            <li className='item'><BsGithub/></li>
        </ul>
    </div>
    )
}

export default Icones