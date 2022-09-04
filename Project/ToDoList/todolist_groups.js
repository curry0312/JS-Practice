//Global variable
const list_group = document.querySelector(".group-list")
const Add_group = document.querySelector(".button_add_group")

Add_group.addEventListener('click',()=>{
    const new_group = document.createElement("div")
    new_group.classList.add("new_group")
    list_group.append(new_group)
})