import { Agenda } from 'src/components/models';

const agendamentos: Array<Agenda> = [
    {
        id: 1,
        idExame: 2,
        local: 'Hospital Legal - SP',
        dataAgendamento: '07/10/2024 12:30',
        notas: 'Preciso fazer uma ressonância',
        realizado: true,
        exame: {
            id: 2,
            imagem: 'https://img.example.com/imagem2.jpg',
            nome: 'Ressonância Magnética',
            tempo_de_execucao: '30 minutos a 1 hora',
            resumo: 'Imagem detalhada dos tecidos internos usando campos magnéticos',
            descricao:
                'A ressonância magnética é uma técnica de imagem que utiliza campos magnéticos e ondas de rádio para criar imagens detalhadas dos tecidos internos do corpo. É frequentemente utilizada para diagnosticar uma variedade de condições médicas, incluindo lesões musculoesqueléticas, doenças neurológicas e doenças cardíacas.',
            principio:
                'O princípio da ressonância magnética baseia-se na interação dos núcleos de hidrogênio dos tecidos do corpo com um campo magnético forte. Os sinais emitidos pelos núcleos de hidrogênio são capturados por antenas e processados para formar imagens detalhadas dos tecidos internos.',
            aplicacoes:
                'A ressonância magnética é utilizada em uma variedade de áreas da medicina, incluindo neurologia, ortopedia, oncologia, cardiologia e radiologia. É utilizada para diagnosticar condições médicas, planejar tratamentos, avaliar a resposta ao tratamento e monitorar a progressão da doença.',
            preparacao:
                'A preparação para uma ressonância magnética pode variar dependendo da área a ser examinada e das instruções do médico. Em geral, o paciente pode precisar remover objetos metálicos do corpo, como joias, e informar sobre qualquer implante médico. Em alguns casos, pode ser necessário jejum.',
        },
    },
    {
        id: 2,
        idExame: 4,
        local: 'Hospital das Clinicas - SP',
        dataAgendamento: '05/05/2024 07:45',
        notas: 'Tenho um ultrassom para fazer',
        realizado: false,
        exame: {
            id: 4,
            imagem:
                'https://img.freepik.com/fotos-gratis/medico-realizando-ultra-sonografia-para-sua-paciente-gravida_7502-5429.jpg?t=st=1715450081~exp=1715453681~hmac=912c1968662bb32ad7d5a15f7caab9ca1bf0dda9fbb6ca2ba32cf0e81e0e8f36&w=1380',
            nome: 'Ultrassom',
            tempo_de_execucao: '15 a 30 minutos',
            resumo: 'Imagem dos órgãos internos usando ondas sonoras',
            descricao:
                'O ultrassom é um exame de imagem que utiliza ondas sonoras de alta frequência para criar imagens dos órgãos internos, como o fígado, os rins e o útero. É frequentemente usado para diagnosticar problemas abdominais, avaliar a gravidez e monitorar o desenvolvimento fetal.',
            principio:
                'O princípio do ultrassom baseia-se na emissão de ondas sonoras que penetram nos tecidos do corpo e retornam, formando uma imagem em tempo real. O transdutor emite e recebe as ondas sonoras, que são convertidas em imagens visualizadas em um monitor.',
            aplicacoes:
                'As aplicações do ultrassom incluem diagnóstico de doenças abdominais, avaliação da saúde fetal durante a gravidez, identificação de anormalidades nos órgãos internos, orientação de procedimentos médicos, entre outros.',
            preparacao:
                'A preparação para o ultrassom geralmente envolve a ingestão de água antes do exame, dependendo da área a ser examinada. Em alguns casos, pode ser necessário jejum. O paciente deve seguir as instruções do médico para garantir resultados precisos.',
        },
    },
]
export default agendamentos;