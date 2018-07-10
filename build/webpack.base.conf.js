'use strict'
//1、path模块是路径设置，不论是在这个配置中还是其他配置中，都是必不可少的。
//2、util是对vue-loader对于css预编译一些提取的工具模块，因为对于个人开发而言，里面提供了sass,less,stylus,possCss等一系列预编译解析的loader。
//3、config是对开发环境和生产环境的一系列不同参数的路径等配置。
//4、vueLoaderConfig也是同样基础生产环境和开发环境对vue-loader进行配置。
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

//这是一个封装函数，进行传参，获取绝对路径，方便对import时引入地址的方便填写。
//path.join()是对多个字符串进行拼接，此时__dirname是build文件路径..代表在出去一层，就是文件的根路径，dir这个参数则是你要传的文件夹，如果我们传crs的话就从src目录开始查找。
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// const createLintingRule = () => ({
//   test: /\.(js|vue)$/,
//   loader: 'eslint-loader',
//   enforce: 'pre',
//   include: [resolve('src'), resolve('test')],
//   options: {
//     formatter: require('eslint-friendly-formatter'),
//     emitWarning: !config.dev.showEslintErrorsInOverlay
//   }
// })

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    //main.js是webpack的入口文件，在main.js中加载的是App.vue文件，所以App.vue是渲染的入口，在main.js的里面#app指代的是index.html里的id为app的DOM元素。
    app: './src/main.js'
  },
  //output是我们输出文件的路径。

  output: {
    //1、path代表我们要输出的路径，config.build.assetsRoot里是assetsRoot: path.resolve(__dirname, '../dist')，这个是想把打包出来的文件路径放在根目录的dist目录下。
    path: config.build.assetsRoot,
    //2、filename: '[name].js'文件名，这个是用来打包后出的文件名，为什么用name，因为会打包出来三个文件，第一个是源代码文件，第二个是runtime文件，第三个是ventor文件，所以每个文件打包出来的名字就跟定义的chunkname一致。
    filename: '[name].js',
    //3、publicPath...是静态文件访问的路径，这个要根据你的静态文件的loader进行拼接配置。
    //当进行环境是生产环境的话我们就用config文件中config.build.assetsPublicPath这个属性
    //如果是生产环境 ，我们则用config.dev.assetsPublicPath中的属性，
    //两者都是“/”
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  //resolve是用来对模块进行解析，就是所谓的libary第三方库
  resolve: {
    //extensions 是用来对模块的后缀进行解析，当我们引入自己写的模块，比方说：
    //var config = require('../config') webpack.base里引入了config模块的时候，没有带js后缀，
    //文件本质上是不会识别的，但有了这个配置，会先进行.js后缀进行匹配，没有在匹配.vue，没有在匹配
    //.json，如果还是没有找到就会报错，文件没有找到no find.
    extensions: ['.js', '.vue', '.json'],
    //2、alias是配置别名，什么是别名呢，如果你在一个很深的文件引入其他文件中又一个很深的文件，
    //相对路径会写到吐血，那用别名我们定入一个入口位置，我们用@来代替src目录的绝对路径，此时就
    //用到了上面function resolve封装的函数，此时绝对路径就定位到了src目录，因为我们所有文件
    //都放在src目录下，就可以通过src目录直接定位到你想要找的文件。
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      // ...(config.dev.useEslint ? [createLintingRule()] : []),
      //1、test是用来解析所有.vue后缀的文件
      //2、loader我们用什么npm什么形式的loader去解析
      //3、include是代表我们解析的文件只包含那些东西。
      //比方说babel-loader是进行es6转换成es5的，但是考虑性能问题，打包时间问题，
      //我们不考虑解析node-module里的文件include: [resolve('src'), resolve('test')]
      //这里用一个数组来包括的要解析的文件夹路径，还是再次用到了relsove这个封装的函数
      //options是对解析文件参数配置
      //1.对于url-loader来说 limit10000代表当小时1000kb的文件我们则可以转面base64
      //2.name : 对输出的内容地行地址转换，当我们一个图在dev开发的时候用../../aa/aa.jpg，
      //你想到生产环境地址肯定不会对那怎么样此时就要用到地址转换
      //options: vueLoaderConfig 是对vue文件的style样式进行解析，解析编译，再进行ExtractTextPlugin来进行合并
      {
        // 对所有.vue文件使用vue-loader
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        // 对src和test文件夹下的.js文件使用babel-loader
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        // 对图片资源文件使用url-loader，query.name指明了输出的命名规则
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        //对字体资源文件使用url-loader，query.name指明了输出的命名规则
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
