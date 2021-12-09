const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const container = document.querySelector(".container")
const btnContainer = document.querySelector(".btn-container")
const items = document.querySelector(".section-center")
const classList = "btn btn-outline-dark btn-item"

let menu1,menu2,menu3,menu4

function menuler() {
    // all
    menu1 = document.createElement("button")
    menu1.classList = classList
    menu1.innerHTML = "All"
    btnContainer.appendChild(menu1)

    // korea
    menu2 = document.createElement("button")
    menu2.classList = classList
    menu2.innerHTML = "Korea"
    btnContainer.appendChild(menu2)

    // japan
    menu3 = document.createElement("button")
    menu3.classList = classList
    menu3.innerHTML = "Japan"
    btnContainer.appendChild(menu3)

    // china
    menu4 = document.createElement("button")
    menu4.classList = classList
    menu4.innerHTML = "China"
    btnContainer.appendChild(menu4)
}

// items 
// const item = document.createElement("div")
// item.classList = "menu-items col-lg-6 col-sm-12"
// items.appendChild(item)
// const img = document.createElement("img")
// item.appendChild(img)
// const menu_info = document.createElement("div")
// item.appendChild(menu_info)
// menu_info.classList ="menu-info"
// const menu_title = document.createElement("div")
// menu_title.classList = "menu-title"
// menu_info.appendChild(menu_title)
// const h4Title = document.createElement("h4")
// menu_title.appendChild(h4Title)
// const h4Price = document.createElement("h4")
// h4Price.classList ="price"
// menu_title.appendChild(h4Price)
// const menu_text = document.createElement("div")
// menu_text.classList = "menu-text"
// menu_info.appendChild(menu_text)




// --> items 

menuler()
addEventListeners()

function FullMenu(menu){
  let menuItem = `<div class="menu-items col-lg-6 col-sm-12">
  <img src="${menu.img}" alt="${menu.title}" class="photo">
  <div class="menu-info">
    <div class="menu-title">
      <h4>${menu.title}</h4>
      <h4 class="price">${menu.price}</h4>
    </div>
    <div class="menu-text">
      ${menu.desc}
    </div>
  </div>
</div>`
  return menuItem
}







function addEventListeners() {
  // All
  menu1.addEventListener("click",run1)
  function run1(e) {
    items.innerHTML = ""
    const filteR = menu.filter((filter) => filter.category)

    filteR.forEach(element => {
      
      items.innerHTML += (FullMenu(element))
      
    })
    
    e.preventDefault()
  }

}
  /*
  id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc:
    */
  // Korea
  menu2.addEventListener("click",run2)
  function run2(e) {
    items.innerHTML = ""
    const filteR = menu.filter((filter) => filter.category === "Korea")

    filteR.forEach(element => {
      
      items.innerHTML += (FullMenu(element))
      
    })
    
    e.preventDefault()
  }


menu3.addEventListener("click",run3)
function run3(e) {
  items.innerHTML = ""
  const filteR = menu.filter((filter) => filter.category === "Japan")

  filteR.forEach(element => {
    
    items.innerHTML += (FullMenu(element))
    
  })
  
  e.preventDefault()
}


menu4.addEventListener("click",run4)
function run4(e) {
  items.innerHTML = ""
  const filteR = menu.filter((filter) => filter.category === "China")

  filteR.forEach(element => {
    
    items.innerHTML += (FullMenu(element))
    
  })
  
  e.preventDefault()
}




