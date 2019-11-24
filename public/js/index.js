console.log('im alive!')

function packUpForm(){
    const name = document.querySelector('.task-name').value;
          message = document.querySelector('.task-message').value;
          subject = document.querySelector('.task-subject').value;
    const taskData = {name: name, message: message, subject: subject};
    
    return taskData;
  }

  window.onload = function() {
      if(document.getElementById("new-task-form")){
        document.getElementById("new-task-form").addEventListener("submit", function(e){
        e.preventDefault();
        fetch('/api/tasks', {
                method: 'post',
                body:    JSON.stringify(packUpForm()),
                headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            return response.json();
        })
        .then(data =>{
          console.log("tasks: ", data);
          window.location.replace('/tasks/' + data.id);
          // go to localhost:8000/pokemon/:id
        })
        .catch(err => console.error("fetch error: ", err)); // end of functional instructions
    
      }); // end of event listener
    }
  
      
   // end of if statement

    if(document.getElementById("delete-btn")){
       document.querySelectorAll('#delete-btn').forEach(item =>{
         item.addEventListener('click', event =>{
          console.log('Im being click,delete btn');

          const id = document.getElementById("delete-btn").value;
          // console.log(id);
          fetch('/api/tasks/' + id, {
                  method: 'delete',
                  body:    JSON.stringify({id: id}),
                  headers: { 'Content-Type': 'application/json' }
          })
          .then(response => {
              window.location.replace('/tasks/');
          })
          .catch(err => console.error("fetch error: ", err));
         })
       })
      //   document.getElementById("delete-btn").addEventListener("click", function(){
      //   console.log('Im being click,delete btn');

      //   const id = document.getElementById("delete-btn").value;
      //   // console.log(id);
      //   fetch('/api/tasks/' + id, {
      //           method: 'delete',
      //           body:    JSON.stringify({id: id}),
      //           headers: { 'Content-Type': 'application/json' }
      //   })
      //   .then(response => {
      //       window.location.replace('/tasks/');
      //   })
      //   .catch(err => console.error("fetch error: ", err)); // end of functional instructions
      // });//end of event listener
    } 
  }; // end of window.onload
    