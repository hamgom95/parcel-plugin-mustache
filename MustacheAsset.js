const JSAsset = require("parcel-bundler/src/assets/JSAsset");

module.exports = class MustacheAssets extends JSAsset {
    async pretransform() {
        this.contents = `
            import Mustache from 'mustache';
            Mustache.parse(\`${this.contents}\`); // optional, speeds up future uses
            export default (data) => Mustache.render(\`${this.contents}\`, data);
        `;
        return await super.pretransform();
    }
}
