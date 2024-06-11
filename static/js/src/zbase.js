export class AcGame {
    constructor(id,acwingOS){
        this.acwingOS = acwingOS;
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
