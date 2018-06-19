const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./ReactHelloWorld/React/src/index.jsx",
  mode: "development",
  devtool: "source-map",
  target: 'node',
  module: {
    rules: [
	  { 
		test: /\.tsx?$/, loader: "awesome-typescript-loader" 
	  },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".json"] },
  output: {
    path: __dirname + "/ReactHelloWorld/dist",
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};