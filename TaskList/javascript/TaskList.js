const input=document.getElementById('input-1');
const task_form = document.getElementById('task-form')
const collection=document.querySelector('.collection');
const ClearBtn = document.querySelector('.btn-2');
const filter=document.getElementById('filter');

task_form.addEventListener('submit',AddTask);
ClearBtn.addEventListener('click',DelAllTask);
collection.addEventListener('click',RemoveTask);
filter.addEventListener('keyup',FilterTask);
document.addEventListener('DOMContentLoaded',getTask);
function AddTask(e)
{
    if(input.value === '')
    {
        alert('لطفا وظیفه ایی وارد کنید ');
    }
    else
    {
        let li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(input.value));
    
        let link = document.createElement('a');
        link.className = 'delete-item';
        link.innerHTML='<i class="fas fa-trash-alt trash-item"></i>';
    
        li.appendChild(link);
        collection.appendChild(li);
    
        
    }
    StoreTaskInLocalStorage(input.value);
    input.value = '';
    e.preventDefault();


}
function DelAllTask()
{
    collection.innerHTML='';
    localStorage.clear();
}
function RemoveTask(e)
{
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        if(confirm('ایا مایل به حذف هستید')){
        e.target.parentElement.parentElement.remove();
            RemoveTaskFromLocalStorage(e.target.parentElement.parentElement);
    }}
}
function FilterTask(e)
{
    let text =e.target.value.toLowerCase();
    let items = document.querySelectorAll('.collection-item');
    items.forEach(function(task){
        let item =task.firstChild.textContent;
        if(item.indexOf(text) != -1)
        {
            task.style.display='block';
        }
        else{
            task.style.display='none';
        }
    })
}

function StoreTaskInLocalStorage(task)
{
    let tasks;
    if(localStorage.getItem('tasks') === null)
    {
        tasks=[];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks))
}

function getTask()
{
    let tasks;
    if(localStorage.getItem('tasks') === null)
    {
        tasks=[];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        let li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
    
        let link = document.createElement('a');
        link.className = 'delete-item';
        link.innerHTML='<i class="fas fa-trash-alt trash-item"></i>';
    
        li.appendChild(link);
        collection.appendChild(li);
    
        
    })  
}

function RemoveTaskFromLocalStorage(li)
{
    let tasks;
    if(localStorage.getItem('tasks') === null)
    {
        tasks=[];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index)
    {
        if(li.textContent === task)
        {
            tasks.splice(index,1);
        }
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
