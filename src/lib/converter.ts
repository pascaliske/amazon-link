export class Converter {
    /**
     * Link types.
     */
    private static LINK_INVALID = 'invalid'
    private static LINK_DESKTOP = 'desktop'
    private static LINK_MOBILE = 'mobile'

    /**
     * Search and replace pattern for mobile links.
     * @type {string}
     */
    private mobilePattern: string

    /**
     * Search and replace pattern for desktop links.
     * @type {string}
     */
    private desktopPattern: string

    /**
     * Initializes the converter.
     *
     * @returns {Converter}
     */
    constructor() {
        this.mobilePattern = '/gp/aw/d'
        this.desktopPattern = '/dp'
    }

    /**
     * Checks if the given link is an amazon mobile or desktop link.
     *
     * @param {string} link - The link to check.
     * @returns {string}
     */
    private checkLink(link: string): string {
        const isValid = link.includes('http')

        if (!isValid) {
            return Converter.LINK_INVALID
        }

        if (isValid && link.includes(this.desktopPattern)) {
            return 'desktop'
        }

        if (isValid && link.includes(this.mobilePattern)) {
            return 'mobile'
        }

        return Converter.LINK_INVALID
    }

    /**
     * Converts a mobile link into an desktop.
     *
     * @param {boolean|string} link
     * @returns {string}
     */
    public convert(link: string): string {
        // no amazon link given
        if (this.checkLink(link) === Converter.LINK_INVALID) {
            throw new Error('No amazon link given!')
        }

        // convert given link to mobile format
        if (this.checkLink(link) === Converter.LINK_DESKTOP) {
            return link.replace(this.desktopPattern, this.mobilePattern)
        }

        // convert given link to desktop format
        if (this.checkLink(link) === Converter.LINK_MOBILE) {
            return link.replace(this.mobilePattern, this.desktopPattern)
        }

        // error occured
        throw new Error('An error occured.')
    }
}
