export type challengeProps = Array<{ resume: string, questions: Array<{ title: string, alternatives: Array<string>, correct: number }> }>

export const challengesData: challengeProps = [
    { resume: `Nos últimos dias observando as estrelas, se fascinou com seus mistérios e deu início a uma jornada rumo á elas, porém, como sabe, 
            se aventurar pelo cosmos não é tão simples quanto gostaria que fosse, para chegar no seu objetivo é necessário vencer 3 desafios, 
            está preparado ?`,
        questions: [
            {
                title: "Qual cientista observou o planeta marte pela primeira vez ? em que ano foi feita esta descoberta ?",
                alternatives: ["Galileu Galilei, em 1610", "Isaac Newton, em 1680", "Johannes Kepler, em 1595, Nicolau Copérnico, em 1506"],
                correct: 0
            },
            {
                title: "Em 1631, o astrônomo francês Pierre Gassendi observou a movimentação de Mercúrio em torno do Sol, porém, contudo, qual cientista através de seus estudos comprovou que o planeta traça uma órbita ao redor do Sol ?",
                alternatives: ["Galileu Galilei", "Giovanni Zupus", "Christiaan Huygens"],
                correct: 1
            },
            {
                title: "Em 1610, Júpiter foi observado a primeira vez por Galileu Galilei, também foi possível a identificação de quatro de seus 79 satélites, sendo eles.",
                alternatives: ["Temisto, Lisiteia, Iocasta e Cale", "Pasite, Coré, Euquelade e Calicore", "Io, Europa, Ganimedes e Calisto"],
                correct: 2
            },
            {
                title: "Um dia em Urano tem duração de quantas horas terrestres ?",
                alternatives: ["10 horas terrestres", "7 horas terrestres", "17 horas terrestres"],
                correct: 2
            },
            {
                title: "Em qual ano foi feita a primera foto de um buraco negro ?",
                alternatives: ["2020", "2019", "2014"],
                correct: 1
            }
        ]
    },
    { resume: `Um passo foi dado, e você agora está dando seus primeiros passos explorando o cosmos, ainda há muitas dúvidas, e tudo ainda é 
        muito novo, entretanto, sua curiosidade fez criar um robô explorador que recolhe informações de outros mundos, muitas informações foram
        recolhidas, e precisam ser processadas, está preparado ?`,
        questions: [
            {
                title: "Como sabe o planeta Marte é um dos 4 planetas rochosos do sistema solar e sua aparência é avermelhada, devido a:",
                alternatives: ["Composição das suas rochas, que apresentam óxidos de ferro", "A sua temperatura média que é de -60 ºC.", "Principal composição da sua atmosfera que é o dióxido de carbono (CO2)"],
                correct: 0
            },
            {
                title: `Mercúrio é o primeiro planeta em relação ao sol do sistema solar, e o menor também, devido a isso, possui altas temperaturas e
                um movimento de translação bastante curto que é de aproximadamente 88 dias, quais são o(s) principal(is) material(is) que é formado o 
                planeta ?`,
                alternatives: ["86% de hidrogênio e 14% de hélio", "97% dióxido de carbono", "70% de material metálico e 30% de silicatos"],
                correct: 2
            },
            {
                title: `O planeta Vênus, o segundo planeta em relação ao sol, e o mais próximo à terra, é o planeta mais quente mesmo não sendo o mais
                próximo ao sol, com sua temperatura beirando aos 482 ºC na superfície. O planeta possui picos, sendo o mais alto deles: `,
                alternatives: ["Monte Olimpo", "Maxwell Montes", "Aphrodite Terra"],
                correct: 1
            },
            {
                title: `Saturno é o sexto planeta a partir do Sol, e o segundo maior do sistema solar, possui 53 luas conhecidas e 9 em pesquisa. Algumas des
                tas luas são conhecidas por possuírem um ecosistema propício à vida, e a única lua do sistema solar que possui atmosfera, sendo ela:`,
                alternatives: ["Encélado", "Titã", "Jápeto"],
                correct: 1
            },
            {
                title: `O planeta Terra, pelo que sabemos até agora, é o único que abriga vida em todo o cosmos, e a sua única lua é a maior do sistema solar
                proporcial ao tamanho do planeta. Sendo ela também o único corpo celeste que o Homem pisou além da Terra. Sua superfície é bastante
                irregular cheia de crateras, sendo a maior delas: `,
                alternatives: ["Amundsen", "Apollo", "Tycho"],
                correct: 2
            }
        ],
    },
    {
        resume: `Muito conhecimento foi obtido no desafio passado, você agora está pronto para desfrutar e estudar o que há de mais complexo
        no cosmos: galáxias, buracos negros, entre outros. No seu desafio final, irá tentar dominar o cosmos e compreendê-lo completamente, está
        preparado ?`,
        questions: [
            {
                title: `Dentre as galáxias catalogadas e estudadas, existe uma em nossa vizinhança cósmica que possui um trajeto de encontro ao nosso 
                sendo o encontro em 4 bilhões de anos, essa galáxia é conhecida como: `,
                alternatives: ["Galáxia Olho Negro", "Galáxia de Andrômeda", "Galáxia de Bode"],
                correct: 1
            },
            {
                title: `Os buracos negros são grandes estruturas presentes no cosmos caracterizados pela sua grande força gravitacional, cujo nem a luz
                que possui a velocidade mais rápida da natureza 299 792 458 m/s consegue escapar, os principais tipos de buracos negros são:`,
                alternatives: ["Buraco negro estelar e buraco negro supermassivo", "Buraco negro estelar e buraco negro planetário", "Buraco negro lunar e buraco negro sagitário"],
                correct: 0
            },
            {
                title: `Os quasares são nada menos que os mais distantes, mais brilhantes e mais misteriosos astros do Universo, o nome “quasar” é uma 
                abreviação de “fonte de rádio quase estelar” em inglês. Podemos defini-lo como:`,
                alternatives: ["Um buraco negro supermassivo, com massa variando de milhões até bilhões de massas solares, cercado por um disco de acreção", "Um buraco negro estelar em formação", "Um buraco negro estelar colidindo com um buraco negro supermassivo"],
                correct: 0
            },
            {
                title: `As estrelas de nêutrons são as menores e mais densas estrelas conhecidas, podendo ter a massa cerca de duas vezes a do Sol.
                Podemos definir sua origem:`,
                alternatives: ["Através do resultado final entre a colisão de 2 buracos negros supermassivos", "Em resumo, através de supernovas, processo que ocorre quando uma estrela consome todo o seu combustível", "Através da colisão entre duas estrelas cuja a massa ultrapasse os 10 sóis"],
                correct: 1
            },
            {
                title: "Os buracos negros são compostos por 3 elementos principais, sendo eles: ",
                alternatives: ["Singularidade, horizonte de eventos e radiação hawking", "Núcleo, manto e crosta", "Singularidade, disco de acreção e horizonte de eventos"],
                correct: 2
            }
        ]
    }
];