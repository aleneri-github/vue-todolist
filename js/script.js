var root = new Vue({
el: '#root',
data: {
// - creare una lista di cose da fare e mostrarla in pagina con Vue;
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
    console.log('click');

    },
}
})
