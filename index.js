module.exports = (bundler) => {
    // register mustache asset type
    bundler.addAssetType("mustache", require.resolve('./MustacheAsset'));
};