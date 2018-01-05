export declare class Converter {
    /**
     * Link types.
     */
    private static LINK_INVALID;
    private static LINK_DESKTOP;
    private static LINK_MOBILE;
    /**
     * Search and replace pattern for mobile links.
     * @type {string}
     */
    private mobilePattern;
    /**
     * Search and replace pattern for desktop links.
     * @type {string}
     */
    private desktopPattern;
    /**
     * Initializes the converter.
     *
     * @returns {Converter}
     */
    constructor();
    /**
     * Checks if the given link is an amazon mobile or desktop link.
     *
     * @param {string} link - The link to check.
     * @returns {string}
     */
    private checkLink(link);
    /**
     * Converts a mobile link into an desktop.
     *
     * @param {boolean|string} link
     * @returns {string}
     */
    convert(link: string): string;
}
