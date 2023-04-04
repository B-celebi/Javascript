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
//Sürekli kullanacağımız elementleri önce bir değişkene atıyoruz.
const cards = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//Button isimlerini dinamik olarak çekiyoruz.
let uniqueOnes = [...new Set(menu.map(a => a.category))];
uniqueOnes.unshift("All");  //En başa istisna olarak All category buttonu ekledik.
uniqueOnes.forEach(a => buttonMaker(a));

//Button yapıcı fonksiyonumuz
function buttonMaker(name) {
  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-outline-dark", "btn-item");
  btn.setAttribute('data-id', name);
  btn.onclick = changeMenu;
  btn.innerText = name;
  btnContainer.appendChild(btn);
}

//Sayfa açıldığında tüm itemleri çekiyoruz.
menu.forEach((a) => { destructuring(a) });


function changeMenu(item) {
  //Buttona tıklandığında daha önceki içeriği siliyoruz
  if (cards.firstChild) {
    while (cards.firstChild) {
      cards.removeChild(cards.firstChild);
    }
  }
  //Yeni içeriği Category Name ile Button içeriğindeki isim eşitliğine göre oluşturuyoruz.
  menu.forEach((a) => {
    if (this.innerText == a.category) {
      destructuring(a);
    } else if (this.innerText == "All") {
      destructuring(a);
    }
  })
}

//Fetching items // İtemleri çeken fonksiyon
function destructuring({ id, title, category, price, img, desc }) {
  const div = document.createElement("div");
  const photo = document.createElement("img");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");

  //Her şeyi kapsayan divimiz içerisinde bir img ve bir div bulunduracak
  div.classList.add("menu-items", "col-lg-6", "col-sm-12");

  photo.classList.add("photo");
  photo.src = img;
  photo.alt = title;

  div2.classList.add("menu-info");
  //içerisinde iki div bulunduracak div3 ve div4

  div3.classList.add("menu-title");
  let h4s = `<h4>${title}</h4>
  <h4 class="price">${price}</h4>`;
  div3.innerHTML = h4s;

  div4.classList.add("menu-text");
  div4.innerText = desc;

  div2.append(div3, div4);

  div.append(photo, div2);
  cards.appendChild(div);
}


