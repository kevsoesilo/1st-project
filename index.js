let serviceRequested = []
let totalCost = 0
const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const taskListEl = document.getElementById("task-list")
const finalPrice = document.getElementById("total-value")
let isWashRequested = false
let isMowRequested = false
let isPullRequested = false

let taskCatalog = [
    {
        "name": "Wash car",
        "price": 10
    },
    {
        "name": "Mow lawn",
        "price": 20
    },
    {
        "name": "Pull weeds",
        "price": 30
    }
]

function render(array) {
    let itemList = ""
    for (let i = 0; i < array.length; i++) {
        itemList +=`
        <tr>
        <td>${array[i].name} <button id="remove-btn" onclick="removeTask(${i})">Remove</button></td>
        <td style="text-align: right">$${array[i].price}</td>
        </tr>`
    }
    taskListEl.innerHTML = itemList
    finalPrice.textContent = "$" + totalCost
}

function serviceBtnClicked (index) {
    serviceRequested.push(taskCatalog[index])
    totalCost += taskCatalog[index].price
    render(serviceRequested)
}

washBtn.addEventListener("click", function() {
    if(isWashRequested === false) {
        isWashRequested = true
        serviceBtnClicked(0)
    }
})

mowBtn.addEventListener("click", function() {
    if(isMowRequested === false) {
        isMowRequested = true
        serviceBtnClicked(1)
    }
})

pullBtn.addEventListener("click", function() {
    if(isPullRequested === false) {
        isPullRequested = true
        serviceBtnClicked(2)
    }
})

function removeTask (i) {
    if (serviceRequested[i].name === "Wash car") {
        isWashRequested = false
    } else if (serviceRequested[i].name === "Mow lawn") {
        isMowRequested = false
    } else {
        isPullRequested = false
    }
    totalCost -= serviceRequested[i].price
    finalPrice.textContent = "$" + totalCost
    serviceRequested.splice(i,1)
    render(serviceRequested)
}