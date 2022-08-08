const path = require('path'); //path del proyecto principal
const HtmlWebpackPlugin = require('html-webpack-plugin'); //traemos el plugin de html
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // punto de entrada
  output: {
    // lugar al que saldrán todos los archivos
    path: path.resolve(__dirname, 'dist'), //en nuestro path, crea la carpeta dist
    filename: 'bundle.js' // nombre del archivo js resultante
  },
  resolve: {
    // extensión de archivos a tomar en cuenta
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      sass: path.resolve(__dirname, 'src/sass/'),
      logos: path.resolve(__dirname, 'src/assets/logos/'),
      banners: path.resolve(__dirname, 'src/assets/banners/')
    }
  },
  module: {
    // loaders para cada tipo de archivo
    rules: [
      // reglas para usar
      {
        test: /\.(js|jsx)$/, // extensiones en las cuales actuará babel
        exclude: /node_modules/, // siempre excluir node modules
        use: {
          // indicamos el loader
          loader: 'babel-loader' // babel
        }
      },
      {
        test: /\.html$/, // extensiones html
        use: [
          {
            loader: 'html-loader' // loader a usar
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        type: 'asset'
      }
    ]
  },
  plugins: [
    // plugins
    new HtmlWebpackPlugin({
      // instanciamos el plugin para html
      template: './public/index.html', // archivo raíz a transformar
      filename: './index.html' // el archivo resultante
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true
  }
};
