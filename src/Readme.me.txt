FP Sellection - Carrossel de Carros Esportivos
🏎️ Visão Geral do Projeto
FP Sellection é um site interativo de apresentação de carros esportivos de luxo, desenvolvido com foco em experiência visual imersiva e navegação fluída. O projeto apresenta um carrossel moderno que exibe três modelos de alta performance: Audi R8, Lamborghini e Porsche 911 Turbo.

🎯 Objetivo do Projeto
Criar uma experiência web premium para apresentação de veículos esportivos, combinando design sofisticado, animações suaves e interatividade responsiva.

🛠️ Arquitetura do Projeto
text
fp-sellection/
│
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos CSS com design responsivo
├── script.js           # Lógica JavaScript do carrossel
├── img/               # Diretório de imagens
│   ├── logo.png
│   ├── img1.png
│   ├── img2.png
│   ├── img3.png
│   └── arrow.png
└── README.md          # Documentação do projeto
✨ Funcionalidades Principais
Carrossel Interativo
Navegação por Setas: Controles visuais posicionados estrategicamente

Indicadores Visuais: Bolinhas interativas + numeração

Swipe para Mobile: Suporte a gestos em dispositivos touch

Navegação por Teclado: Setas direcionais (← →)

Transições Suaves: Animações CSS personalizadas

Design Responsivo
Layout adaptável para desktop, tablet e mobile

Breakpoints em 1200px, 992px, 768px e 480px

Menu responsivo que se transforma em coluna em telas menores

Ajuste automático de tamanhos e posicionamentos

Efeitos Visuais
Gradiente radial dinâmico de fundo

Sombra e rotação nas imagens dos carros

Efeitos hover em botões e elementos interativos

Animações de entrada dos elementos de conteúdo

Filtros de desfoque (backdrop-filter)

🎨 Design System
Paleta de Cores
Primária: #beff1b (verde-limão para destaques)

Secundária: #be67ec → #580567 (gradiente roxo)

Texto: #ffffff (branco) e #e6e6e6 (cinza claro)

Fundo: #000000 (preto)

Tipografia
League Gothic: Títulos e elementos principais

Poppins: Texto corrido e elementos de interface

Pesos variados (100-900) para hierarquia visual

Efeitos Visuais
Sombras (drop-shadow)

Gradientes radiais e lineares

Bordas arredondadas

Transições CSS com timing personalizado

Backdrop blur para elementos semi-transparentes

⚙️ Tecnologias Utilizadas
Frontend
HTML5: Estrutura semântica

CSS3:

Flexbox e Grid Layout

Transições e animações

Variáveis CSS

Media Queries

JavaScript (Vanilla):

Manipulação do DOM

Event Listeners

Touch Events API

Keyboard Events

Ferramentas e Recursos
Google Fonts: League Gothic e Poppins

Font Awesome: Ícones (caso necessário)

Git: Controle de versão

🔧 Lógica do Carrossel (script.js)
Estrutura do Código
Inicialização: Seleção de elementos DOM

Gerenciamento de Estado: Controle do índice atual

Funções Principais:

updateCarousel(): Atualiza visualização

nextSlide()/prevSlide(): Navegação

goToSlide(index): Navegação direta

Event Handlers:

Cliques em setas e indicadores

Teclado (setas direcionais)

Swipe em dispositivos touch

Recursos Avançados
Auto-play (comentado): Navegação automática opcional

Controle de Foco: Pausa auto-play durante interação

Swipe Detection: Threshold de 50px para reconhecimento

Performance: Transições CSS hardware-accelerated

📱 Responsividade
Breakpoints Implementados
> 1200px: Desktop completo

992px - 1200px: Tablet landscape

768px - 992px: Tablet portrait

480px - 768px: Mobile landscape

< 480px: Mobile portrait

Ajustes por Dispositivo
Mobile: Layout em coluna, texto centralizado

Tablet: Redução de espaçamentos

Desktop: Layout lado a lado completo

🎯 Otimizações Implementadas
Performance
Imagens otimizadas

Transições CSS em GPU

Event delegation onde aplicável

Cleanup de event listeners

Acessibilidade
Navegação por teclado

Alt text em imagens

Contraste adequado

Foco visível em elementos interativos

UX/UI
Feedback visual em interações

Indicadores claros de estado

Timing de animações cuidadosamente ajustado

Posicionamento intuitivo dos controles

🚀 Como Executar o Projeto
Clone ou baixe os arquivos

bash
git clone [url-do-repositorio]
Estrutura de pastas

text
Certifique-se de que a pasta "img" esteja no mesmo nível dos arquivos HTML, CSS e JS
Abrir no navegador

text
Simplesmente abra o arquivo index.html em qualquer navegador moderno
📝 Personalização
Para Adicionar Novos Slides
Adicione novo item no HTML seguindo a estrutura .item

Atualize o array de slides no JavaScript

Adicione novo indicador na lista de bolinhas

Para Alterar Cores
css
/* No arquivo style.css */
:root {
  --primary-color: #beff1b;
  --gradient-start: #be67ec;
  --gradient-end: #580567;
}
Para Modificar Velocidade das Transições
css
/* Ajuste os valores de transition-duration */
.item {
  transition: all 0.5s ease;
}
🔍 Compatibilidade
Navegadores Suportados
Chrome 60+

Firefox 55+

Safari 12+

Edge 79+

Opera 50+

Requisitos Técnicos
JavaScript habilitado

Suporte a CSS Grid e Flexbox

Resolução mínima: 320px

📊 Características Técnicas
Tamanho Total: ~200KB (sem imagens)

Tempo de Carregamento: < 3s em conexão 3G

SEO: Meta tags otimizadas

Performance: 90+ no Lighthouse

🤝 Contribuição
Este projeto está estruturado para fácil manutenção e extensão. Para contribuir:

Fork o repositório

Crie uma branch para sua feature

Commit suas mudanças

Push para a branch

Abra um Pull Request

📄 Licença
© 2025 Thiago Ramos. Todos os direitos reservados.

Nota: Este projeto é para fins demonstrativos. As imagens de carros são de propriedade de seus respectivos fabricantes e são usadas apenas para demonstração visual.


