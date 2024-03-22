const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
const popup = document.getElementById("popup");

document.querySelectorAll(".add-item").forEach(element => {
  element.addEventListener("click", (e) => {
    const targetId = e.target.id
    userCart[targetId]++
    renderResults()
    console.log(userCart)
  })
});


const makeRemove = () => {
  document.querySelectorAll(".remove-item").forEach(element => {
  element.addEventListener("click", (e) => {
  const target = e.target.getAttribute("data-type")
  userCart[target]--
  renderResults()
  })
});}

document.getElementById("que-submit").addEventListener("click", () => {
  popup.style.visibility = "visible";
  document.getElementById("total-checkout").innerHTML = `$${userCart.total()}.00`;
})
document.querySelector(".close").addEventListener("click", () => {
  popup.style.visibility = "hidden";
})

const userCart = {
  HTML: 0,
  CSS: 0,
  JavaScript: 0,
  total() {return this.HTML * 10 + this.CSS * 20 + this.JavaScript * 30} ,
}
let userPopup = false;
let userCartHasItems = false;

const renderResults = () => {
  cartList.innerHTML = ``
  let newHTML = ``
  if (userCart.total() === 0) {
    cartList.innerHTML = `<li>
    <span>
      <span>Add some items to your cart!</span>
      <span class="remove-item-default">Nothing to remove</span>
    </span>
    <span>
      $0.00
    </span>
  </li>`;
  } else {
    if (userCart.HTML > 0) {
      if (userCart.HTML === 1) {
        cartList.innerHTML += `<li>
          <span>
            <span>HTML </span>
            <a data-type="HTML" class="remove-item"> Remove</a>
          </span>
          <span>
            $10.00
          </span>
          </li>`
      }else {
        cartList.innerHTML += `<li>
        <span>
          <span>${userCart.HTML}X HTML </span>
          <a data-type="HTML" class="remove-item"> Remove 1x</a>
        </span>
        <span>
         $${userCart.HTML * 10}.00
        </span>
        </li>`
      }
    } 
    if (userCart.CSS > 0) {
      if (userCart.CSS === 1) {
        cartList.innerHTML += `<li>
        <span>
          <span>CSS </span>
          <a data-type="CSS" class="remove-item"> Remove</a>
        </span>
        <span>
          $20.00
        </span>
      </li>`
        }else {
          cartList.innerHTML += `<li>
        <span>
          <span>${userCart.CSS}X CSS </span>
          <a data-type="CSS" class="remove-item"> Remove 1x</a>
        </span>
        <span>
          $${userCart.CSS * 20}.00
        </span>
      </li>`
        }
    }
    if (userCart.JavaScript > 0) {
      if (userCart.JavaScript === 1) {
        cartList.innerHTML += `<li>
        <span>
          <span>JavaScript </span>
          <a data-type="JavaScript" class="remove-item">Remove</a>
        </span>
        <span>
          $30.00
        </span>
      </li>`
        }else {
          cartList.innerHTML += `<li>
        <span>
          <span>${userCart.JavaScript}X JavaScript </span>
          <a data-type="JavaScript" class="remove-item"> Remove 1x</a>
        </span>
        <span>
          $${userCart.JavaScript * 30}.00
        </span>
      </li>`
        }
    }
  }
  cartTotal.innerHTML = `$${userCart.total()}.00`;
  makeRemove()
}




        // <li>
        //   <span>
        //     <span>item pulled from js</span>
        //     <span>Remove item</span>
        //   </span>
        //   <span>
        //     $js.pull
        //   </span>
        // </li>