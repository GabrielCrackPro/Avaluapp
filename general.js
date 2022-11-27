const main = document.querySelector("main");
const param = new URLSearchParams(location.search).get("tipo");


if (param == "ciclo") {
  main.innerHTML += `
  <h2 class="text-center">Ciclos</h1>
  <ul class="list-group">
  <div class="d-flex">
   <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Desarrollo de aplicaciones web</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
    </div>
    <div class="d-flex">
    <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Desarrollo de aplicaciones multiplataforma</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
     <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
     </div>
     <div class="d-flex">
     <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Administración de Sistemas Informáticos en Red</a>
     <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
      </div>
      <div class="d-flex">
      <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Sistemas Microinformáticos y Redes</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
       <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
       </div>
       <div class="d-flex">
       <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Especialización en Ciberseguridad en Entornos de las Tecnologías de la Información</a>
       <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
        </div>
        <div class="d-flex">
        <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Especialización en Inteligencia Artificial y Big Data</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
         <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
         </div>
         <a href="./formulario.html?crear=ciclo" class="list-group-item list-group-item-action list-group-item-primary"><i class="fa-solid fa-plus"></i> Añadir</a>
  </ul>
  `;
} else if (param == "modulo") {
  main.innerHTML += `
  <h2 class="text-center">Módulos</h1>
  <ul class="list-group">
  <div class="d-flex">
  <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Bases de datos</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
   </div>
   <div class="d-flex">
   <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Entornos de desarrollo</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
    </div>
    <div class="d-flex">
   <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Lenguaje de Marcas</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
    </div>
    <div class="d-flex">
    <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Programación</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
     <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
     </div>
     <div class="d-flex">
     <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Sistemas infórmaticos</a>
     <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
      </div>
      <div class="d-flex">
      <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Inglés técnico</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
       <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
       </div>
       <div class="d-flex">
       <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Formación y orientación laboral</a>
       <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
        </div>
        <div class="d-flex">
        <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Desarrollo web servidor</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
         <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
         </div>
         <div class="d-flex">
         <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Desarrollo web cliente</a>
         <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
          </div>
          <div class="d-flex">
          <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Desarrollo de interfaces</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
           <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
           </div>
           <div class="d-flex">
           <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Despliegue de aplicaciones web</a>
           <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
            </div>
            <div class="d-flex">
            <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Empresa e iniciativa emprendedora</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
             <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
             </div>
             <div class="d-flex">
             <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Acceso a datos</a>
             <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
              </div>
              <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Programación multimedia y dispositivos móviles</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Programación de servicios y procesos</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Sistemas de gestión empresarial</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Implantación de sistemas operativos</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Planificación y administración de redes</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Fundamentos de hardware</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div><div class="d-flex">
               <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Gestión de bases de datos</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
                </div>
                <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Administración de sistemas operativos</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Servicios de red e internet</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div><div class="d-flex">
               <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Implantación de aplicaciones web</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
                </div>
                <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Montaje y mantenimiento de equipo</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Sistemas operativos monopuesto</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Aplicaiones ofimáticas</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Sistemas oprativos en red</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Redes locales</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Seguridad informática</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Servicios en red</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Aplicaciones web</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Incidentes de ciberseguridad</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Bastionado de redes y sistemas</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Puesta en producción segura</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Análisis forense informatico</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Hacking ético</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Normativa de ciberseguridad</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Modelos de inteligencia artificial</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Sistemas de aprendizaje automático</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Programación de inteligencia artificial</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Sistemas de Big Data</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Big Data aplicado</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
         <a href="./formulario.html?crear=modulo" class="list-group-item list-group-item-action list-group-item-primary"><i class="fa-solid fa-plus"></i> Añadir</a>

  </ul>
  `;
} else if (param == "nivel") {
  main.innerHTML += `
  <h2 class="text-center">Niveles</h1>
  <ul class="list-group">
  <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">1º</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
               <div class="d-flex">
              <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">2º</a>
              <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
               <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
               </div>
         <a href="./formulario.html?crear=nivel" class="list-group-item list-group-item-action list-group-item-primary"><i class="fa-solid fa-plus"></i> Añadir</a>
  </ul>
  `;
} else if (param == "tema") {
  main.innerHTML += `
  <h2 class="text-center">Temas</h1>
  <ul class="list-group">
  <div class="d-flex">
   <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Tema 1</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
    </div>
  <div class="d-flex">
   <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Tema 2</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
</div>
  <li class="list-group-item list-group-item-dark"><a href="./detalle.html" class="link link-dark text-decoration-none">...</a></li>
  <div class="d-flex">
  <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Tema N</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
   </div>
   <a href="./formulario.html?crear=tema" class="list-group-item list-group-item-action list-group-item-primary"><i class="fa-solid fa-plus"></i> Añadir</a>
  </ul>
  `;
}else if(param == "actividad"){
  main.innerHTML += `
  <h2 class="text-center">Actividades</h1>
  <ul class="list-group">
  <div class="d-flex">
   <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Actividad 1</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
    </div>
  <div class="d-flex">
   <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Actividad 2</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
</div>
  <li class="list-group-item list-group-item-dark"><a href="./detalle.html" class="link link-dark text-decoration-none">...</a></li>
  <div class="d-flex">
  <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">Actividad N</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
   </div>
   <a href="./formulario.html?crear=actividad" class="list-group-item list-group-item-action list-group-item-primary"><i class="fa-solid fa-plus"></i> Añadir</a>
  </ul>
  `;
}else if(param == "ra"){
  main.innerHTML += `
  <h2 class="text-center">Resultados de Aprendizaje</h1>
  <ul class="list-group">
  <div class="d-flex">
   <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">RA 1</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
    </div>
  <div class="d-flex">
   <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">RA 2</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
</div>
  <li class="list-group-item list-group-item-dark"><a href="./detalle.html" class="link link-dark text-decoration-none">...</a></li>
  <div class="d-flex">
  <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">RA N</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
   </div>
   <a href="./formulario.html?crear=ra" class="list-group-item list-group-item-action list-group-item-primary"><i class="fa-solid fa-plus"></i> Añadir</a>
  </ul>
  `;
}else if(param == "ce"){
  main.innerHTML += `
  <h2 class="text-center">Criterios de Evaluación</h1>
  <ul class="list-group">
  <div class="d-flex">
   <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">CE 1</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
    </div>
  <div class="d-flex">
   <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">CE 2</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
</div>
  <li class="list-group-item list-group-item-dark"><a href="./detalle.html" class="link link-dark text-decoration-none">...</a></li>
  <div class="d-flex">
  <a href="./detalle.html" class="list-group-item list-group-item-action list-group-item-dark col-sm">CE N</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-info col-sm"><i class="fa-solid fa-pen"></i> Editar</a>
   <a href="#" class="list-group-item list-group-item-action list-group-item-danger col-sm"><i class="fa-solid fa-trash"></i> Eliminar</a>
   </div>
   <a href="./formulario.html?crear=ce" class="list-group-item list-group-item-action list-group-item-primary"><i class="fa-solid fa-plus"></i> Añadir</a>
  </ul>
  `;
}
