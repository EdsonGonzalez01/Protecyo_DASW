function getTasks() {
    axios.get('http://localhost:3000/tasks/?token=123').then((respuesta) => {
        const tareas = respuesta.data;
        const contenedor = document.getElementById('taskList');

        tareas.forEach(element => {
            const descripcion = element.descripcion;
            const fila = `                
                <li class="list-group-item border-0 d-flex align-items-center ps-0">
                    <input class="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                    ${descripcion}
                </li>
            `;
            contenedor.innerHTML += fila;
        });

    })
}


function getCategories() {
    axios.get('http://localhost:3000/categories/?token=123').then((respuesta) => {
        const categorias = respuesta.data;
        const contenedor = document.getElementById('headersCategories');

        categorias.forEach(element => {
            const descripcion = element.descripcion;
            const color = element.color;
            const fila = `                
                <th style="color:${color}">
                    ${descripcion}
                </th>
            `;
            contenedor.innerHTML += fila;
        });

    })
}


function initCreateTask() {
    const form = document.getElementById('formTask');
    const campos = {};
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const elementosForm = this.querySelectorAll(".form-Item")
        console.log(elementosForm);
        elementosForm.forEach(function (elemento) {
            campos[elemento.name] = elemento.value;
        })
        console.log(campos);

        axios.post('http://localhost:3000/tasks/create?token=123', campos).then((respuesta) => {
            console.log(respuesta);

        });
    })
}


function initCreateCategory() {
    const form = document.getElementById('formCategory');
    const campos = {};
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const elementosForm = this.querySelectorAll(".form-category-Item")
        console.log(elementosForm);
        elementosForm.forEach(function (elemento) {
            campos[elemento.name] = elemento.value;
        })
        console.log(campos);

        axios.post('http://localhost:3000/categories/create?token=123', campos).then((respuesta) => {
            console.log(respuesta);

        });
    })
}