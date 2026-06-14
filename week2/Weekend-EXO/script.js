let player = {
  firstName: 'Ahmed',
  energy: 100,
  inventory: [],
  currentRoom: 'Room 1',
  isAlive: true
}
let rooms = [
  {
    name: 'Room 1',
    items: 'map',
    energyCost: 10,
    isLocked: true
  },
  {
    name: 'Room 2',
    items: 'key',
    energyCost: 20,
    isLocked: true
  },
  {
    name: 'Room 3',
    items: 'scroll',
    energyCost: 150,
    isLocked: true
  },
  {
    name: 'Room 4',
    items: 'gem',
    energyCost: 5,
    isLocked: false
  },
  {
    name: 'Room 5',
    items: 'coins',
    energyCost: 45,
    isLocked: false
  }
]
// ! displayRooms function
function displayRooms (arr) {
  arr.forEach(element => {
    console.log(element.name, element.energyCost, element.isLocked)
  })
}
displayRooms(rooms)

//  ! enterRoom function
function enterRoom (roomName) {
  if (player.currentRoom === roomName) {
    console.log(`You are already in ${roomName}.`)
    return
  } else {
    const rm = rooms.find(room => room.name === roomName)
    if (!rm) {
      console.log(`Error : ${roomName} Does not exist.`)
      return
    }
    if (player.energy >= rm.energyCost) {
      player.energy -= rm.energyCost
      player.currentRoom = rm.name
      console.log(`Success! You entered ${rm.name}.`)
      console.log(`Remaining Energy: ${player.energy}`)
    } else {
      console.log('Not enough energy!')
    }
  }
}
enterRoom('Room 2')
// enterRoom('Room 1')

//  ! collectItem function
function collectItem () {
  const currentRoomObj = rooms.find(room => room.name === player.currentRoom)
  if (!currentRoomObj || !currentRoomObj.items) {
    console.log('There is nothing to collect here.')
    return
  }
  const itemInRoom = currentRoomObj.items
  if (player.inventory.includes(itemInRoom)) {
    console.log(`You already have the ${itemInRoom} in your inventory.`)
  } else {
    player.inventory.push(itemInRoom)
    console.log(`You picked up the ${itemInRoom}!`)
  }
}
collectItem()
console.log(player.inventory)
enterRoom('Room 1')
collectItem()
console.log(player.inventory)
enterRoom('Room 4')
collectItem()
console.log(player.inventory)

// ! unlockRoom function
function unlockRoom () {
  if (player.inventory.includes('key')) {
    const rm = rooms.find(room => room.name === player.currentRoom)
    if (rm.isLocked === true) {
      rm.isLocked = false
      console.log(`You unlocked ${rm.name}!`)
    } else {
      console.log(`${rm.name} is already unlocked.`)
    }
  } else {
    console.log("You don't have the key to unlock this room.")
  }
}
unlockRoom()

//  !  removeItem function
function removeItem () {
  player.inventory.splice(player.inventory.indexOf('key'), 1)
  return
}
removeItem()
console.log(player.inventory)

//  ! showInventory function
function showInventory () {
  player.inventory.forEach(element => {
    console.log(element)
  })
}
showInventory()

//  ! sortRoomsByEnergy function
function sortRoomsByEnergy () {
  let cost = rooms.sort((a, b) => a.energyCost - b.energyCost)
  console.log(rooms.map(room => room.energyCost))
}
sortRoomsByEnergy()

console.log(`<----- GAME REPORT ----->`)

//  ! generateGameReport function
function generateGameReport () {
  console.log(`Player current room: ${player.currentRoom}`)
  console.log(`Player energy: ${player.energy}`)
  console.log(`Player total inventory items : ${player.inventory.length}`)
  let unlockedRooms = rooms
    .filter(room => room.isLocked === false)
    .map(room => room.name)
  console.log(`Unlocked rooms : ${unlockedRooms}`)
}
generateGameReport()
