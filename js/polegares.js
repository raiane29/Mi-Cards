const baralho = [
    {
        nome:'Ginger',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Ginger',
        number: '1'
    },
    {
        nome:'Garfield',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Garfield',
        number: '2'
    },
    {
        nome:'Baby',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Baby',
        number: '3'
    },
    {
        nome:'Mittens',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Mittens',
        number: '4'
    },
    {
        nome:'Missy',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Missy',
        number: '5'
    },
    {
        nome:'Bella',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Bella',
        number: '6'
    },
    {
        nome:'Trouble',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Trouble',
        number: '7'
    },
    {
        nome:'Lola',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Lola',
        number: '8'
    },
    {
        nome:'Ginger',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Ginger',
        number: '9'
    },
    {
        nome:'Garfield',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Garfield',
        number: '10'
    },
    {
        nome:'Baby',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Baby',
        number: '11'
    },
    {
        nome:'Mittens',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Mittens',
        number: '12'
    },
    {
        nome:'Missy',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Missy',
        number: '13'
    },
    {
        nome:'Bella',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Bella',
        number: '14'
    },
    {
        nome:'Trouble',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Trouble',
        number: '15'
    },
    {
        nome:'Lola',
        img:'https://api.dicebear.com/7.x/thumbs/png?seed=Lola',
        number: '16'
    }
]

baralho.sort(() => {
    return 0.5 - Math.random()
})

const grade = document.querySelector("#grade")
let escolhidas = []
const pontuacao = document.querySelector("#pontos")
let ponto = 0; 

function criarGrade() {
    for (let i = 0; i < baralho.length; i++) {
        let carta = document.createElement("img")
        carta.id = i;
        carta.style.height = '110px';
        carta.style.width = '110px';
        carta.style.margin = '8px 8px 8px 8px';
        carta.style.borderRadius = '10px';
        carta.style.border = '4px solid #090909';
        carta.style.boxShadow =  '0px 0px 5px rgba(0, 0, 0, 0.4';
        carta.name = baralho[i].nome
        carta.num = baralho[i].number
        carta.src = "../img/brancoo.jpg"
        carta.addEventListener("click", escolherCarta)
        grade.appendChild(carta)
    }
}

let clicks = 0;

function escolherCarta() {
    if (clicks === 2) {
        return;
    }

    let carta = this;
    carta.src = baralho[carta.id].img
    escolhidas.push(carta)

    clicks++;

    if (escolhidas.length === 2) {
        setTimeout(() => {
            let carta1 = escolhidas[0]
            let carta2 = escolhidas[1]

            if (carta1.num != carta2.num) {
                if (carta1.name === carta2.name) {
                    carta1.src = "../img/pastel-azul.png"
                    carta2.src = "../img/pastel-azul.png"
                    carta1.removeEventListener("click", escolherCarta)
                    carta2.removeEventListener("click", escolherCarta)
                    ponto++;
                    pontuacao.innerHTML = ponto
                    acerto.classList.add("ace")
                    setTimeout(() => {
                        acerto.classList.remove("ace")
                    }, 3000)
                } else {
                    carta1.src = "../img/brancoo.jpg"
                    carta2.src = "../img/brancoo.jpg"
                }
                if (ponto == baralho.length / 2) {
                    alert("Boa!")
                    grade.innerHTML = ""
                    criarGrade()
                    location.reload()
                }
            } else if (carta1.num === carta2.num) {
                carta1.src = "../img/brancoo.jpg"
                alert("Você apertou na mesma carta")
                location.reload()
            }

            clicks = 0;
            escolhidas = []
        }, 500)
    }
}
criarGrade()
