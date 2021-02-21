const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "stories.js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // TODO fix MiniCssExtractPlugin.loader options - setup publicPath
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // publicPath: "/",
                        },
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: "asset/resource",
            },
            {
                test: /\.ttf$/,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "stories.css",
        }),
    ],
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
};