// CHANGE LANGUAGE

const headerImg = document.querySelector('.header-img')
const languages = document.querySelector('.languages')
const languageImg = document.querySelector('.language-img')

headerImg.addEventListener('click', e => {
    languages.classList.toggle('invisible')
})

languages.addEventListener('click', e => {
    let passSrc = ''
    passSrc = headerImg.src
    headerImg.src = languageImg.src

    const languageNow = String(languageImg.src)

    languageImg.src = passSrc

    console.log(languageNow, "languageNow")
    if(languageNow.includes('brazil')){
        document.querySelector('.language-text').innerHTML = 'English'
        
        document.querySelector('.header-list').children[0].innerHTML = 'Início'
        document.querySelector('.header-list').children[1].innerHTML = 'Sobre mim'
        document.querySelector('.header-list').children[2].innerHTML = 'Projetos'
        document.querySelector('.header-list').children[3].innerHTML = 'Habilidades'

        document.querySelector('.hero-list').children[0].innerHTML = 'Olá, eu sou'

        document.querySelector('.about-text').children[0].innerHTML = 'Sobre mim'
        document.querySelector('.about-text').children[1].innerHTML = 'Sou um jovem desenvolvedor brasileiro autodidata que ama tecnologia e que sonha trabalhar em uma empresa de tecnologia de primeiro mundo. Comecei minha jornada na programação em C aos 16 anos e depois mudei para o Front-End. Atualmente, estudo frameworks do JavaScript e futuramente pretendo ser um Full Stack. 😀'

        document.querySelector('.projects-title').innerHTML = 'Projetos'

        const projectText = document.querySelectorAll('.project-text')
        projectText[0].innerHTML = "Website de eCommerce responsivo. É o primeiro grande projeto em que eu testei as minhas habilidades com HTML, CSS e JavaScript."
        projectText[1].innerHTML = 'Jogo de digitalização rápida. Neste projeto, eu testei o meu potencial com JavaScript e criei o meu primeiro jogo sem utilizar a linguagem C.'
        projectText[2].innerHTML = '"Hey, Wanna Cook?" ("Ei, Quer Cozinhar?") é um divertido site de geração de receitas aleatórias criado por mim e que me permitiu praticar o consumo de API.'

        if(document.querySelector('.projects-button').innerHTML == "Show less"){
            document.querySelector('.projects-button').innerHTML = "Mostre menos"
        }else if(document.querySelector('.projects-button').innerHTML == "Show more"){
            document.querySelector('.projects-button').innerHTML = "Mostre mais"
        }

        document.querySelectorAll('.coming-soon').forEach(e => {
            e.innerHTML = "Em breve"
        })
        
        const skillsTexts = document.querySelector('.skills-text')
        skillsTexts.children[0].innerHTML = "Habilidades"
        skillsTexts.children[1].innerHTML = "Eu sou bastante comunicativo, aprendo rápido e consigo trabalhar bem em equipes. Meus projetos são rápidos, sem lagging, responsivos, fáceis de usar e dinâmicos. 😉"
        skillsTexts.children[2].innerHTML = "Eu falo três idiomas: Inglês (fluente), Português (nativo) e Espanhol (básico)."

        document.querySelector('.footer-email').innerHTML = "Contato: gabrielvera@hotmail.com.br"

        
    }else if(languageNow.includes('us')){
        document.querySelector('.language-text').innerHTML = 'Portuguese'
        document.querySelector('.header-list').children[0].innerHTML = 'Start'
        document.querySelector('.header-list').children[1].innerHTML = 'About me'
        document.querySelector('.header-list').children[2].innerHTML = 'Projects'
        document.querySelector('.header-list').children[3].innerHTML = 'Skills'

        document.querySelector('.hero-list').children[0].innerHTML = 'Hi, I am'

        document.querySelector('.about-text').children[0].innerHTML = 'About me'
        document.querySelector('.about-text').children[1].innerHTML = "I'm a self-taught young Brazilian developer who loves technology and aspires to work in a First World tech company. I started my coding journey in C at 16 and then moved to Front-End. Nowadays, I study JavaScript frameworks and in the future I pretend to be a Full Stack. 😀"

        document.querySelector('.projects-title').innerHTML = 'Projects'

        const projectText = document.querySelectorAll('.project-text')
        projectText[0].innerHTML = "Full responsive eCommerce Website. The first big project in which I tested my abilities with HTML, CSS and JS."
        projectText[1].innerHTML = 'A speed typing game. In this project I tested my potential with JavaScript and it is also the first game I created without C.'
        projectText[2].innerHTML = '"Hey Wanna Cook?" is a fun meal recipe generator website that made me practice my abilities with API consuming.'

        if(document.querySelector('.projects-button').innerHTML == "Mostre menos"){
            document.querySelector('.projects-button').innerHTML = "Show less"
        }else if(document.querySelector('.projects-button').innerHTML == "Mostre mais"){
            document.querySelector('.projects-button').innerHTML = "Show more"
        }

        document.querySelectorAll('.coming-soon').forEach(e => {
            e.innerHTML = "Coming soon"
        })

        const skillsTexts = document.querySelector('.skills-text')
        skillsTexts.children[0].innerHTML = "Skills"
        skillsTexts.children[1].innerHTML = "I am very communicative, fast learning and I can work well in a team. My projects are fast, lag free, responsive, easy to use and dynamic. 😉"
        skillsTexts.children[2].innerHTML = "I speak three languages: English (fluently), Portuguese (native) and Spanish (basic)."

        document.querySelector('.footer-email').innerHTML = "Contact: gabrielvera@hotmail.com.br"
        
    }

    languages.classList.add('invisible')
})


