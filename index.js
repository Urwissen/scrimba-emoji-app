
const main = document.querySelector(".main")
const title = document.createElement("h1")
const inputField = document.createElement("input")

const lst = []

const inject = () => {
    
    
    const container = document.createElement("div")
    container.classList.add("container")
    main.appendChild(container)

    title.classList.add("title")
    title.textContent = "App Title"
    container.appendChild(title)

    inputField.classList.add("input-field")
    container.appendChild(inputField)

    function createBtn(func, position) {
        const btn = document.createElement("button")
        const type = func + position
        console.log("Type:" +type)

        if (type === "addStart") {
            setBtn(type)
        } else if (type === "addEnd") {
            setBtn(type)
        } else if (type === "removeStart") {
            setBtn(type)
        } else if (type === "removeEnd") {
            setBtn(type)
        }

        function resetInput() {  
            inputField.value = ""
            console.log("lst: "+lst)
        }

        function setBtn(nameOfClass) {
            btn.classList.add(nameOfClass)
            container.appendChild(btn)

            if (type === "addStart") {
                btn.textContent = `${func} ${position}`
                btn.addEventListener("click", () => {
                    const input = inputField.value
                    lst.unshift(input)
                    resetInput()
                })
            } else if (type === "addEnd") {
                btn.textContent = `${func} ${position}`
                btn.addEventListener("click", () => {
                    const input = inputField.value
                    lst.push(input)
                    resetInput()
                })
            } else if (type === "removeStart") {
                btn.textContent = `${func} ${position}`
                btn.addEventListener("click", () => {
                
                    lst.shift()
                    resetInput()
                })
                
            } else if (type === "removeEnd") {
                btn.textContent = `${func} ${position}`
                btn.addEventListener("click", () => {
                    
                    lst.pop()
                    resetInput()
                })
                
            }

        }

       

        

    }

    createBtn("add", "Start")
    createBtn("add", "End")
    createBtn("remove", "Start")
    createBtn("remove", "End")
}

inject()




