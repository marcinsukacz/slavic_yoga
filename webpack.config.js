const config = {
  entry: `${__dirname}/src/app.js`,
  output: {
    path: `${__dirname}/public/js/`,
    publicPath: '/slavic_yoga/',
    filename: 'bundle.js'
  },
  resolve: {   // NEW
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  mode: 'development'
};

module.exports = config;

// module.exports = {
//   publicPath: '/name-of-your-project/'
// }
