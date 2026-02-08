function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = text;

  const del = document.createElement("span");
  del.textContent = "❌";
  del.onclick = () => li.remove();

  li.appendChild(taskText);
  li.appendChild(del);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Enter bosilganda ham qo‘shilsin
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});
