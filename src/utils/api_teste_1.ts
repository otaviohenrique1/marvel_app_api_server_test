import path from "path";

const apiTeste = [
  {
    id: 1,
    name: "Homem de Ferro",
    description: "Tony Stark é um inventor gênio e industrial bilionário, que se vestiu com sua armadura de tecnologia de ponta para se tornar o super-herói Homem de Ferro . Filho adotivo do fabricante de armas Howard Stark , Tony herdou a empresa de sua família ainda jovem após a morte de seus pais. Enquanto supervisionava uma fábrica em um país estrangeiro, Stark foi sequestrado por terroristas locais. Em vez de ceder às demandas de seus captores para construir armas para eles, Stark criou uma poderosa armadura para ele escapar. Retornando à América, Stark melhorou ainda mais a armadura e colocou seus vastos recursos e intelecto em uso para a melhoria do mundo como Homem de Ferro.",
    thumbmail: {
      path: "../../services/api_teste/images/personagens/iron_man",
      extension: "jpg"
    }
  },
  {
    id: 2,
    name: "Viúva Negra",
    description: "Natalia Alianovna Romanova  também conhecida como Black Widow era uma ex - agente russa do KGB . Ela foi treinada pelo Red Room como parte do Black Widow Ops Program para ser a Super Espiã definitiva. Ela desertou da União Soviética para os Estados Unidos da América para se juntar à SHIELD . Mais tarde, a Viúva Negra se tornaria um membro dos Vingadorese esteve na equipe em várias ocasiões. Ela era uma mulher com um passado misterioso que poucos conhecem.",
    thumbmail: {
      path: path.resolve(__dirname, "../../services/api_teste/images/personagens/black_widow"),
      extension: "jpg"
    }
  },
  {
    id: 3,
    name: "Homem-Aranha",
    description: "Peter Benjamin Parker perdeu seus pais, Richard e Mary Parker , ainda jovem. Órfão como uma criança, ele teve que viver com seu tio Ben e tia May . Durante uma exposição de ciências, ele foi mordido por uma Aranha Radioativa , concedendo-lhe seus poderes. Ele decidiu usar esses poderes para seu próprio ganho egoísta, até que seu tio Ben morreu nas mãos de um ladrão que ele poderia ter impedido. Foi então que ele aprendeu 'Com grandes poderes, vem com grandes responsabilidades', e decidiu viver de acordo com o mantra de seu tio e usar seus poderes como uma força para o bem como o Homem-Aranha.",
    thumbmail: {
      path: path.resolve(__dirname, "../../services/api_teste/images/personagens/spider-man"),
      extension: "jpg"
    }
  },
  {
    id: 4,
    name: "Wolverine",
    description: "James Howlett nasceu em uma rica família canadense no final do século 19, sendo filho da Sra. Elizabeth Howlett e do empregado de seu marido , Thomas Logan . Ele foi forçado a abandonar sua família após o trágico assassinato de seu pai, uma situação que fez com que suas habilidades bestiais mutantes de fator de cura acelerado , sentidos intensamente aprimorados e garras de osso em cada mão se manifestassem. Adotando o nome Logan , ele vagou pelo mundo, vivendo uma longa vida cheia de sangue, guerra e traição, tendo o vil Dente de Sabre como seu arquiinimigo e o guerreiro japonês Ogun como seu sensei. Infelizmente, por sempre agindo como um lobo solitário, Logan era um sujeito inconsciente do programa Arma X e tinha seus ossos revestidos de Adamantium indestrutível, tornando-se um ativo ainda mais letal. Ele foi resgatado e assistido por Mac e Heather Hudson , ingressando no Departamento H como um agente do governo canadense conhecido como Wolverine . Mais tarde, Logan foi convidado por Charles Xavier para se juntar aos X-Men , uma equipe de heróis que lutam pela paz entre humanos e mutantes. Provando ser uma adição desafiadora para os X-Men devido ao seu comportamento agressivo, Wolverine estava constantemente em conflito com seu colega de equipe, Ciclope . No entanto, ele gradualmente começou a gostar dos X-Men, considerando-os sua nova família.",
    thumbmail: {
      path: "../../services/api_teste/images/personagens/wolverine",
      extension: "jpg"
    }
  },
  {
    id: 5,
    name: "Capitão América",
    description: "Cpt. Steven 'Steve' Rogers também conhecido como Capitão América , o Primeiro Vingador, foi rejeitado pelo Exército dos EUA durante a Segunda Guerra Mundial devido a vários problemas de saúde. Ele finalmente se ofereceu para o Projeto Rebirth, onde recebeu o Super Soldier Serum desenvolvido pelo Dr. Abraham Erskine . O soro realçou muito seu corpo frágil ao auge da fisicalidade humana. Como o Sentinela da Liberdade, ao lado de seu melhor amigo Bucky Barnes e os Invasores, Rogers e outros ajudaram os aliados a ganhar a guerra, mas não antes de se perder no mar e congelado no gelo em uma forma de animação suspensa por décadas. Ele foi descongelado na era moderna para continuar a batalha ao lado de seus novos aliados, os Vingadores . Cap não é leal a nenhum político ou governo e, em vez disso, defende os 'princípios atemporais de liberdade, igualdade e justiça do sonho americano'.",
    thumbmail: {
      path: "../../services/api_teste/images/personagens/captain_america",
      extension: "jpg"
    }
  },
  {
    id: 6,
    name: "Vingadores",
    description: "Os Vingadores eram uma equipe de indivíduos extraordinários com habilidades especiais e vontade de fazer o bem no mundo. O objetivo da equipe era proteger o planeta Terra e seu povo de ameaças domésticas e extraterrestres. Eles eram uma organização sem fins lucrativos com financiamento privado pelo industrial Tony Stark 's Maria Stark Fundação . O grupo foi reconhecido como uma força de manutenção da paz pelo Conselho de Segurança Nacional dos Estados Unidos da América , o Conselho de Segurança das Nações Unidas , eSHIELD . A equipe atuou com os interesses pacíficos de todo o mundo, ao invés de um país ou organização específica, conforme declarado na Carta dos Vingadores .",
    thumbmail: {
      path: "../../services/api_teste/images/personagens/avengers",
      extension: "jpg"
    }
  },
  {
    id: 7,
    name: "Guardiões da Galáxia",
    description: "Os Guardiões da Galáxia são um grupo de heróis que se opôs à conquista do sistema Kree pela Falange (e muitos que se opuseram à incursão de Aniquilador em seu universo), e se uniram em uma tentativa de evitar que qualquer outra catástrofe ocorresse. Por recomendação da aliada Nova , o grupo estabeleceu uma base de operações na estação espacial Knowhere , que possuía convenientemente um sistema de teletransporte com alcance quase universal. Um cão inteligente e superpoderoso chamado Cosmo atuou como chefe de segurança de Knowhere e trabalhou em estreita colaboração com a nova equipe durante suas primeiras missões.",
    thumbmail: {
      path: "../../services/api_teste/images/personagens/guardians_of_the_galaxy",
      extension: "jpg"
    }
  },
  {
    id: 8,
    name: "X-Men",
    description: "Os X-Men são uma equipe idealizada pelo Professor Charles Xavier como uma resposta ao surgimento de super-humanos mutantes conhecidos naturalmente entre a sociedade humana de base . Desejoso de promover seu sonho de coexistência pacífica entre mutantes e humanos, Xavier treinou seus X-Men no uso de seus poderes na Escola para Jovens Superdotados de Xavier , educando-os como protetores de um mundo que os teme e odeia. Ao longo dos anos, os heróis da espécie mutante encontraram sua missão constantemente desafiada por humanos reacionários e mutantes fanáticos.",
    thumbmail: {
      path: "../../services/api_teste/images/personagens/x-men",
      extension: "jpg"
    }
  },
];

export default apiTeste;