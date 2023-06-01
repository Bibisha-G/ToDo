
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const taskInput = document.querySelector('#addtask');
    const taskList = document.querySelector('#tasks');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const task = taskInput.value;
  
      if (task.trim() !== '') { // ensures that the task variable contains a non-empty value after removing any leading or trailing whitespace.
        const listItem = document.createElement('li');
        const taskLabel = document.createElement('span');
        taskLabel.textContent = task;
  
        taskLabel.addEventListener('click', function() {
          taskLabel.style.textDecoration = 'line-through';
        });
  
        listItem.append(taskLabel);
        taskList.append(listItem); //adds the new task at the end of task list 
  
        taskInput.value = ''; // Clear the input field
        taskInput.focus(); // Set focus back to the input field
      }
    });
  });
   