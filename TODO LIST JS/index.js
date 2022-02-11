

  
const addbtn=document.querySelector('.addbutton');
addbtn.addEventListener('click',()=>{
    var task=document.querySelector('#textinput');
    var todolist=document.querySelector('.todolist');

    if(!task.value)
    alert("Please Enter Some task");
    else
    {   
        var todos=document.querySelectorAll('.leftsection');
        var flag=false;
        todos.forEach((todo)=>{
            if(todo.textContent==task.value)
                flag=true;
        })
        if(!flag)
        {
        todolist.innerHTML+=
        `<li>
          <div class="leftsection">
           ${task.value}
          </div>
          <div class="rightsection">
           <button class="donebtn">✔</button>
           <button class="delbtn"/>X</button>
          </div>
        </li>`
        }
        else
        alert("Task already present");
    }
   })

    
