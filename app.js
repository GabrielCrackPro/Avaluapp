let params = new URLSearchParams(location.search).get("crear");
let formulario = document.querySelector("form");

if (params == "ciclo") {
  formulario.innerHTML = `
  <div class="mb-3 w-100">
      <label for="ciclo-codigo">Codigo de ciclo</label>
      <input type="text" class="form-control" id="ciclo-codigo" placeholder="Código del ciclo">
      <label for="ciclo-nombre" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="ciclo-nombre" placeholder="Nombre del ciclo">
      <input type="submit" class="form-control btn btn-primary" value="Crear"/>
    </div>
  `;
} else if (params == "modulo") {
  formulario.innerHTML = `
  <div class="mb-3 w-100">
      <label for="ciclo-modulo">Ciclo Formativo</label>
      <select id="ciclo-modulo" class="form-select">
      <option value="Selecciona un ciclo" selected>Selecciona un ciclo</option>
      </select>
      <label for="ciclo-codigo">Codigo de módulo</label>
      <input type="text" class="form-control" id="modulo-codigo" placeholder="Codigo del módulo">
      <label for="ciclo-nombre" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="ciclo-nombre" placeholder="Nombre del modulo">
      <input type="submit" class="form-control btn btn-primary" value="Crear"/>
    </div>
  `;
} else if (params == "nivel") {
  formulario.innerHTML = `
  <div class="mb-3 w-100">
      <label for="ciclo-modulo">Ciclo Formativo</label>
      <select id="ciclo-modulo" class="form-select">
      <option value="Selecciona un ciclo" selected>Selecciona un ciclo</option>
      </select>
      <select id="ciclo-nivel" class="form-select mb-2 mt-2">
      <option value="Selecciona un nivel" selected>Selecciona un nivel</option>
      <option value="1">1er Curso</option>
      <option value="2">2do Curso</option>
      </select>
      <input type="submit" class="form-control btn btn-primary" value="Crear"/>
    </div>
  `;
} else if (params == "tema") {
  formulario.innerHTML = `
  <div class="mb-3 w-100">
      <label for="ciclo-modulo">Ciclo Formativo</label>
      <select id="ciclo-modulo" class="form-select">
      <option value="Selecciona un ciclo" selected>Selecciona un ciclo</option>
      </select>
      <select id="ciclo-nivel" class="form-select mb-2 mt-2">
      <option value="Selecciona un nivel" selected>Selecciona un nivel</option>
      <option value="1">1er Curso</option>
      <option value="2">2do Curso</option>
      </select>
      <select id="ciclo-modulo" class="form-select mb-2 mt-2">
      <option value="Selecciona un nivel" selected>Selecciona un módulo</option>
      </select>
      <label for="tema-titulo">Titulo del tema</label>
      <input id="tema-titulo" class="form-control mb-2" placeholder="titulo del tema"/>
      <label for="tema-descripcion">Descripcion del tema</label>
      <textarea rows="5" cols="20" class="form-control mb-2" id="tema-descripcion" placeholder="Descripción del tema"></textarea>
      <input type="submit" class="form-control btn btn-primary" value="Crear"/>
    </div>
  `;
} else if (params == "actividad") {
  formulario.innerHTML = `
  <div class="mb-3 w-100">
      <label for="ciclo-modulo">Ciclo Formativo</label>
      <select id="ciclo-modulo" class="form-select">
      <option value="Selecciona un ciclo" selected>Selecciona un ciclo</option>
      </select>
      <select id="ciclo-nivel" class="form-select mb-2 mt-2">
      <option value="Selecciona un nivel" selected>Selecciona un nivel</option>
      <option value="1">1er Curso</option>
      <option value="2">2do Curso</option>
      </select>
      <select id="ciclo-modulo" class="form-select mb-2 mt-2">
      <option value="Selecciona un nivel" selected>Selecciona un módulo</option>
      </select>
      </select>
      <select id="actividad-tema" class="form-select mb-2 mt-2">
      <option value="Selecciona un tema" selected>Selecciona un tema</option>
      </select>
      <label for="actividad-titulo">Titulo de la actividad</label>
      <input id="actividad-titulo" class="form-control mb-2" placeholder="titulo de la actividad"/>
      <label for="tema-descripcion">Descripcion de la actividad</label>
      <textarea rows="5" cols="20" class="form-control mb-2" placeholder="Descripción de la actividad"></textarea>
      <input type="submit" class="form-control btn btn-primary" value="Crear"/>
    </div>
  `;
} else if (params == "ra") {
  formulario.innerHTML = `
  <div class="mb-3 w-100">
      <label for="ciclo-modulo">Ciclo Formativo</label>
      <select id="ciclo-modulo" class="form-select">
      <option value="Selecciona un ciclo" selected>Selecciona un ciclo</option>
      </select>
      <select id="ciclo-nivel" class="form-select mb-2 mt-2">
      <option value="Selecciona un nivel" selected>Selecciona un nivel</option>
      <option value="1">1er Curso</option>
      <option value="2">2do Curso</option>
      </select>
      <label for="ra-codigo">Código del RA</label>
      <input id="ra-codigo" class="form-control" placeholder="Codigo del RA">
      <label for="ra-titulo">Titulo del RA</label>
      <input id="ra-titulo" class="form-control" placeholder="Titulo del RA">
      <label for="ra-descripcion">Descripcion del RA</label>
      <textarea rows="5" cols="20" class="form-control mb-2" id="ra-descripcion" placeholder="Descripción del RA"></textarea>
      <input type="submit" class="form-control btn btn-primary" value="Crear"/>
    </div>
  `;
} else if (params == "ce") {
  formulario.innerHTML = `
  <div class="mb-3 w-100">
      <label for="ciclo-modulo">Ciclo Formativo</label>
      <select id="ciclo-modulo" class="form-select">
      <option value="Selecciona un ciclo" selected>Selecciona un ciclo</option>
      </select>
      <select id="ciclo-nivel" class="form-select mb-2 mt-2">
      <option value="Selecciona un nivel" selected>Selecciona un nivel</option>
      <option value="1">1er Curso</option>
      <option value="2">2do Curso</option>
      </select>
      <select id="ra-ce" class="form-select mb-2 mt-2">
      <option value="Selecciona un RA" selected>Selecciona un RA</option>
      </select>
      <label for="ce-codigo">Código del criterio</label>
      <input id="ce-codigo" class="form-control" placeholder="Codigo del criterio">
      <label for="ce-titulo">Titulo del criterio</label>
      <input id="ce-titulo" class="form-control" placeholder="Titulo del criterio">
      <label for="ce-descripcion">Descripcion del Criterio</label>
      <textarea rows="5" cols="20" class="form-control mb-2" id="ra-descripcion" placeholder="Descripción del Criterio"></textarea>
      <input type="submit" class="form-control btn btn-primary" value="Crear"/>
    </div>
  `;
}

let div_ok = document.getElementById("ok_message");

formulario.addEventListener("submit", (event) => {
  //display de creacion de elemento
  event.preventDefault();
  let seleccion = document.querySelectorAll("input");
  seleccion.forEach((campo) => {
    if(!campo.value){
      div_ok.textContent="No pueden haber campos vacíos"
      div_ok.classList.replace("alert-success", "alert-danger");
    }else{
        div_ok.textContent="Creación correcta!";
    }
  })
  div_ok.classList.remove("d-none");

  //eliminar el display de creacion de elemento
  setTimeout(() => {div_ok.classList.add("d-none")},2000);
});
