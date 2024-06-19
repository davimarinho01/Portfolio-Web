import styles from './Skills.module.css'
import ucp from '../../image/formations/ucp.png'
import dnc from '../../image/formations/dnc.png'
import estacio from '../../image/formations/estacio.svg'
import samurai from '../../image/formations/samurai.svg'

function Formations(){
    return(
        <div className={styles.skill} id="Skills">
            <h1>Formações</h1>
            <p>Conheça um pouco da minha carreira acadêmica!</p>
            <div className={styles.formations}>
                <a href='https://ucp.br/engenharia-de-computacao/'><img src={ucp} alt='UCP'/></a>
                <a href='https://estacio.br/cursos/graduacao/analise-e-desenvolvimento-de-sistemas'><img src={estacio} alt='Estácio'/></a>
                <a href='https://www.escoladnc.com.br/profissoes-tecnologia/engenheiro-de-software'><img src={dnc} alt='DNC'/></a>
                <a href='https://st.devsamurai.com.br/0cqlvn/index.html'><img src={samurai} alt='DevSamurai'/></a>
            </div>
        </div>
    )
}

export default Formations