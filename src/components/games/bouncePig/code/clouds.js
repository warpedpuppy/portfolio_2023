
export default function Clouds (gv) {
    return {
        clouds: [],
        cont: new gv.PIXI.Container(),
        onStage:false,
        init: function (){
            for(let i = 0; i < gv.cloudQ; i ++){
                this.clouds.push(this.cloud("right"));
                this.clouds.push(this.cloud("left"));
            }
            gv.app.stage.addChild(this.cont)
        },
        addToStage: function () {
            this.onStage = true;
            let cloud;
            for(let i = 0; i < this.clouds.length; i ++){
                cloud =  this.clouds[i];
                cloud.alpha = 1;
                cloud.y = Math.ceil(Math.random() * gv.canvasHeight);
                cloud.x = (cloud.side === "right") ? gv.utils.randomIntBetween(gv.halfWidth+(cloud.w/2), gv.canvasWidth-cloud.w): gv.utils.randomIntBetween(0, gv.halfWidth-cloud.w-30);
                this.cont.addChild(cloud);
                // gv.TweenLite.to(cloud,0.5, {alpha:1});
            }
        },
        removeFromStage: function () {
            this.onStage = false;
            this.cont.removeChildren();
        },
        resize: function () {
            this.removeFromStage();
            this.addToStage();
        },
        cloud: function (side) {
            let cloud = (side === "right")? gv.PIXI.Sprite.from(gv.sheet.textures["cloudRight.png"]): gv.PIXI.Sprite.from(gv.sheet.textures["cloudLeft.png"]);
            cloud.side= side;
            cloud.cacheAsBitmap = true;
            cloud.w = cloud.width;
            cloud.h = cloud.height;
            let box = new gv.PIXI.Rectangle(0,60,cloud.w, 10);
            cloud.box = box;
            return cloud;
        }
    }
}


