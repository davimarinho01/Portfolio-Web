import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/dv_alvez/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/davi-marinho-9896b9179/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/davimarinho01'><FaGithub size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Footer