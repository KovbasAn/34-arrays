function Product(name, amount, price, isBought) {
  this.name = name
  this.amount = amount
  this.price = price
  this.isBought = isBought
  this.cost = this.amount * this.price
}

let apples = new Product('apple', 20, 15, true);
let oranges = new Product('orange', 0.65, 60, true);
let avocados = new Product('avocado', 2, 32, false);
let bananas = new Product('banana', 1, 55, true);
let grapes = new Product('grape', 1.5, 80, false);
let eggs = new Product('egg', 10, 5.5, false);
let shoppingList = [apples, oranges, avocados, bananas, grapes]

function showNotBoughtFirst(list) {
  let arrNames = []
  for (let i = 0; i < list.length; i++) {
    if (list[i].isBought) {
      arrNames.push(list[i].name)
    } else {
      arrNames.unshift(list[i].name)
    }
  }
  console.log(arrNames)
}

function buyProduct(list, product) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name == product.name) {
      if (list[i].isBought == false) {
        list[i].isBought = true
      } else {
        return console.log('You have it already')
      }
    }
  }
}

function removeProduct(list, product) {
  let shoppingListNew = []
  for (let i = 0; i < list.length; i++) {
    if (list[i].name != product.name) {
      shoppingListNew.push(list[i])
    }
  }
  console.log(shoppingListNew)
}

function addProduct(list, product) {
  let isProduct = false
  for (let i = 0; i < list.length; i++) {
    if (list[i].name == product.name) {
      isProduct = true
      list[i].amount += product.amount
      list[i].cost = list[i].amount * list[i].price
    }
  }
  if (isProduct == false) {
    list.push(product)
  }
}

function totalCost(list) {
  const arr = []
  for (let i = 0; i < list.length; i++) {
    arr.push(list[i].cost)
  }
  console.log(arr)
  const initialValue = 0;
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
  console.log(sum)
}

function totalCostBought(list) {
  const arr = []
  for (let i = 0; i < list.length; i++) {
    if (list[i].isBought) {
      arr.push(list[i].cost)
    }
  }
  console.log(arr)
  const initialValue = 0;
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
  console.log(sum)
}


function totalCostNotBought(list) {
  const arr = []
  for (let i = 0; i < list.length; i++) {
    if (!list[i].isBought) {
      arr.push(list[i].cost)
    }
  }
  console.log(arr)
  const initialValue = 0;
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
  console.log(sum)
}

function sortByCost(list, riseOrFall) {
  let arrRise = []
  const listLength = list.length
  for (let j = 1; j <= listLength; j++) {
    let min = list[0].cost, iMin = 0
    for (let i = 0; i < list.length; i++) {
      if (list[i].cost < min) {
        min = list[i].cost
        iMin = i
      }
    }
    if (riseOrFall) {
      arrRise.push(list[iMin])
    } else {
      arrRise.unshift(list[iMin])
    }
    list.splice(iMin, 1)
  }
  console.log(arrRise)
}

sortByCost(shoppingList, true)