// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin"); // PWA
const WebpackBar = require('webpackbar');
const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
    entry: "./src/index.ts",
    target: ["web", "es5"],
    devServer: {
        open: false,
        host: "localhost",
    },
    plugins: [
        new WebpackBar(),
        
        new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            // {
            //     test: /\.(ts|tsx)$/i,
            //     loader: "ts-loader",
            //     exclude: ["/node_modules/"],
            // },
            {
                test: /\.(js|ts)$/i,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.less$/i,
                use: [stylesHandler, "css-loader", "postcss-loader", "less-loader"],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    },
};

const configFn = () => {
    if (isProduction) {
        config.mode = "production";
        // config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = "development";
        config.devtool = "source-map";
    }
    return config;
};

module.exports = [
    {
        ...configFn(),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "index.js",
            library: "copyJS",
            libraryExport: "default",
            libraryTarget: "umd",
        },
        plugins: [
            ...configFn().plugins,
            new HtmlWebpackPlugin({
                template: "index.html",
            }),
        ]
    },
    {
        ...configFn(),
        experiments: {
            outputModule: true, // 构建 esm 文件
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "index.mjs",
            library: {
                type: "module"
            }
        },
    },
    {
        ...configFn(),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "index.cjs",
            library: "copy",
            libraryExport: "default",
            libraryTarget: "commonjs",
        },
    },
];
