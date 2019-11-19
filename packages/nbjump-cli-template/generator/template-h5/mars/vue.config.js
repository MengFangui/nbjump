/**
 * @file vue config
 */

module.exports = {
    transpileDependencies: [
        '@nbjump/api',
        '@nbjump/components'
    ],
    parallel: false,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Nbjump demo';
                args[0].template = process.cwd() + '/public/index.html';
                return args;
            });
    }
};