// SHOW MORE PROJECTS

const grid = document.querySelector('.projects-objects')
const projectsBtn = document.querySelector('.projects-button')
const projectsHide = document.querySelectorAll('.show-more')

grid.style.gridTemplateRows = "repeat(1, 1fr)"
projectsBtn.style.marginTop = "2rem"
projectsBtn.innerHTML = "Show more"

projectsBtn.addEventListener('click', e => {
    projectsHide.forEach(e => {
        e.classList.toggle('invisible')
        projectsBtn.innerHTML = "Show more"

        const languageNow = String(headerImg.src)
        if(languageNow.includes('brazil')){
            projectsBtn.innerHTML = "Mostre mais"
        }else if(languageNow.includes('us')){
            projectsBtn.innerHTML = "Show more"
        }

    })

    projectsHide.forEach(e => {
        if(!e.classList.contains('invisible')){
            grid.style.gridTemplateRows = "repeat(1, 1fr)"
            projectsBtn.innerHTML = "Show less"

            const languageNow = String(headerImg.src)

            if(languageNow.includes('brazil')){
                projectsBtn.innerHTML = "Mostre menos"
            }else if(languageNow.includes('us')){
                projectsBtn.innerHTML = "Show less"
            }
        }
    })
})

// HAMBURGUER MENU

const menu = document.querySelector('.menu-outline')
const header = document.querySelector('.header')
const headerList = document.querySelector('.header-list')
const menuOptions = Array.from(headerList.children)

menu.addEventListener('click', e => {
    console.log(menuOptions)
    header.style.width = 'auto'
    header.style.height = '100%'
    headerList.style.display = 'flex'
    headerList.style.flexDirection ='column'
    menu.style.display = 'none'
    
    window.addEventListener('click', e => {
        if((e.target == menu)){
        }else if(e.target == headerImg){
        }else{
            console.log("didnt click header", e)
            header.style.width = '100%'
            header.style.height = 'auto'
            headerList.style.display = 'none'
            headerList.style.flexDirection = 'row'
            menu.style.display = 'flex'
        }
    })
})

