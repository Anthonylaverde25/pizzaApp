const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// Clase que define una aplicación para mostrar detalles de pizzas
class PizzaApp {
  // Referencias a elementos HTML
  elements = {
    input: document.querySelector(".search__field"), // Campo de búsqueda
    pizzaImg: document.querySelector(".currentPizza__img"), // Imagen de la pizza
    title: document.querySelector(".currentPizza__title"), // Título de la pizza
    price: document.querySelector(".currentInfo__container"), // Contenedor de precio
    containerIngredients: document.querySelector(".ingredients"), // Lista de ingredientes
    containerGeneralIngredients: document.querySelector(
      ".currentInfo__Ingredients"
    ), // Contenedor de ingredientes generales
  };

  constructor(pizzas = []) {
    this.pizzas = pizzas; // Array de datos de pizzas
    this.handler(); // Configurar manejador de eventos para el botón de búsqueda
    this.loadDefaultPizza(); // Cargar pizza predeterminada al iniciar
    this.getFromLocalStore(); // Obtener y mostrar datos desde almacenamiento local si están disponibles
  }

  // Cargar pizza predeterminada al iniciar la aplicación
  loadDefaultPizza() {
    const defaultPizza = this.pizzas.find((pizza) => pizza.id === 1);
    this.renderPizza(defaultPizza);
  }

  // Guardar los datos de una pizza en el almacenamiento local
  saveToLocalStore(pizza) {
    localStorage.setItem("pizzaData", JSON.stringify(pizza));
  }

  // Obtener los datos de una pizza desde el almacenamiento local
  getFromLocalStore() {
    const lastSearch = localStorage.getItem("pizzaData");
    if (lastSearch) {
      const pizzaLocal = JSON.parse(lastSearch);
      this.renderPizza(pizzaLocal);
    }
  }

  // Configurar el manejador de eventos para el botón de búsqueda
  handler() {
    const btn = document.querySelector(".search__btn");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      this.searchPizzaByid();
    });
  }

  // Buscar y mostrar detalles de una pizza por su ID
  searchPizzaByid() {
    const input = document.querySelector(".search__field");
    const idPizza = +input.value;

    // Verificar si la pizza existe en los datos disponibles
    const pizzaExist = this.pizzas.some((pizza) => pizza.id === idPizza);

    let showError = false; // Variable para controlar la visualización del mensaje de error
    if (pizzaExist) {
      showError = false;
      const currentPizza = this.pizzas.find((pizza) => pizza.id === idPizza);
      this.saveToLocalStore(currentPizza); // Guardar los datos de la pizza en el almacenamiento local
      this.renderPizza(currentPizza); // Mostrar los detalles de la pizza
      this.renderError(showError, this.elements); // Ocultar el mensaje de error
    } else {
      showError = true;
      this.renderError(showError, this.elements); // Mostrar el mensaje de error
    }

    input.value = ""; // Limpiar el campo de búsqueda
    input.blur(); // Quitar el foco del campo de búsqueda
  }

  // Mostrar los detalles de una pizza en la página
  renderPizza(pizza) {
    const { id, nombre, precio, ingredientes, imagen } = pizza;
    const { input, pizzaImg, title, price, containerIngredients } =
      this.elements;

    title.innerHTML = `${nombre}`;
    pizzaImg.style.backgroundImage = `url(${imagen})`;
    this.insertHTML(precio, price, ingredientes, containerIngredients); // Insertar el HTML con el precio e ingredientes
  }

  // Insertar HTML para el precio e ingredientes de una pizza
  insertHTML(precio, price, ingredientes, containerIngredients) {
    // Crear un nuevo elemento div para mostrar el precio
    const newDiv = document.createElement("DIV");
    newDiv.classList.add("currentInfo__price");

    const H3 = document.createElement("H3");
    H3.innerHTML = `<p><span>${precio}</span></p>`;

    newDiv.appendChild(H3);

    price.innerHTML = ""; // Vaciar el contenido actual del contenedor de precio
    price.appendChild(newDiv);

    containerIngredients.innerHTML = ""; // Vaciar la lista de ingredientes actual
    ingredientes.forEach((ingredient) => {
      const html = `<li class="ingredient">${ingredient}</li>`;
      containerIngredients.insertAdjacentHTML("beforeend", html); // Agregar cada ingrediente a la lista
    });

    const generalIngredient = document.querySelector(
      ".currentInfo__Ingredients"
    );
    generalIngredient.style.opacity = "1"; // Mostrar el contenedor de ingredientes generales
  }

  // Mostrar u ocultar el mensaje de error
  renderError(show, elements) {
    const containerError = document.querySelector(".currenInfo__error");
    const { containerGeneralIngredients, price, title, pizzaImg } = elements;

    if (show) {
      containerError.style.display = "flex"; // Mostrar el mensaje de error
      containerGeneralIngredients.style.opacity = "0"; // Ocultar el contenedor de ingredientes generales
      price.innerHTML = ""; // Vaciar el contenido del precio
      pizzaImg.style.backgroundImage = ""; // Eliminar la imagen de la pizza
      title.style.opacity = "0"; // Ocultar el título de la pizza
    } else {
      containerError.style.display = "none"; // Ocultar el mensaje de error
      title.style.opacity = "1"; // Mostrar el título de la pizza
    }
  }
}

// Crear una instancia de la clase PizzaApp con los datos de las pizzas
const app = new PizzaApp(pizzas);
