import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import Nav from 'react-bootstrap/Nav'


function Navbar(){
    return(
       <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>

            <ul>
                <li><a href='https://www.instagram.com/dv_alvez/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/davi-marinho-9896b9179/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/davimarinho01'><FaGithub size={30}/></a></li>
            </ul>
       </div>
    )
}

export default Navbar