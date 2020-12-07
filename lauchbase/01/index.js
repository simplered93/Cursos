
const alunosDaTurmaA = [
    {
        nome: 'Augusto',
        nota: 9.5
    },
    {
        nome: 'Ludovice',
        nota: 4.5
    },
    {
        nome: 'Machado',
        nota: 4.4
    },
    {
        nome: 'Silva',
        nota: 0
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Andrielly',
        nota: 10
    },
    {
        nome: 'Marcela',
        nota: 7
    },
    {
        nome: 'Santos',
        nota: 6.3
    },
    {
        nome: 'Pereira',
        nota: 3.8
    }
]

function calculaMedia(alunos) {
   return media = (alunos[0].nota + alunos[1].nota + alunos[2].nota + alunos[3].nota)/4
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    //Se a média for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns!!!`)
    } else {
        console.log(`A média da ${turma} foi menor que 5. Vamos estudar mais!!!!!`)
    }

}

enviaMensagem(media1, `Turma A`)
enviaMensagem(media2, `Turma B`)