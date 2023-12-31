import Marker from '../visualAssets/Marker.js';
import Slot from '../visualAssets/Slot.js';
import VARS from '../utils/Vars.js';
import DrawPile from '../visualAssets/DrawPile.js';
const Deal = {
    loopingQ: 7, 
    cardCounter: 0,
    startX: 0,
    startY: 0,
    totalColumns: 7,
    xOffset: 0,
    start: function () {
        this.cardCounter = 0;
		this.startX = 0;
		this.startY = 0;
		this.xOffset = 0;
		this.loopingQ = 7;
        VARS.deck = [...VARS.allVisualAssets]


        this.startX = VARS.cardWidth + VARS.buffer_larger;
        this.startY = VARS.cardHeight + VARS.buffer_larger;

        let gameBoardWidth = ((VARS.cardWidth * 8)  + (VARS.buffer * 6 ) + VARS.buffer_larger);
        this.xOffset = ((VARS.canvas.width - gameBoardWidth) / 2);
        let xOffset = this.xOffset;

        // PILES
        let { adjustedCardCounter } = this.createCardPiles(xOffset);
        DrawPile.createResetButton(xOffset, this.startY);

        // DRAW PILE
        let arr = VARS.deck.slice(adjustedCardCounter, 52)
        DrawPile.create( arr, true, xOffset);

        // SLOTS 
        this.createSlots();
        
      
    },
    createCardPiles(xOffset) {

        const { deck } = VARS;

        for (let i = 0; i < this.loopingQ; i++) { 
           let marker = Marker();
            marker.build(xOffset + (this.startX + (VARS.cardWidth + VARS.buffer) * i),this.startY, i);
            VARS.allVisualAssets.unshift(marker);
            VARS.piles[i] = [marker];
        }

        let card, verticalSpacer = 0;

        while (this.loopingQ > 0) {
            for (let j = 0; j < this.loopingQ; j++) {

                card = deck[this.cardCounter];
                
                
                let x = xOffset + (this.startX + (VARS.cardWidth + VARS.buffer) * j);
                let y = this.startY + (VARS.buffer * verticalSpacer);
                card.setPosition({x, y})
               
                
                let index = (this.totalColumns - this.loopingQ) + j;
 
                card.setIndex(index);
                VARS.piles[index].push(card);

                card.setDrawPile(false);
                
                if (j === 0) {
                    card.setClickability(true)
                    card.reveal(true);
                } else {
                    card.reveal(false);
                }

                this.cardCounter++;
                // card.addToGameBoard();
            }

            verticalSpacer++;
            this.loopingQ--;

            this.startX += VARS.cardWidth + VARS.buffer;
        }
        return { adjustedCardCounter: this.cardCounter, adjustedStartY: this.startY }
    },
    createSlots() {
        let allFourSlotWidths = (VARS.cardWidth + VARS.slot_spacer) * 4;
        let xOffset = (VARS.canvas.width - allFourSlotWidths) / 2;
        for (let i = 0; i < 4; i++) {
            let imageString = `/bmps/slot${VARS.suits[i].charAt(0).toUpperCase()}${VARS.suits[i].substring(1, VARS.suits[i].length)}.png`; 
            let xVal = xOffset + ((VARS.cardWidth + VARS.slot_spacer) * i);
            let yVal = 10;
            let slot = Slot();

            slot.build(xVal, yVal, imageString, VARS.suits[i])
           
            VARS.slots.push(slot);
            VARS.allVisualAssets.push(slot);
        }
    }
}
export default Deal;
