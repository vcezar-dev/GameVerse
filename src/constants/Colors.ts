const tintColorLight = '#6C63FF'; // Roxo neon
const tintColorDark = '#00FFF6';  // Azul ciano

export default {
  light: {
    text: '#000',               // Preto para textos principais
    background: '#FFFFFF',      // Branco para fundo geral
    tint: tintColorLight,       // Cor principal (botões, highlights)
    tabIconDefault: '#B0B0C0',  // Cinza claro para ícones inativos
    tabIconSelected: tintColorLight, // Roxo neon quando selecionado
  },
  dark: {
    text: '#FFFFFF',            // Branco para textos principais
    background: '#0B0C2A',     // Azul escuro espacial
    tint: tintColorDark,        // Cor principal em modo dark (destaques)
    tabIconDefault: '#B0B0C0',  // Cinza claro para ícones inativos
    tabIconSelected: tintColorDark, // Azul ciano quando selecionado
  },
};
