export default class Converter {
    /**
     * Initializes the converter
     *
     * @return {Converter}
     */
    constructor() {
        this.search = '/gp/aw/d';
        this.replace = '/dp';
    }

    /**
     * Converts a mobile link into an desktop
     *
     * @param {Boolean|String} link
     * @return {Boolean|String}
     */
    convert(link=false) {
        // no amazon mobile link given
        if (!link.includes(this.search)) {
            return false;
        }

        // return converted
        return link.replace(this.search, this.replace);
    }
}
