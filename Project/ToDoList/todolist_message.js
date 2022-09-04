//Global variable
const list_message = document.querySelector(".list_message")
const input = document.querySelector(".text")
const Addbutton = document.querySelector(".button_add_message")
const DeleteAllbutton = document.querySelector(".button_deleteAll_message")

//Global list
let todoList = []
let deletebuttons = []

///////////////////////////////////////////////////////

//When click the add-button
Addbutton.addEventListener('click',(event)=>{
    event.preventDefault()
    
    const newdiv = document.createElement("div")
    const deleteButton = document.createElement("button")

    createNewTodo()
    storeTodo()
    storeDeleteButton()
    deleteOnclick()
    
    function createNewTodo(){
        newdiv.classList.add("list-section")
        let value = input.value
        newdiv.textContent = value
        list_message.append(newdiv)
        deleteButton.classList.add("deletebutton")
        deleteButton.textContent = "Delete"
        deleteButton.id = new Date().getTime()
        newdiv.append(deleteButton)
        newdiv.dataset.listId = deleteButton.id
    }  
    
    function storeTodo(){
        //Store each todo's name and dataset
        const newdivInfo = {}
        let value = input.value
        newdivInfo.todo = value
        newdivInfo.data = deleteButton.id
        todoList.push(newdivInfo)
        console.log("todoList: ",todoList)
    }

    function storeDeleteButton(){
        const newdelete = {}
        newdelete.button = deleteButton
        newdelete.id = deleteButton.id
        deletebuttons.push(newdelete)
        console.log("deletebuttons: ", deletebuttons)
    }
    function deleteOnclick(){
        deleteButton.onclick = function () {
            console.clear()
            todoList = todoList.filter((each_todo) => {
                if (deleteButton.id === each_todo.data) {
                    return false
                }
                else{
                    return true
                }
            })
    
            deletebuttons = deletebuttons.filter((each_delete)=>{
                if(deleteButton.id === each_delete.id) {
                    return false
                }
                else{
                    return true
                }
            })
            console.log("todoList: ",todoList)
            console.log("deletebuttons: ", deletebuttons)
    
            if (deleteButton.id === newdiv.dataset.listId) {
                newdiv.remove()
            }
        } 
    
    }
   
    input.value = ""
})  

DeleteAllbutton.addEventListener("click", ()=>{
    list_message.innerHTML = ""
})

