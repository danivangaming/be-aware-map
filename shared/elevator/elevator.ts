export class Elevator {
    private static _instance = new Elevator()
    private currentLevel!: number
    private maxLevelAvailable!: number

    constructor() {
        this.currentLevel = 1
        this.maxLevelAvailable = 2
    }

    setLevelUp(): string {
        if (this.currentLevel + 1 <= this.maxLevelAvailable) {
            this.currentLevel += 1
        }
        return Levels[this.currentLevel]
    }

    setLevelDown(): string {
        if (this.currentLevel - 1 > 0) {
            this.currentLevel -= 1
        }
        return Levels[this.currentLevel]
    }

    increaseMaxLevelAvailable(): void {
        this.maxLevelAvailable += 1
    }

    setMaxLevelAvailable(maxLevelAvailable: number): void {
        this.maxLevelAvailable = maxLevelAvailable
    }

    getCurrentLevel(): number {
        return this.currentLevel
    }

    setCurrentLevel(map: string): void {
        switch (map) {
            case 'map.json':
                this.currentLevel = Levels["map.json#entryPoint"]
                break;
            case 'Level1.json':
                this.currentLevel = Levels["Level1.json"]
                break;
            case 'Level2.json':
                this.currentLevel = Levels["Level2.json"]
                break;
            case 'Level3.json':
                this.currentLevel = Levels["Level3.json"]
                break;
            case 'Level5.json':
                this.currentLevel = Levels["Level5.json"]
                break;
        }
    }

    getCurrentLevelJson(): string {
        return Levels[this.currentLevel]
    }

    getHighestLevel(): number {
        return this.maxLevelAvailable
    }

    static get instance() {
        return this._instance
    }
}

export enum Levels {
    min,
    'map.json#entryPoint',
    'Level1.json',
    'Level2.json',
    'Level3.json',
    'Level5.json',
    'Lobby.json',
    max
}

export const elevator = Elevator.instance