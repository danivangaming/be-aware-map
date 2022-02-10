// @ts-ignore
import SoundConfig = Phaser.Types.Sound.SoundConfig;
export declare class Sound {
    private url;
    constructor(url: string);
    play(config: SoundConfig): string;
    stop(): string;
}
