var path = require('path');

module.exports = {
    entry: "./app/app.jsx", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js"       // название создаваемого файла
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["env", "react"]    // используемые плагины
                }
            }
        ]
    },
  devServer: {
    historyApiFallback: true, // Without this parameter it will be 'Cannot GET /...'
    /*
    This isn't an issue with React Router, this occurs with any client-side routing for single page applications.
    The reason this occurs is because whatever is serving your application doesn't know what to do with /plan,
    it only exists on the client, so it gives you a 404.

    The configuration depends on what you're serving your application with, but,
    the gist of it is you'll need to send all paths that aren't static files to load index.html.

    Apache -> mod_rewrite
    Nginx -> rewrite
    Webpack Dev Server -> historyApiFallback
    Express/Koa/Hapi/etc. -> a wildcard route to your index.html
    */
  },
}
