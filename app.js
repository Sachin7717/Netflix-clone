let emailbox=document.querySelector('.emailbox');
let input = document.querySelector('input')
input.addEventListener("focus",()=>{
    document.querySelector("p").classList.remove("hide")
    input.attributes.removeNamedItem("placeholder")
    })

input.addEventListener('blur',()=>{
    if(input.value===""){
        document.querySelector("p").classList.add("hide")
        input.placeholder="Email Address"
    }
})