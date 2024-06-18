import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'


function Presentation(){
    return(
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Davi Marinho!</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras. Como<br/> 
                Desenvolvedor Front-End, eu tenho o compromisso de desenvolver a<br/> 
                melhor experiência para os usuários, criando interfaces intuitivas e<br/>
                trazer resultados excepcionais para os negócios.
            </p>
            <ButtonA text='Conecte-se comigo!' link='https://github.com/davimarinho01'/>
        </div>
    )
}

export default Presentation