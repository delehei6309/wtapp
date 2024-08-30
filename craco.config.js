const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // 判断是否为生产环境
            if (process.env.NODE_ENV === 'production') {
                // 删除 console 语句
                webpackConfig.optimization.minimizer = [
                    new TerserPlugin({
                        terserOptions: {
                            compress: {
                                drop_console: true,
                            },
                        },
                    }),
                    new OptimizeCSSAssetsPlugin({})
                ];
            }
            return webpackConfig;
        }
    }
};
