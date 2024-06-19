import ButtonB from '../elements/ButtonB'
import Cards from '../elements/Cards'
import styles from './Projects.module.css'
import lpdnc from '../../image/projects/lpdnc.svg'
import serralves from '../../image/projects/serralves.svg'
import costs from '../../image/projects/Costs.svg'
import Gerador from '../../image/projects/Gerador.svg'
import portfolio from '../../image/projects/portfolio.svg'



function Projects(){
    return(
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Cards 
                img={lpdnc} 
                title='Landing Page - DNC' 
                tech= 'HTML, CSS e JS'
                description = 'Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia'
                repo= 'https://github.com/davimarinho01/projeto-landing-page'
                site= 'https://fastidious-raindrop-5de6d1.netlify.app/'
            />
            <Cards
                img={serralves} 
                title='Website - Serralves Stúdios' 
                tech= 'HTML e CSS'
                description = 'Desenvolvimento de uma Landing Page para a divulgação dos Stúdios'
                repo= 'https://github.com/davimarinho01/Serralves'
                site= 'https://serralvesstudios.netlify.app/'
            />
            <Cards
                img={costs} 
                title='Sistema de Gerenciamento de Projetos' 
                tech= 'HTML, CSS, JS e REACT'
                description = 'Desenvolvimento de um sistemas de controle de projeto para uso pessoal ou empresarial (EM ANDAMENTO, SITE INDISPONÍVEL PARA VISUALIZAÇAO)'
                repo= 'https://github.com/davimarinho01/Cost'
                site= ''
            />
            <Cards
                img={Gerador} 
                title='Gerador de Senhas' 
                tech= 'HTML, CSS e JS'
                description = 'Desenvolvimento de um Gerador de senha online'
                repo= 'https://github.com/davimarinho01/Password-Generator'
                site= 'https://gerar-uma-senha.netlify.app/'
            />
            <Cards
                img={portfolio} 
                title='Portfólio Online' 
                tech= 'HTML, CSS, JS e REACT'
                description = 'Desenvolvimento do Portfólio Online em React'
                repo= 'https://github.com/davimarinho01/Portifolio-Web'
                site= 'https://davimarinho.vercel.app/'
            />
            <ButtonB text='Acesse meus repositórios' link='https://github.com/davimarinho01?tab=repositories'/>
        </div>
    )
}

export default Projects