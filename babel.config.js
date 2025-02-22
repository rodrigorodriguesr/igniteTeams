module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['expo'],
        plugins: [
          [
            'module-resolver',
            {
              root: ['./src'], // Define o diretório raiz para os aliases
              alias: {
                '@assets': './src/assets', // Define alias para assets
                '@components': './src/components', // Alias para componentes
                '@routes': './src/routes', // Alias para rotas
                '@screens': './src/screens', // Alias para telas
                '@storage': './src/storage', // Alias para armazenamento
                '@utils': './src/utils', // Alias para utilitários
              },
            },
          ],
        ],
        
        };
  };