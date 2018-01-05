import { Command } from 'modern-cli';
export declare class ConvertCommand extends Command {
    private log;
    private args;
    private converter;
    /**
     * Initializes the command.
     *
     * @returns {ConvertCommand}
     */
    constructor();
    /**
     * Converts the link.
     *
     * @returns {Promise<void>}
     */
    execute(): Promise<void>;
}
