class GeometricPuzzleAnimation {

  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.blockSize = 25;
    this.cols = 20;
    this.rows = 10;
    this.colors = ["#65E83A", "#AEE83A"];
    this.clusters = {}
    this.blocksObj = {};
    this.moveArray = [];
    this.visited = [];
    this.allowAnimation = true;
    this.clusterTracker = {
      clusters: [0],
      returnMax: function () {
        return this.clusters.sort((a, b) => b - a)[0]
      },
      newCluster: function () {
        let oneMore = this.returnMax() + 1;
        this.clusters.push(oneMore);
        return oneMore;
      }
    };
    this.leftOffset = (canvas.width - (this.cols * this.blockSize)) / 2

    this.setUp(true);
    this.makeClusters();
    this.makeClusterObject();
    let { dimensions, totalWidth } = this.calculateDimensions();
    this.dimensions = dimensions;
    this.totalWidth = totalWidth;
    this.animate();
  }


  setUp() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let relativeX = (this.blockSize * j), relativeY = (this.blockSize * i), x = this.leftOffset + relativeX, y = this.blockSize + relativeY;
        let color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.blocksObj[`row-${i}-col-${j}`] = { x, y, moveable: true, relativeX, relativeY, storeX: x, storeY: y, offsetX: 0, offsetY: 0, fillStyle: color, row: i, col: j, cluster: undefined, clusters: [], id: `row-${i}-col-${j}`, startX: undefined, startY: undefined };
      }
    }
  }
  stop() {
    this.allowAnimation = false;
  }
  draw() {
    for (let key in this.blocksObj) {
      let block = this.blocksObj[key];
      this.ctx.strokeStyle = `rgba(0 0 0 / 20%)`
      this.ctx.strokeRect(block.storeX, block.storeY, this.blockSize, this.blockSize);
      if (!this.moveArray.includes(block)) {
        this.ctx.shadowColor = "rgb(0 0 0 / 0%)";
        this.ctx.fillStyle = block.fillStyle;
        this.ctx.fillRect(block.x, block.y, this.blockSize, this.blockSize);
      }
    }

    if (this.moveArray.length) {
      this.ctx.shadowColor = "rgb(0 0 0 / 10%)";
      this.ctx.shadowBlur = 10;
      this.ctx.shadowOffsetX = 5;
      this.ctx.shadowOffsetY = 5;
      this.moveArray.forEach(block => {
        this.ctx.fillStyle = block.fillStyle;
        this.ctx.fillRect(block.x, block.y, this.blockSize, this.blockSize);
      })
    }
  }
  openingLayout() {
    let startX = (this.canvas.width - this.totalWidth) / 2;
    let startY = (this.rows * this.blockSize) + (this.blockSize * 2)
    for (let key in this.clusters) {
      let cluster = this.clusters[key];
      cluster.forEach(block => {
        block.moveable = true;
        block.x = block.startX = startX + (block.relativeX - this.dimensions[key].minX);
        block.y = block.startY = startY + block.relativeY;
      })
      startX += this.dimensions[key].width + 3;
    }
  }
  makeClusterObject() {
    for (let key in this.blocksObj) {
      let block = this.blocksObj[key]
      if (!this.clusters[block.cluster]) {
        this.clusters[block.cluster] = [block]
      } else {
        this.clusters[block.cluster].push(block)
      }
    }
  }
  calculateDimensions() {
    let dimensions = {}, totalWidth = 0;;
    for (let key in this.clusters) {
      let minY = this.canvas.height;
      let maxY = 0;
      let minX = this.canvas.width;
      let maxX = 0;
      this.clusters[key].forEach(block => {
        if (block.y > maxY) maxY = block.y;
        if (block.y < minY) minY = block.y;
        if (block.relativeX > maxX) maxX = block.relativeX;
        if (block.relativeX < minX) minX = block.relativeX;
      })
      let width = (maxX + this.blockSize) - minX;
      totalWidth += width;
      dimensions[key] = { width, height: (maxY + this.blockSize) - minY, minX };
    }
    return { dimensions, totalWidth }
  }
  createDraggableArray(cluster, clientX, clientY) {
    let arr = [];
    for (let key in this.blocksObj) {
      let block = this.blocksObj[key]
      if (block.cluster === cluster) {
        block.offsetX = clientX - block.x;
        block.offsetY = clientY - block.y;
        arr.push(block)
      }
    }
    return arr;
  }

  // // BUTTONS
  // document.getElementById("solve").addEventListener("click", e => {
  //     e.preventDefault();
  // for (let key in this.blocksObj) {
  //   let block = this.blocksObj[key];
  //   block.x = block.storeX;
  //   block.y = block.storeY;
  // }
  // })

  // document.getElementById("start").addEventListener("click", e => {
  //   e.preventDefault();
  //   openingLayout();
  // })


  // // MOUSE LISTENERS
  // window.addEventListener("mousedown", e => {
  //   document.body.style.cursor = "grab";
  //   const { clientX, clientY } = e;
  //   for (let key in this.blocksObj) {
  //     const { x, y } = this.blocksObj[key];

  //     if (collisionDetection(clientX, clientY, x, y)) {
  //       if (!blocksObj[key].moveable) break;
  //       this.moveArray = createDraggableArray(blocksObj[key].cluster, clientX, clientY);
  //     }
  //   }

  // })
  // window.addEventListener("mouseup", e => {
  //   document.body.style.cursor = "";
  //   if (moveArray.length) {
  //     let block = this.moveArray[0];
  //     if (squareSquareCollisionDetection(block, { x: block.storeX, y: block.storeY })) {
  //       this.moveArray.forEach(item => {
  //         item.x = item.storeX;
  //         item.moveable = false;
  //         item.y = item.storeY;
  //       })
  //     } else {
  //       this.moveArray.forEach(item => {
  //         item.x = item.startX;
  //         item.y = item.startY;
  //       })
  //     }
  //     this.moveArray = []
  //   }
  // });
  // window.addEventListener("mousemove", e => {
  //   const { clientX, clientY } = e;
  //   if (moveArray.length) {
  //     this.moveArray.forEach(item => {
  //       item.x = clientX - item.offsetX;
  //       item.y = clientY - item.offsetY;
  //     })
  //   }
  // });






  above(item) {
    let blockAbove = this.blocksObj[`row-${item.row - 1}-col-${item.col}`]
    if (item.row > 0) {
      return { block: blockAbove, matches: true }
    } else {
      return { matches: false }
    }
  }
  below(item) {
    let blockBelow = this.blocksObj[`row-${item.row + 1}-col-${item.col}`]
    if (item.row < this.rows - 1) {
      return { block: blockBelow, matches: blockBelow.fillStyle === item.fillStyle }
    } else {
      return { matches: false }
    }
  }
  left(item) {
    let blockLeft = this.blocksObj[`row-${item.row}-col-${item.col - 1}`];
    if (item.col > 0) {
      return { block: blockLeft, matches: blockLeft.fillStyle === item.fillStyle }
    } else {
      return { matches: false }
    }
  }
  right(item) {
    let blockRight = this.blocksObj[`row-${item.row}-col-${item.col + 1}`];
    if (item.col < this.cols - 1) {
      return { block: blockRight, matches: blockRight.fillStyle === item.fillStyle }
    } else {
      return { matches: false }
    }
  }


  makeClusters() {
    this.assessSurroundings();

    let next;
    for (let key in this.blocksObj) {
      let block = this.blocksObj[key];

      if (block.cluster === undefined) {
        next = block;
        this.assessSurroundings(next.row, next.col, this.clusterTracker.newCluster());

      }

    }
  }
  assessSurroundings(row = 0, col = 0, cluster = 0) {

    let str = this.getString(row, col);

    let block = this.blocksObj[str]
    block.cluster = cluster;

    if (!block || this.visited.includes(str)) {
      return
    };

    this.visited.push(str)

    let a = this.above(block).block, b = this.below(block).block, l = this.left(block).block, r = this.right(block).block;

    if (r && r.fillStyle === block.fillStyle) {
      r.cluster = cluster;
      this.assessSurroundings(r.row, r.col, cluster)
    }

    if (b && b.fillStyle === block.fillStyle) {
      b.cluster = cluster;
      this.assessSurroundings(b.row, b.col, cluster)
    }

    if (l && l.fillStyle === block.fillStyle) {
      l.cluster = cluster;
      this.assessSurroundings(l.row, l.col, cluster)
    }

    if (a && a.fillStyle === block.fillStyle) {
      a.cluster = cluster;
      this.assessSurroundings(a.row, a.col, cluster)
    }

    return "done"

  }
  getString(row, col) { return `row-${row}-col-${col}` }


  collisionDetection(px, py, rx, ry) {
    if (px >= rx &&         // right of the left edge AND
      px <= rx + this.blockSize &&    // left of the right edge AND
      py >= ry &&         // below the top AND
      py <= ry + this.blockSize) {    // above the bottom
      return true;
    }
    return false;
  }

  squareSquareCollisionDetection(rect1, rect2) {
    if (
      rect1.x < rect2.x + this.blockSize &&
      rect1.x + this.blockSize > rect2.x &&
      rect1.y < rect2.y + this.blockSize &&
      rect1.y + this.blockSize > rect2.y
    ) {
      return true
    }
    return false;
  }



  animate = () => {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.draw();
    if (this.allowAnimation) requestAnimationFrame(this.animate)
  }

}

export default GeometricPuzzleAnimation;