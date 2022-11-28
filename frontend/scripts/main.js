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
        const contenedor = document.getElementById('tasksContainer');

        categorias.forEach(element => {
            const descripcion = element.descripcion;
            const color = element.color;
            const fila = ` 
                <div class="card flex-item" style="width: 18rem;">
                    <h4 style="color:${color}">
                        ${descripcion}
                    </h4>
                    <p id="${descripcion}Tasks">
                    </p>
                </div>
            `;
            axios.get('http://localhost:3000/tasks/category/'+descripcion+'?token=123').then((response) => {
                const tareas = response.data;
                const contenedor = document.getElementById(descripcion+'Tasks');

                tareas.forEach(element => {
                    const _id = element._id;
                    const descripcion = element.descripcion;
                    const observacion = element.observacion;
                    console.log(_id);
                    const fila = ` 
                        <div class="card flex-item" style="width: 100%;">
                            <div class="card-body">
                            <h5 class="card-title">${descripcion}</h5>
                            <p class="card-text">${observacion}</p>
                            <a id="${_id}" href="../editActivity.html?task=${_id}" class="btn btn-primary">Edit Task</a>
                            </div>
                        </div>
                    `;
                contenedor.innerHTML += fila;
                });
            });
            contenedor.innerHTML += fila;
        });

    });
}

function editTask(taskId) {
    console.log("Le pique al boton: " + taskId)
    //window.location.href = window.location.origin + "/editActivity.html";

    axios.get('http://localhost:3000/tasks/'+taskId+'/?token=123').then((respuesta) => { 
        const tarea = respuesta.data;
        console.log("Tarea front " + tarea.descripcion);
    }) 

    /*axios.put('http://localhost:3000/tasks/update/'+taskId+'?token=123').then((respuesta) => { //http://localhost:3000/tasks/update/637ed7d8b886c63ac472227c?token=123    
        //console.log(window.location)
        const tarea = respuesta.data;
        console.log("Tarea front" + tarea);
        /*const contenedor = document.getElementById('priority');

        categorias.forEach(element => {
            const descripcion = element.descripcion;
            const fila = `                
                <option value="${descripcion}">${descripcion}</option>
            `;
            contenedor.innerHTML += fila;
        });

    }) */
}


function getCategoriesSelect() {
    axios.get('http://localhost:3000/categories/?token=123').then((respuesta) => {
        const categorias = respuesta.data;
        const contenedor = document.getElementById('prioridad');

        categorias.forEach(element => {
            const descripcion = element.descripcion;
            const fila = `                
                <option value="${descripcion}">${descripcion}</option>
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

function UpdateTask() {
    const form = document.getElementById('formTask');
    const campos = {};
    console.log(document.location.search);
    let params = new URLSearchParams(document.location.search);
    const taskId = params.get("task")
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const elementosForm = this.querySelectorAll(".form-Item")
        console.log(elementosForm);
        elementosForm.forEach(function (elemento) {
            campos[elemento.name] = elemento.value;
        })
        console.log(campos);

        axios.put('http://localhost:3000/tasks/update/'+taskId+'?token=123', campos).then((respuesta) => {
            console.log(respuesta);
        });
    })
}


function initEditTask() {
    console.log(document.location.search);
    let params = new URLSearchParams(document.location.search);
    const taskId = params.get("task")
    console.log(taskId); 

    axios.get('http://localhost:3000/categories/?token=123').then((respuesta) => {
        const categorias = respuesta.data;
        const contenedor = document.getElementById('prioridad');

        categorias.forEach(element => {
            const descripcion = element.descripcion;
            const fila = `                
                <option value="${descripcion}">${descripcion}</option>
            `;
            contenedor.innerHTML += fila;
        });
    }).then(data=>{
        axios.get('http://localhost:3000/tasks/'+taskId+'?token=123').then((respuesta) => {
            console.log(respuesta);
            return respuesta.data;
        }).then(respuesta => {
            console.log(respuesta)
            return(respuesta)
        }).then(respuesta => {
            document.getElementById('descripcion').value = respuesta.descripcion;
            console.log(respuesta.prioridad)
            document.getElementById('observacion').value = respuesta.observacion;
            document.getElementById('prioridad').value = respuesta.prioridad;
            document.getElementById('fecha_inicio').value = new Date(respuesta.fecha_inicio).toISOString().substring(0,10);
            document.getElementById('fecha_fin').value = new Date(respuesta.fecha_fin).toISOString().substring(0,10);
        })  
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