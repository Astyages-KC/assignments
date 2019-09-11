const todoListContainer = document.getElementById("todoList")

function getTodos () {
        axios.get("https://api.vschool.io/kevinclark/todo")
    .then(response => {
        const todos = response.data
        listToDOM(todos)
    })
    .catch(function(error) {
        console.log(error);
    })
}
    getTodos()

function listToDOM(arr){
    for(let i = 0; i < arr.length; i++) {
        const todoContainer = document.createElement("div")
        const h1 = document.createElement("h1")
        const para = document.createElement("p")
        const image = document.createElement("img")
        const delBtn = document.createElement("button")

        h1.textContent = arr[i].title
        todoContainer.textContent = arr[i]._id
        para.textContent = arr[i].description
        image.src = arr[i].imgUrl
        delBtn.textContent = "Delete"   

        delBtn.addEventListener("click", function() {

        })
        todoListContainer.appendChild(todoContainer)
        todoContainer.appendChild(h1)
        todoContainer.appendChild(para)
        todoContainer.appendChild(image)
        todoContainer.appendChild(delBtn)

    }
}

const form = document.getElementById("form")
form.addEventListener("submit", function(e) {
    e.preventDefault()
    const title = form.title.value
    const description = form.description.value
    const price = form.price.value
    const image = form.image.value

    const newTodo = {
        title: title,
        description: description,
        price: price,
        imgUrl: image
        }

        axios.post("https://api.vschool.io/kevinclark/todo", newTodo)
        .then(response => {
            // getTodos()
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
})

// function gettingIdStuff() {
    enterId.addEventListener("submit", function(e) {
        e.preventDefault()
        idNum2 = enterId.idNum2.value
        axios.get("https://api.vschool.io/kevinclark/todo/" + idNum2)
        .then((response) => {
            console.log(response.data)
            form2.title.value = response.data.title
            form2.description.value = response.data.description
            form2.price.value = response.data.price
            form2.image.value = response.data.imgUrl
            
        })
        .catch(error => {
            console.log(error)
        })
    })

    const newTodo2 = {
        title: form2.title2,
        description: form2.description,
        price: form2.price,
        imgUrl: form2.image
        }

        axios.get("https://api.vschool.io/kevinclark/todo/" + newTodo2)
        .then((response) => {
            corm.addEventListener("submit", function(e) {
                e.preventDefault()
                const title = form2.title.value
                const description = form2.description.value
                const price = form2.price.value
                const image = form2.image.value
        })
        .catch(error => {
            console.log(error)
        
    })

    // console.log(idNum2)
        // const idDescrption = enterId.description.value
        // const idPrice = enterId.price.value
        // const idImage = enterId.imgUrl.value

    
        // 5d77fd11ade63c6fad8953ca

    //     const idNum2 = form2.idNum2.value
    //     const title2 = form2.title2.value
    //     const description2 = form2.description2.value
    //     const price2 = form2.price2.value
    //     const image2 = form2.image2.value


    


// "title": "addin-todo",
// "description": "funky",
// "price": 29,
// "imgUrl": "https://images.etc,
// "completed": false)
