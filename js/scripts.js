/**
 * 
 */
console.log('testando');
//achar a main
let mainList = document.querySelector('#list-main');
//criar primeira section e componentes internos
let addTaskForm = document.createElement('section');
addTaskForm.setAttribute('id', 'add-task-form');
mainList.appendChild(addTaskForm);

let subTitleAddTask = document.createElement('h2');
subTitleAddTask.textContent = 'Adicionar tarefa';
addTaskForm.appendChild(subTitleAddTask);

let formTarefas = document.createElement('form');
formTarefas.setAttribute('id', 'form-tarefas');
addTaskForm.appendChild(formTarefas);

let inputForm = document.createElement('input');
inputForm.setAttribute('id', 'input-form');
inputForm.setAttribute('placeholder', 'O que você precisa fazer?');
formTarefas.appendChild(inputForm);

let btnForm = document.createElement('button')
btnForm.setAttribute('id', 'btn-form');
btnForm.setAttribute('type', 'submit');
formTarefas.appendChild(btnForm);

let ionBtnOutline = document.createElement('ion-icon');
ionBtnOutline.classList.add('btn-addOutline');
ionBtnOutline.setAttribute('name', 'add-outline');
btnForm.appendChild(ionBtnOutline);

//criar segunda section e componentes internos
let listTarefas = document.createElement('section');
listTarefas.setAttribute('id', 'list-tarefas');
mainList.appendChild(listTarefas);

let subTitleList = document.createElement('h2');
subTitleList.textContent = 'Minhas tarefas';
listTarefas.appendChild(subTitleList);

let listUl = document.createElement('ul');
listUl.setAttribute('id', 'list-Ul');
listTarefas.appendChild(listUl);



//funcoes addtask
function addTask(){
    console.log('funcao addtask')
    //puxar o input
    const titulo = inputForm.value.trim();
    
    if(titulo){
        //teste
        //vai entrar dentro da funcao
        let listLi = document.createElement('li');
        listLi.classList.add('listLi');
        listUl.appendChild(listLi);

        let spanLi = document.createElement('span');
        spanLi.classList.add('spanLi')
        spanLi.textContent = titulo;
        listLi.appendChild(spanLi);

        let btnCheck = document.createElement('ion-icon');
        btnCheck.classList.add('btn-check');
        btnCheck.setAttribute('name', 'checkmark-outline')
        listLi.appendChild(btnCheck);

        let btnClose = document.createElement('ion-icon');
        btnClose.classList.add('btn-close');
        btnClose.setAttribute('name', 'trash-outline');
        listLi.appendChild(btnClose);

        //eventos done
        btnCheck.addEventListener('click', function(){
            let concluirTask = this.parentNode;
            concluirTask.classList.toggle('done');
        })
        //evento remove
        btnClose.addEventListener('click', function(){
            let deleteTask = this.parentNode;
            deleteTask.remove();
        })
        //clear input
        inputForm.value = '';
    }else{
        alert('vazio')
    }
}
//funcao btn
function addBtn(){
    console.log('dentro da funcao');
    btnForm.addEventListener('click', function(e){
        
        console.log('btn funcionando');
        e.preventDefault();

        addTask();

    })
};
addBtn();

