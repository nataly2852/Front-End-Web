  let w = 5;
let grid;
const [
  SEED,
  STEM,
  BUD,
  FLOWER1,
  FLOWER2, //currently nothing..
  DIRT,
  BRANCH,
  MINIBRANCH,
  LEAF,
  LEAFEND,
  NOTHING,
] = [
  "seed",
  "stem",
  "bud",
  "flower1",
  "flower2",
  "dirt",
  "branch",
  "minibranch",
  "leaf",
  "leafend",
  "nothing",
];
const COLOR = {
  seed: "yellow",
  stem: "brown",
  bud: "white",
  flower1: "red",
  flower2: "pink",
  dirt: "orange",
  branch: "brown",
  minibranch: "brown",
  leaf: "green",
  leafend: "lightgreen",
  nothing: "black",
};

// let life;
// let activate = false;

function setup() {
  createCanvas(300, 600);

  grid = new Grid(width / w, height / w);

  grid.forEach((i, j) => {
    if (grid.bottom(i, j) === undefined) {
      grid.set(i, j, DIRT);
    }
  });
  frameRate(300);
  // life = 120;

  let i = floor(width / 2 / w);
  let j = floor(height / 2 / w);
  grid.set(i, j + 10, new SeedCell(i, j + 10)); // Place the seed
  // grid.set(i + 1, j, new SeedCell(i + 1, j)); // Place the seed
  // grid.set(i - 1, j, new SeedCell(i - 1, j));
  // grid.set(i + 2, j, new SeedCell(i + 2, j));
  // grid.set(i - 2, j, new SeedCell(i - 2, j));
  // grid.set(i, j + 1, new SeedCell(i, j + 1));
  // grid.set(i + 1, j - 1, new SeedCell(i + 1, j + 1));
  // grid.set(i - 1, j - 1, new SeedCell(i - 1, j + 1));
}

function draw() {
  let newGrid = grid.clone();
  if (randomt === 0) {
    randomt = 0;
  }

  if (activate === true) {
    start--;
  }

  // console.log(start);

  // if (activate === true) {
  //   life--;
  //   console.log(life);
  // }

  grid.forEach((i, j) => {
    let cell = grid.at(i, j);
    
    

    if (cell && typeof cell.update === "function" && !cell.frozen) {
      cell.update(grid, newGrid);
    }
    cell.show();

    let above = newGrid.top(i, j);
    let below = newGrid.bottom(i, j);
    let right = newGrid.right(i, j);
    let left = newGrid.left(i, j);

    // if (cell.val === BUD) {
    //   activate = true;
    //   console.log("activated!");
    //   if (life === NOTHING) {
    //     newGrid.at(i, j + 1, FLOWER1);
    //     newGrid.at(i, j - 1, FLOWER1);
    //     newGrid.at(i - 1, j, FLOWER1);
    //     newGrid.at(i + 1, j, FLOWER1);
    //     activate = false;
    //   }
    //   if (life === -1) {
    //     activate = true;
    //   }
    // }
  });

  grid = newGrid;
}

function mousePressed() {
  // let i = floor(width/2 / w);
  // let j = floor(height/2 / w);

  let currentCell = grid.at(i, j);
  console.log("Before placing seed:", currentCell);

  // grid.set(i, j, new SeedCell(i, j)); // Place the seed
}

function keyPressed() {
  // refresh the page
  if (keyCode === ENTER) {
    setup();
  }
}
