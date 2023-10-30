import * as PIXI from 'pixi.js';
export default function BouncePlatform (gv) {
    return {
        line: PIXI.Sprite.from(gv.sheet.textures["line.gif"]),
        dot1: PIXI.Sprite.from(gv.sheet.textures["newDot.png"]),
        dot2: PIXI.Sprite.from(gv.sheet.textures["newDot.png"]),
        init: function () {
            this.line.height = 2;
            this.line.anchor.y = 0.5;
            this.line.tint = 0x000000;
            this.line.visible = false;
            gv.stage.addChild(this.line);
            this.dot1.anchor.x = this.dot1.anchor.y = 0.5;
            this.dot1.visible = false;
            gv.stage.addChild(this.dot1);
            this.dot2.anchor.x = this.dot2.anchor.y = 0.5;
            this.dot2.visible = false;
            gv.stage.addChild(this.dot2);
            this.on = this.on.bind(this);
            this.on(true);
        },
        on: function (trueFalse) {
            this.placeFirstDot = this.placeFirstDot.bind(this);
            this.onMouseMove = this.onMouseMove.bind(this)
            this.releaseMouse = this.releaseMouse.bind(this)

            if (trueFalse === true) {
                gv.stage.interactive = true;
                gv.stage.buttonMode = true;
				gv.stage.on('pointerdown', this.placeFirstDot)
				gv.stage.on('pointermove', this.onMouseMove)
				gv.stage.on('pointerup', this.releaseMouse)
               
            } else {
				gv.stage.on('pointerdown', null)
				gv.stage.on('pointermove', null)
				gv.stage.on('pointerup', null)
            }
        },
        placeFirstDot: function(touchData) {
            let mouse = touchData.data.global,
                mouseX = mouse.x,
                mouseY = mouse.y;
            this.line.width = 0;
            this.line.x = mouseX;
            this.line.y = mouseY;
            this.line.visible = true;
            this.dot1.x = mouseX;
            this.dot1.y = mouseY;
            this.dot1.visible = true;
            this.dot2.x = mouseX;
            this.dot2.y = mouseY;
            this.dot2.visible = true;
            gv.mouseDown = true;
			gv.swipeText.visible = false;
        },
        onMouseMove: function(touchData){
            if (gv.mouseDown === true) {
                let mouse = touchData.data.global,
                    mouseX = mouse.x,
                    mouseY = mouse.y;
                this.dot2.x = mouseX;
                this.dot2.y = mouseY;
                let disAngle = gv.utils.distanceAndAngle(new PIXI.Point(this.dot1.x, this.dot1.y), new PIXI.Point(this.dot2.x, this.dot2.y));
                this.line.rotation = disAngle[1];
                this.line.width = disAngle[0];
            }
        },
        releaseMouse: function(data) {
            gv.mouseDown = false;
        },
        tickIt: function() {

            if (this.dot2.visible === true) {
                this.dot1.rotation += 0.25;
                this.dot2.rotation += 0.25;
            }
        }

    }

}
