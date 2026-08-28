ORDEM DE CRIAÇÃO POREM TODOS OS COMPONENTES SERAO CRIADOS VIA JS
criar 2 componentes section e colocar o id
inserir as sections no main
criar titulo h2 e inserir na section
criar o form com id e inserir na section
criar o input com id e placeholder e inserir no form
criar o button com id e type=submit e inserir no form
criar um ion-icon com name=add-outline e inserir no form
criar ul com id e inserir na segunda section
criar li com 3 class (list template hide), se for fazer com create somente uma class
criar 1 span com class e inserir no li
criar 2 ion-icon com name e class
o primeiro com name=checkmark-outline e class=done-btn
o segundo name=close-outline e class=remove-btn

Com todos os componentes criados criar o sistema
criar 2 funções addtask e addBtn
a função addBtn deve ter um evento de click com um call-back e preventDefault e uma função addTask
a função addBtn deve ser chama no script geral

a função addTask terá toda logica, se for usar o createElement(), deve criar o li, span, ion-icon dente desta função

a primeira funcionalidade será de buscar o input com valor

se fizer com cloneNode criar remove, para remover as classes templade hide

criar o botão de confirmar com um evento e usar classList.toggle('done')

criar botão remover usando um evento e usar remove();
inserir o li na ul com appendChild()

para finalizar limpar o input depois de inserido a tarefa