const baralho = [
    {
        nome:'Cali',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Cali',
        number:1
    },
    {
        nome:'Annie',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Annie',
        number:2},
    {
        nome:'Casper',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Casper',
        number:3},
    {
        nome:'Bandit',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Bandit',
        number:4},
    {
        nome:'Lilly',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Lilly'
        ,
        number:5
    },
    {
        nome:'Bailey',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Bailey'
        ,
        number:6
    },
    {
        nome:'Abby',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Abby',
        number:7
    },
    {
        nome:'Muffin',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Muffin'
        ,
        number:8    },
    {
        nome:'Cali',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Cali'
        ,
        number:9},
    {
        nome:'Annie',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Annie',
        number:10
    },
    {
        nome:'Casper',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Casper',
        number:11
    },
    {
        nome:'Bandit',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Bandit',
        number:12
    },
    {
        nome:'Lilly',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Lilly',
        number:13
    },
    {
        nome:'Bailey',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Bailey',
        number:14
    },
    {
        nome:'Abby',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Abby',
        number:15
    },
    {
        nome:'Muffin',
        img:'https://api.dicebear.com/7.x/shapes/png?seed=Muffin',
        number:16
    },
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