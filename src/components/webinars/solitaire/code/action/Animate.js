import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';
import DragContainer from '../visualAssets/DragContainer.js';
const Animate = {
    counter: 0,
	halt: false,
    start: function() {
		if (this.halt) return;
        const { mousePoint, xyDiff, ctx, canvas, cardWidth, cardHeight } = VARS;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let over = [];

        VARS.allVisualAssets.forEach(card => {
            const { img, x, y, clickable } = card;


            ctx.drawImage(img, x, y, cardWidth, cardHeight);

            if (clickable) {
                let rect = { x, y, width: cardWidth, height: cardHeight };
                let hit = Utils.pointRectangleCollisionDetection(mousePoint, rect);
                over.push(hit);
            }

            if (DragContainer.includes(card)) {
                let x = mousePoint.x - xyDiff.x;
                let y = (mousePoint.y - xyDiff.y) + card.yOffset;
                card.setPosition({ x, y })
            }

        })
        this.cursor(over.includes(true));
        requestAnimationFrame(() => this.start());
    },
	setHalt: function (bool) {
		this.halt = bool
	},
	stop: function () {
		this.halt = true;
	},
    cursor: function(boolean) {
        if (boolean) {
            VARS.canvas.style.cursor = "pointer";
        } else {
            VARS.canvas.style.cursor = "default";
        }

    }
}
export default Animate;