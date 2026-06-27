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
    isLocked: false
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
    isLocked: true
  },
  {
    name: 'Room 5',
    items: 'coins',
    energyCost: 65,
    isLocked: false
  }
]
// ! displayRooms function
function displayRooms () {
  rooms.forEach(element => {
    console.log(element.name, element.energyCost, element.isLocked)
  })
}

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
    if (rm.isLocked === true) {
      console.log(`the ${roomName} is Locked, Go find the key `)
      return
    } else {
      if (player.energy > rm.energyCost) {
        player.energy -= rm.energyCost
        player.currentRoom = rm.name
        console.log(`Success! You entered ${rm.name}.`)
        console.log(`Remaining Energy: ${player.energy}`)
      } else {
        console.log('Not enough energy!')
        player.isAlive = false
        console.log('Game Over')
      }
    }
  }
}

//  ! collectItem function
function collectItem () {
  const currentRoomObj = rooms.find(room => room.name === player.currentRoom)
  if (!currentRoomObj.items) {
    console.log('There is nothing to collect here.')
    return
  }
  let itemInRoom = currentRoomObj.items
  if (player.inventory.includes(itemInRoom)) {
    console.log(`You already have the ${itemInRoom} in your inventory.`)
  } else {
    player.inventory.push(itemInRoom)
    currentRoomObj.items = null
    console.log(`You picked up the ${itemInRoom}!`)
  }
}

// ! unlockRoom function
function unlockRoom (roomName) {
  if (player.inventory.includes('key')) {
    const rm = rooms.find(room => room.name === roomName)
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

//  ! removeItem function
function removeItem (toDelete) {
  if (player.inventory.indexOf(toDelete) != -1) {
    player.inventory.splice(player.inventory.indexOf(toDelete), 1)
    return
  }
  else{
    console.log('not found !');
    
  }
}

//  ! showInventory function
function showInventory () {
  player.inventory.forEach(element => {
    console.log(element)
  })
}

//  ! sortRoomsByEnergy function
function sortRoomsByEnergy () {
  rooms.sort((a, b) => a.energyCost - b.energyCost)
  let energySort = rooms.map(room => room.energyCost)
  console.log(energySort);
  
}

// ! Playing the game
displayRooms()
collectItem()
enterRoom('Room 2')
console.log(player.inventory)

collectItem()
enterRoom('Room 5')
console.log(player.inventory)
collectItem()
console.log(player.inventory)
unlockRoom('Room 4')
removeItem('key')
console.log(player.inventory)
enterRoom('Room 4')
collectItem()
showInventory()
sortRoomsByEnergy()

rooms.forEach(element => {
  console.log(element.energyCost)
})

//  ! generateGameReport function
console.log(`<----- GAME REPORT ----->`)
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
