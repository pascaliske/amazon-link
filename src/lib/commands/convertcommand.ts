import { Logger, Command, Arguments } from 'modern-cli'
import { Converter } from '../converter'
import * as clipboardy from 'clipboardy'

export class ConvertCommand extends Command {
    private log: Logger
    private args: Arguments
    private converter: Converter

    /**
     * Initializes the command.
     *
     * @returns {ConvertCommand}
     */
    constructor() {
        super('convert', 'Converts a given link.')

        this.args = new Arguments()
        this.converter = new Converter()
    }

    /**
     * Converts the link.
     *
     * @returns {Promise<void>}
     */
    public async execute(): Promise<void> {
        try {
            const link = this.args.get(1)
            const result = this.converter.convert(link)

            // log converted
            this.log(Logger.green('Successfully converted your link!'))
            this.log(Logger.cyan(result))

            // copy converted link to clipboard
            await clipboardy.write(result)

            if (await clipboardy.read() === result) {
                this.log(Logger.green('Successfully copied the converted link to your clipboard!'))
            } else {
                this.log(Logger.yellow('Could not copy the converted link to your clipboard. Go copy yourself!'))
            }
        } catch (error) {
            this.log.red('An error occured!')
        }
    }
}
