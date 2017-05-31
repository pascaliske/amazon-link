import { Logger, Command, Arguments } from 'modern-cli';
import Converter from '../converter';
import clipboardy from 'clipboardy';

export default class ConvertCommand extends Command {
    /**
     * Initializes the command
     *
     * @return {ConvertCommand}
     */
    constructor() {
        super('convert', 'Converts a given link.');

        this.args = new Arguments();
        this.converter = new Converter();
    }

    /**
     * Converts the link
     *
     * @return {Promise}
     */
    async execute() {
        const link = this.args.get(1);
        const result = this.converter::this.converter.convert(link);

        // no amazon mobile link given
        if (result === false) {
            this.log.red(' Could not detect an amazon mobile link!');
            return;
        }

        // log converted
        this.log('\n', Logger.green('Succesfully converted your link!'));
        this.log('\n   ', Logger.cyan(result));

        // copy converted link to clipboard
        await clipboardy.write(result);

        if (await clipboardy.read() === result) {
            this.log('\n', Logger.green('I\'ve copied the converted link to your clipboard!'));
        } else {
            this.log('\n', Logger.red('Could not copy the converted link to your clipboard. Go copy yourself!'));
        }
    }
}
