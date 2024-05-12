<template>
  <q-page class="row items-center justify-evenly">
    <div class="col-lg-8 col-md-12">
      <ListaExamesComponent title="Lista de Exames" :exames="listaExames" />
    </div>
  </q-page>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { Exame } from 'components/models';
import ListaExamesComponent from 'components/ListaExamesComponent.vue';

const listaExames = ref<Exame[]>([
  {
    id: 1,
    imagem: 'https://img.freepik.com/fotos-gratis/medicos-se-preparando-para-uma-operacao_53876-139517.jpg?t=st=1715457274~exp=1715460874~hmac=8720a0f136469c45a9c4116b50b35262197d8c2c5a47208f7a5e158590d8c4e0&w=826',
    exame: 'Colonoscopia',
    tempo_de_execucao: '30 minutos a 1 hora',
    resumo: 'Exame para visualizar o cólon e identificar problemas',
    descricao:
      'A colonoscopia é um exame endoscópico que permite ao médico visualizar o interior do cólon (intestino grosso) e identificar anormalidades, como pólipos, inflamação ou câncer. É frequentemente utilizado para rastreamento de câncer colorretal e diagnóstico de doenças gastrointestinais.',
    principio:
      'Durante uma colonoscopia, um colonoscópio flexível é inserido através do ânus e avançado pelo cólon. O colonoscópio possui uma pequena câmera na ponta que transmite imagens para um monitor, permitindo ao médico examinar o revestimento interno do cólon.',
    aplicacoes:
      'A colonoscopia é utilizada para rastreamento de câncer colorretal em pacientes assintomáticos, diagnóstico de doenças inflamatórias intestinais, detecção de pólipos e câncer no cólon, avaliação de sangramento retal, entre outras indicações clínicas.',
    preparacao:
      'A preparação para a colonoscopia envolve esvaziamento completo dos intestinos por meio de dieta específica, uso de laxantes e/ou enemas. O paciente deve seguir rigorosamente as instruções fornecidas pelo médico para garantir uma preparação adequada e resultados precisos.',
  },
  {
    id: 2,
    imagem: 'https://img.freepik.com/fotos-gratis/medico-preparando-o-paciente-para-tomografia-computadorizada_23-2149367401.jpg?t=st=1715456674~exp=1715460274~hmac=6faccb7c6b60fe1eb5073084ea30b6c709fd7298e5920a46cf8abbef646f4f3e&w=826',
    exame: 'Ressonância Magnética',
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
  {
    id: 3,
    imagem: 'https://img.freepik.com/fotos-gratis/radiologista-masculino-analisando-os-resultados-da-ressonancia-magnetica-de-um-paciente-no-monitor-do-computador-na-sala-de-controle_637285-5158.jpg?t=st=1715456742~exp=1715460342~hmac=8d85d8b8afaf3c9fede127e72208661fec38b9d3c6c79871c593ca12ac434e3d&w=826',
    exame: 'Tomografia Computadorizada',
    tempo_de_execucao: '15 a 30 minutos',
    resumo: 'Imagens precisas dos tecidos corporais com raios-X',
    descricao:
      'A tomografia computadorizada (TC) é um exame de imagem que utiliza raios-X e computadores para criar imagens detalhadas dos órgãos internos, ossos, vasos sanguíneos e tecidos moles. É frequentemente utilizado para diagnosticar uma variedade de condições médicas, incluindo lesões traumáticas, doenças pulmonares e câncer.',
    principio:
      'Durante uma tomografia computadorizada, o paciente é colocado em uma mesa deslizante que se move para dentro de um scanner de raios-X circular. O scanner gira em torno do corpo, emitindo feixes de raios-X que são capturados por detectores e processados por um computador para formar imagens transversais detalhadas.',
    aplicacoes:
      'A tomografia computadorizada é utilizada em diversas especialidades médicas, incluindo radiologia, oncologia, ortopedia, neurologia e emergência. É utilizada para diagnosticar lesões traumáticas, doenças pulmonares, câncer, AVC, aneurismas, entre outras condições.',
    preparacao:
      'A preparação para uma tomografia computadorizada pode variar dependendo da área a ser examinada e das instruções do médico. Em geral, o paciente pode precisar evitar comer ou beber por algumas horas antes do exame e remover objetos metálicos do corpo, como joias e piercings.',
  },
  {
    id: 4,
    imagem:
      'https://img.freepik.com/fotos-gratis/medico-realizando-ultra-sonografia-para-sua-paciente-gravida_7502-5429.jpg?t=st=1715450081~exp=1715453681~hmac=912c1968662bb32ad7d5a15f7caab9ca1bf0dda9fbb6ca2ba32cf0e81e0e8f36&w=1380',
    exame: 'Ultrassom',
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
  {
    id: 5,
    imagem: 'https://img.freepik.com/fotos-gratis/estetoscopio_23-2147822607.jpg?t=st=1715456875~exp=1715460475~hmac=7a0bf6d817b0d127e6f49297485ffc4341b7ea90ee3a6950f337636a99c8be88&w=826',
    exame: 'Eletrocardiograma (ECG)',
    tempo_de_execucao: '5 a 10 minutos',
    resumo: 'Registro da atividade elétrica do coração',
    descricao:
      'O eletrocardiograma (ECG) é um exame que registra a atividade elétrica do coração ao longo do tempo. É frequentemente utilizado para diagnosticar condições cardíacas, como arritmias, doenças coronárias, infarto do miocárdio e distúrbios do ritmo cardíaco.',
    principio:
      'Durante um eletrocardiograma, eletrodos são colocados na pele do paciente em pontos específicos do corpo, como os membros e o tórax. Esses eletrodos registram a atividade elétrica do coração, que é amplificada e registrada em um gráfico.',
    aplicacoes:
      'O eletrocardiograma é usado para diagnosticar e monitorar uma variedade de condições cardíacas, incluindo arritmias, infarto do miocárdio, insuficiência cardíaca, distúrbios do ritmo cardíaco, entre outras. É um exame importante na avaliação de pacientes com sintomas cardíacos.',
    preparacao:
      'A preparação para um eletrocardiograma geralmente não é necessária. O paciente pode ser solicitado a remover roupas que cobrem as áreas onde os eletrodos serão colocados. Durante o exame, é importante permanecer quieto e relaxado para garantir a precisão dos resultados.',
  },
  {
    id: 6,
    imagem: 'https://img.freepik.com/fotos-gratis/pesquisador-medico-usando-laptop-enquanto-mede-a-resistencia-do-esportista-usando-sensores-corporais-eletrodos-e-mascara-para-medir-o-ritmo-cardiaco_482257-2070.jpg?t=st=1715456920~exp=1715460520~hmac=7db120d47b0cc2684d2f77cd8b6cddc6d3789e7680302259be3ef68ba56be58b&w=900',
    exame: 'Teste Ergométrico (Esteira)',
    tempo_de_execucao: '15 a 30 minutos',
    resumo: 'Avaliação da função cardíaca durante o exercício',
    descricao:
      'O teste ergométrico, também conhecido como teste de esforço ou teste de esteira, é um exame utilizado para avaliar a resposta do coração ao esforço físico. É frequentemente realizado em esteiras ergométricas ou bicicletas estacionárias, monitorando a atividade cardíaca enquanto o paciente se exercita.',
    principio:
      'Durante o teste ergométrico, o paciente é monitorado continuamente enquanto realiza exercícios físicos gradualmente intensificados. Os sinais vitais, incluindo a frequência cardíaca, a pressão arterial e a atividade elétrica do coração, são registrados e analisados para detectar anormalidades.',
    aplicacoes:
      'O teste ergométrico é usado para diagnosticar doenças cardíacas, avaliar a capacidade de exercício, determinar o risco de complicações cardiovasculares durante o exercício, monitorar a eficácia do tratamento para doenças cardíacas, entre outras indicações clínicas.',
    preparacao:
      'A preparação para um teste ergométrico pode incluir restrições alimentares e medicamentosas antes do exame, conforme orientação médica. O paciente deve usar roupas confortáveis e sapatos adequados para o exercício. Durante o teste, é importante comunicar qualquer sintoma incomum ao médico ou técnico.',
  },
  {
    id: 7,
    imagem: 'https://img.freepik.com/fotos-gratis/medico-organizando-o-dispositivo-de-digitalizacao-na-cabeca-de-uma-paciente-do-sexo-feminino_482257-31612.jpg?t=st=1715456960~exp=1715460560~hmac=74d88888145a6acbe07d4d0f6040884fb54d2ddcf49dfa630b4bd97862c6805c&w=826',
    exame: 'Eletroencefalograma (EEG)',
    tempo_de_execucao: '30 a 60 minutos',
    resumo: 'Registro da atividade elétrica do cérebro',
    descricao:
      'O eletroencefalograma (EEG) é um exame que registra a atividade elétrica do cérebro por meio de eletrodos colocados no couro cabeludo. É frequentemente utilizado para diagnosticar distúrbios neurológicos, como epilepsia, encefalopatias, distúrbios do sono e lesões cerebrais.',
    principio:
      'Durante um eletroencefalograma, os eletrodos são colocados no couro cabeludo do paciente e conectados a um equipamento de registro. Os sinais elétricos gerados pelo cérebro são capturados pelos eletrodos e registrados em um gráfico, que pode revelar padrões anormais de atividade cerebral.',
    aplicacoes:
      'O eletroencefalograma é utilizado na avaliação de distúrbios neurológicos, como epilepsia, encefalopatias, distúrbios do sono, lesões cerebrais, coma e avaliação de morte encefálica. É uma ferramenta importante para diagnóstico, tratamento e monitoramento de condições neurológicas.',
    preparacao:
      'A preparação para um eletroencefalograma geralmente não é necessária. O paciente pode ser solicitado a lavar o cabelo antes do exame para remover óleos e sujeira que possam interferir com a adesão dos eletrodos. Durante o exame, é importante permanecer relaxado e seguir as instruções do técnico.',
  },
  {
    id: 8,
    imagem: 'https://img.freepik.com/fotos-gratis/perto-do-monitor-de-frequencia-cardiaca-na-enfermaria-de-hospital-vazia-ninguem-na-sala-de-terapia-intensiva-com-equipamento-medico-leito-tubo-de-oxigenio-e-cadeira-de-rodas-para-recuperacao-instrumentos-de-saude_482257-27466.jpg?t=st=1715457035~exp=1715460635~hmac=de0bd3702a00a95c99d57c8fbef586fbc5436ecdb4d87db2a6ac09d3ada56cf1&w=360',
    exame: 'Ecocardiograma',
    tempo_de_execucao: '30 a 60 minutos',
    resumo: 'Imagem do coração e vasos sanguíneos usando ultrassom',
    descricao:
      'O ecocardiograma é um exame de imagem que utiliza ultrassom para criar imagens detalhadas do coração e dos vasos sanguíneos próximos. É frequentemente utilizado para diagnosticar doenças cardíacas, avaliar a função cardíaca e monitorar problemas cardíacos ao longo do tempo.',
    principio:
      'Durante um ecocardiograma, um transdutor de ultrassom é colocado na pele do paciente no peito, próximo ao coração. O transdutor emite ondas sonoras de alta frequência que penetram no corpo e são refletidas pelos tecidos cardíacos, criando imagens em tempo real.',
    aplicacoes:
      'O ecocardiograma é utilizado na avaliação de uma variedade de condições cardíacas, incluindo doenças das válvulas cardíacas, insuficiência cardíaca, doença coronária, cardiomiopatia, defeitos congênitos do coração, entre outras. É uma ferramenta importante na cardiologia.',
    preparacao:
      'A preparação para um ecocardiograma geralmente não é necessária. O paciente pode ser solicitado a remover roupas que cubram a área do peito e a deitar-se em uma mesa de exame. Durante o exame, é importante permanecer quieto e seguir as instruções do técnico.',
  },
  {
    id: 9,
    imagem: 'https://img.freepik.com/fotos-gratis/equipe-de-cirurgioes-realizando-operacao-no-teatro-de-operacao_107420-74195.jpg?t=st=1715457128~exp=1715460728~hmac=a4110a8cd672c6f8af776bc3891d6e00734ce6fa6603a586cbe5eb3e497c45b2&w=826',
    exame: 'Endoscopia Digestiva',
    tempo_de_execucao: '15 a 30 minutos',
    resumo: 'Visualização do trato digestivo superior usando um endoscópio',
    descricao:
      'A endoscopia digestiva é um exame endoscópico que permite ao médico visualizar o interior do trato digestivo superior, incluindo o esôfago, o estômago e o duodeno. É frequentemente utilizado para diagnosticar doenças gastrointestinais e realizar procedimentos terapêuticos.',
    principio:
      'Durante uma endoscopia digestiva, um endoscópio flexível é inserido pela boca do paciente e avançado através do esôfago até o estômago e o duodeno. O endoscópio possui uma câmera na ponta que transmite imagens para um monitor, permitindo ao médico examinar o revestimento interno do trato digestivo.',
    aplicacoes:
      'A endoscopia digestiva é utilizada para diagnosticar uma variedade de condições gastrointestinais, incluindo úlceras, refluxo gastroesofágico, câncer, doença celíaca, sangramento gastrointestinal, entre outras. Também pode ser utilizada para realizar biópsias, polipectomias e tratamentos de hemorragias.',
    preparacao:
      'A preparação para uma endoscopia digestiva pode envolver jejum por algumas horas antes do exame e a interrupção de certos medicamentos, conforme orientação médica. O paciente pode receber sedação durante o procedimento para maior conforto. É importante seguir as instruções do médico.',
  },
  {
    id: 10,
    imagem: 'https://img.freepik.com/fotos-gratis/medico-de-vista-lateral-verificando-a-radiografia_23-2149601721.jpg?t=st=1715457179~exp=1715460779~hmac=65867fa42074b39ebdb0e353a80b06487caa466b837b716b7164903559631751&w=826',
    exame: 'Radiografia de Tórax',
    tempo_de_execucao: '5 a 10 minutos',
    resumo:
      'Imagem do tórax usando raios-X para diagnosticar problemas pulmonares',
    descricao:
      'A radiografia de tórax é um exame de imagem que utiliza raios-X para criar imagens do tórax, incluindo os pulmões, o coração, as costelas e a coluna vertebral. É frequentemente utilizado para diagnosticar problemas pulmonares, cardíacos e musculoesqueléticos.',
    principio:
      'Durante uma radiografia de tórax, o paciente é posicionado em frente a um painel de raios-X, e uma imagem é capturada pela exposição aos raios-X. Os tecidos densos, como ossos e órgãos, aparecem brancos na imagem, enquanto os tecidos menos densos, como o ar nos pulmões, aparecem escuros.',
    aplicacoes:
      'A radiografia de tórax é utilizada para diagnosticar uma variedade de condições médicas, incluindo infecções pulmonares, fraturas de costelas, pneumotórax, doenças cardíacas, câncer de pulmão, entre outras. É uma ferramenta comum na prática médica.',
    preparacao:
      'A preparação para uma radiografia de tórax geralmente não é necessária. O paciente pode ser solicitado a remover roupas que cubram o tórax e a usar um avental de chumbo para proteção contra a exposição à radiação. Durante o exame, é importante permanecer quieto e seguir as instruções do técnico.',
  },
]);

</script>
