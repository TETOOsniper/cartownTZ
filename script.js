var cars = [];
var selectedCar = null;

// Función para crear un cliente con una tarea aleatoria
function createCustomer() {
  var tasks = ["Check oil level", "Change oil", "Check tire pressure", "Wash car"];
  var taskIndex = Math.floor(Math.random() * tasks.length);
  var task = tasks[taskIndex];
  return { task: task };
}

// Función para mostrar un cliente en la lista de clientes
function displayCustomer(customer) {
  var customerList = document.getElementById("customer-list");
  var customerDiv = document.createElement("div");
  customerDiv.className = "customer";
  customerDiv.textContent = "Cliente: " + customer.task;
  customerList.appendChild(customerDiv);
}

// Función para servir a un cliente y realizar la tarea
function serveCustomer() {
  var customer = createCustomer();
  displayTask(customer.task);
  removeCustomer();
}

// Función para eliminar al cliente servido de la lista de clientes
function removeCustomer() {
  var customerList = document.getElementById("customer-list");
  customerList.removeChild(customerList.firstChild);
}

// Función para mostrar la tarea realizada en el registro de tareas
function displayTask(task) {
  var taskList = document.getElementById("tasks");
  var taskItem = document.createElement("li");
  taskItem.textContent = task;
  taskList.appendChild(taskItem);
}

// Crea algunos autos de ejemplo en el garage
var garage = document.getElementById("garage");
for (var i = 0; i < 10; i++) {
  var car = document.createElement("div");
  car.className = "car";
  car.id = "car-" + (i + 1);
  car.addEventListener("click", function () {
    selectCar(this.id);
  });
  garage.appendChild(car);
  cars.push(car);
}

// Función para seleccionar un auto
function selectCar(id) {
  if (selectedCar) {
    selectedCar.classList.remove("selected");
  }
  selectedCar = document.getElementById(id);
  selectedCar.classList.add("selected");
}

// Crea algunos clientes de ejemplo
for (var i = 0; i < 5; i++) {
  displayCustomer(createCustomer());
}
