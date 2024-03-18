document.addEventListener('DOMContentLoaded', () => {
    const urlBase = 'https://api.dicebear.com/7.x/'

    //FACIL
    function polegares() {

        const seed_polegares = ['Ginger', 'Garfield', 'Baby', 'Mittens', 'Missy', 'Bella', 'Trouble', 'Lola']
        const meio_polegares = document.getElementById('li-bloco1')
            meio_polegares.innerHTML = ''

        seed_polegares.forEach(itens => {
            const img = document.createElement('img')
            img.src = `${urlBase}thumbs/png?seed=${itens}`
            img.style.height = '110px'
            img.style.width = '110px'
            img.style.margin = '0px 5px'
            img.style.borderRadius = '17px'
            img.style.boxShadow = '2px 2px 10px black'
            meio_polegares.appendChild(img)
            
        })
    }

    //MEDIO
    function identico() {

        const seed_identico = ['Fluffy', 'Misty', 'Mittens', 'Willow', 'Luna', 'Angel', 'Bella', 'Oreo']
        const meio_identico = document.getElementById('li-bloco2')
        meio_identico.innerHTML = ''

        seed_identico.forEach(itens => {
            const img = document.createElement('img')
            img.src = `${urlBase}identicon/png?seed=${itens}`
            img.style.height = '110px'
            img.style.width = '110px'
            img.style.margin = '0px 5px'
            img.style.borderRadius = '17px'
            img.style.boxShadow = '2px 2px 10px black'
            meio_identico.appendChild(img)
        })
    }

    //DIFICIL
    function formas() {

        const seed_formas = ['Cali', 'Annie', 'Casper', 'Bandit', 'Lilly', 'Bailey', 'Abby', 'Muffin']
        const meio_formas = document.getElementById('li-bloco3')
        meio_formas.innerHTML = ''

        seed_formas.forEach(itens => {
            const img = document.createElement('img')
            img.src = `${urlBase}shapes/png?seed=${itens}`
            img.style.height = '110px'
            img.style.width = '110px'
            img.style.margin = '0px 5px'
            img.style.borderRadius = '17px'
            img.style.boxShadow = '2px 2px 10px black'
            meio_formas.appendChild(img)
        })
    }
    polegares()
    identico()
    formas()
})