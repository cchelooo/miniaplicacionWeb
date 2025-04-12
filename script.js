document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const editModeBtn = document.getElementById("editModeBtn");
  const taskList = document.getElementById("taskList");

  let editMode = false;

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");

      // Círculo
      const circle = document.createElement("span");
      circle.classList.add("circle");

      // Texto
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
      taskSpan.classList.add("task-text");

      // Botón ❌ para eliminar
      const deleteBtn = document.createElement("span");
      deleteBtn.textContent = "❌";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.style.display = editMode ? "inline" : "none";

      deleteBtn.addEventListener("click", () => {
        const confirmDelete = confirm(
          "¿Estás seguro de que deseas eliminar esta tarea?"
        );
        if (confirmDelete) {
          li.remove();
        }
      });

      // Evento para marcar como completado
      circle.addEventListener("click", () => {
        circle.classList.toggle("checked");
        if (circle.classList.contains("checked")) {
          circle.innerHTML = "✓";
        } else {
          circle.innerHTML = "";
        }
      });

      li.appendChild(circle);
      li.appendChild(taskSpan);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      taskInput.value = "";
    }
  });

  editModeBtn.addEventListener("click", () => {
    editMode = !editMode;
    const allDeleteBtns = document.querySelectorAll(".delete-btn");
    allDeleteBtns.forEach((btn) => {
      btn.style.display = editMode ? "inline" : "none";
    });
  });
});
