var root = new Vue({
el: '#root',
data: {
// - creare una lista di cose da fare e mostrarla in pagina con Vue;
userInput: "",
todolist: [
  "Fare la spesa",
  "Comprare il pane",
  "Preparare la cena",
  "Caricare il telefono",
  "Dare la pappa a Chicco"
],
x: "x"
},
methods: {
  addtodo: function() {
    const input = this.userInput;
    this.todolist.push(input);
    this.userInput = "";
    },
}
})
