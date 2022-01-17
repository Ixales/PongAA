class Tableau1 extends Phaser.Scene {

    preload() {
        this.load.image('cercle', 'img/cercle.png');
        this.load.image('carre', 'img/carre.png');
    }


    create() {
        this.hauteur = 500
        this.largeur = 1000

        this.balle = this.physics.add.image(480, 230, 'cercle').setOrigin(0, 0);
        this.balle.setDisplaySize(20, 20);
        this.balle.body.setBounce(1, 1);
        this.balle.setVelocityX(Phaser.Math.Between(-400,400));
        this.balle.setVelocityY(Phaser.Math.Between(-300,300));
        this.balle.body.setMaxVelocity(1000,1000);



        this.haut = this.physics.add.image(0, 0, 'carre').setOrigin(0, 0);
        this.haut.setDisplaySize(this.largeur, 20);
        this.haut.body.setAllowGravity(false);
        this.haut.setImmovable(true);

        this.bas = this.physics.add.image(0, 480, 'carre').setOrigin(0, 0);
        this.bas.setDisplaySize(this.largeur, 20);
        this.bas.body.setAllowGravity(false);
        this.bas.setImmovable(true);

        this.physics.add.collider(this.balle, this.bas);
        this.physics.add.collider(this.balle, this.haut);


    }

    initKeyboard(){
        let me = this;
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.gauche.setVelocityY(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.droite.setVelocityY(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.gauche.setVelocityY(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.droite.setVelocityY(0);
                    break;
            }
        })
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.gauche.setVelocityY(-300);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.droite.setVelocityY(-300);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.gauche.setVelocityY(300);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.droite.setVelocityY(300);
                    break;
            }

        })
    }


    update() {
        if (this.balle.x > this.largeur) {
            this.balle.x = 0
        if(this.balle.y > this.hauteur) {
            this.balle.y = this.hauteur
        }

        }
        if (this.gauche.y<20){
            this.gauche.y = 20
        }
        if (this.gauche.y>this.hauteur-120){
            this.gauche.y =this.hauteur-120
        }
        if (this.droite.y<20){
            this.droite.y = 20
        }
        if (this.droite.y>this.hauteur-120){
            this.droite.y =this.hauteur-120
        }

    }
}