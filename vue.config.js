const path = require("path");
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob");

const PATH_SRC = path.resolve(__dirname, "./src");

console.log(process.env.MEASURE);
const smp = new SpeedMeasureWebpackPlugin({
  disable: !process.env.MEASURE,
  outputFormat: "human"
});

/**
 * @type {import("@vue/cli-service").ProjectOptions}
 */
module.exports = {
  configureWebpack: smp.wrap({
    cache: {
      type: "filesystem"
    },
    output: {
      pathinfo: false
    },
    resolve: {
      alias: {
        "src": path.resolve(__dirname, "./src"),
        "assets": path.resolve(__dirname, "./src/assets"),
        "components": path.resolve(__dirname, "./src/components")
      }
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserWebpackPlugin({
          parallel: 4,
          terserOptions: {
            parse: {
              ecma: 8
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2
            },
            mangle: {
              safari10: true
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true
            }
          }
        }),
        new CssMinimizerWebpackPlugin({
          parallel: 4
        })
      ],
      runtimeChunk: true,
      splitChunks: {
        chunks: "all",
        maxSize: 240 * 1024,
        cacheGroups: {
          vendors: {
            test: /node_modules/,
            chunks: "all",
            priority: 10, // 优先级
            enforce: true
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          use: [{
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }]
        }
      ]
    },
    plugins: [
      new BundleAnalyzerPlugin({
        // analyzerMode: process.env.MEASURE ? "disabled" : ""
      }),
      new PurgeCSSPlugin({
        paths: glob.sync(`${PATH_SRC}/**/*`, { nodir: true })
      })
    ]
  })
};
