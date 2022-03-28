

async function getPost () {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let content = await response.json()
    content = content.splice(0, 10)

    let list = document.querySelector(".posts")
    

let key;
for (key in content){
    list.innerHTML+=`
    <li class=post>
      <h4>${content[key].title}</h4>
      <p>${content[key].body}</p>
    </li>
    `

}
}
getPost()