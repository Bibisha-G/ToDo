document.addEventListener('DOMContentLoaded',function() {

    //by default the submit button should be disabled
    document.querySelector('#submit').disabled = true;

    document.querySelector('#addtask').onkeyup=() =>{
        if(document.querySelector('#addtask').value.length>0){
            document.querySelector('#submit').disabled=false;
            
        }else{
            document.querySelector('#submit').disabled = true;
        }  
    }


    document.querySelector('form').onsubmit=function() {
        const taskForm = document.querySelector('#task-form');

       const task= document.querySelector('#addtask').value ;
       const li = document.createElement('li');
       li.innerHTML=task;

       document.querySelector('#tasks').append(li);
       document.querySelector('#addtask').value='';
       document.querySelector('#submit').disabled = true; // submit button becomes in active again after submtting a task
    
       // Add event listener to the form for submit event
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        addTask();
    });



        // Save the task to local storage
        const tasksFromStorage = localStorage.getItem('tasks');
        let tasks = [];

        if (tasksFromStorage) {
            tasks = JSON.parse(tasksFromStorage);
        }

        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        //since it is  form an on submttting it takes to another page, we need to stop it from submittng
         return false; 

    };

});