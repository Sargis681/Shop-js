let f = [];

let i=1
function signIn() {
  let id = 1
     if(localStorage.getItem('id') !== null){
      id = +localStorage.getItem('id') + 1
  }
  localStorage.setItem(`id`, id)
  if (
    user.value === "sargis" && pass.value === "1111"
  ) {
    location.assign("admin.html");
  }
 
}
let a=12
console.log();