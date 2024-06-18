import styles from './Cards.module.css'
import ButtonB from './ButtonB'

function Cards({img, title, tech, description, repo, site}){
    return(
        <div className={styles.card}>
            <a href={site}>
            <img src={img} alt='Error'/>
            </a>
            <section>
                <h3>{title}</h3>
                <p> <strong>Tecnologia(s):</strong> {tech} </p>
                <p> {description} </p>
                <ButtonB text='Acessar o repositório'link={repo}/>
            </section>
        </div>
    )
}

export default Cards