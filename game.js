let player1 = {}
let player2 = {}

function create(game) {
  player1 = {
    x: 0,
    y: 0,
  }
  player2 = {
    x: 0,
    y: 23,
  }

  game.setDot(player1.x, player1.y, Color.Green)
  game.setDot(player2.x, player2.y, Color.Blue)
}

function update(game) {}

function onKeyPress(direction) {
  if (direction == Direction.Up) {
    player1.y--
  }
  if (direction == Direction.Down) {
    player1.y++
  }
  if (direction == Direction.Left) {
    player1.x--
  }
  if (direction == Direction.Right) {
    player1.x++
  }

  if (direction == Direction.Up) {
    player2.y--
  }
  if (direction == Direction.Down) {
    player2.y++
  }
  if (direction == Direction.Left) {
    player2.x--
  }
  if (direction == Direction.Right) {
    player2.x++
  }
}

let config = {
  create: create,
  update: update,
  onKeyPress: onKeyPress,
}

let game = new Game(config)
game.run()
