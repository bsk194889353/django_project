export class AcGame {
    constructor(id,AcWingOS){
        this.AcWingOS = AcWingOS;
        this.id = id;
        this.$ac_game = $('#'+id);
        this.menu = new AcGameMenu(this);
        this.settings = new Settings(this);
        this.playground = new AcGamePlayground(this);
        this.start();
    }
    start() {
    }
}
