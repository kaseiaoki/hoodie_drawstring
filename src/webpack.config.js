// module.exports = {
//     entry: {
//         app :'src/ts/app.ts'
//     },
//     output: {
//         path: require("path").resolve("./dst/js/"),
//         filename: '[name].js'
//     },
//     resolve: {
//       extensions: [
//         '.ts'
//       ]
//     },
//     module: {
//         loaders: [
//             {
//                 exclude: /(node_modules)/,
//                 loaders: ["babel", "ts"]
//             }
//         ]
//     }
// }
module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/app.ts',
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/build`,
    // 出力ファイル名
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'awesome-typescript-loader'
      },
      // ソースマップファイルの処理
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [
      '.ts'
    ]
  },
  // ソースマップを有効に
  devtool: 'source-map'
};
