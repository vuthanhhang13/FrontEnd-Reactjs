let btnB=document.getElementsByClassName('btn');
let display=document.getElementsByTagName('span');

let ipBudget=document.getElementById('ipbudget');
let ipExpense=document.getElementById('ipexpense');
let ipAmount= document.getElementById('ipamount');

let errBudget= document.getElementsByClassName('err-budget');
let errExpense= document.getElementsByClassName('err-expense');
let errAmount= document.getElementsByClassName('err-amount');

let budgetAmount=document.getElementById('budget-amount');
let expenseAmount=document.getElementById('expense-amount');
let balanceAmount=document.getElementById('balance-amount');

let list= document.getElementsByClassName('list');
// let remove = document.getElementById('delete');
// let edit= document.getElementsById('edit');
let EXPENSE = document.getElementsByClassName('expense');

let entryList= [];
let ID=0;
// const DELETE = "delete", EDIT = "edit";

function calculate(entryList){
    let sum=0;
    entryList.forEach(element => {
        sum+=element.amount;
    });
    return sum;
}

function clearInput(inputs){
    inputs.forEach( input => {
        input.value = "";
    })
}

function showEntry(list, title, amount,id){

    const entry = ` <li id=" ${id}" class="expense  ">
                        <div class="entry">${title} </div>
                        <div class=" exvalue"> ${amount}</div>
                        <div ><i class="fas fa-edit " id="edit"></i></div>
                        <div ><i class="fas fa-trash ml-3"id="delete"></i></div>
                    </li>`;

    const position = "afterbegin";

    list.insertAdjacentHTML(position, entry);
}

btnB[0].addEventListener('click',function(){
    var dataIpBudget=ipBudget.value;
    var dataIpAmount= ipAmount.value;
    var dataIpExpense=ipExpense.value;
    var expense={
        title : ipExpense.value,
        amount: parseInt(ipAmount.value)
    }
    this.ID++;
    if(dataIpExpense.length>0 && dataIpAmount.length>0 ){
        entryList.push(expense);
    }
    if(dataIpBudget.length>0){
        errBudget[0].innerHTML=''; 
        ipBudget.style.border='1px solid #848484';
        display[0].innerHTML=dataIpBudget;
        if(entryList.length>0){
            display[2].innerHTML=dataIpBudget-calculate(entryList);
        }
        else{
            display[2].innerHTML=dataIpBudget;
        }  
    } 
    else{
        errBudget[0].innerHTML='Please enter the money';
        ipBudget.style.border='1px solid red';
        errBudget[0].style.color='red';
    }
})
btnB[1].addEventListener('click',function(){
    var dataIpExpense=ipExpense.value;
    var dataIpAmount= ipAmount.value;  
    var dataIpBudget=ipBudget.value;
    
    if(dataIpExpense.length>0){
        errExpense[0].innerHTML='';
        ipExpense.style.border='1px solid #848484';
    }
    else{
        errExpense[0].innerHTML='Please enter the expense';
        ipExpense.style.border='1px solid red';
        errExpense[0].style.color='red'
    }
    if(dataIpAmount.length>0){
        errAmount[0].innerHTML='';
        ipAmount.style.border='1px solid #848484';
        
    }
    else{
        errAmount[0].innerHTML='Please enter the money';
        ipAmount.style.border='1px solid red';
        errAmount[0].style.color='red';
    }
    var expense={
        id:ID,
        title : ipExpense.value,
        amount: parseInt(ipAmount.value)
    }
    this.ID++;
    if(dataIpExpense.length>0 && dataIpAmount.length>0 ){
        entryList.push(expense);
        display[1].innerHTML=calculate(entryList); 
        entryList.forEach( (entry, index) => {
            if(index==(entryList.length-1)){
                showEntry(list[0], entry.title,entry.amount,entry.id)
            }   
        })
    }
    if(dataIpBudget.length>0){
        errBudget[0].innerHTML=''; 
        ipBudget.style.border='1px solid #848484';
        display[0].innerHTML=dataIpBudget;
        if(entryList.length>0){
            display[2].innerHTML=dataIpBudget-calculate(entryList);
        }
        else{
            display[2].innerHTML=dataIpBudget;
        }  
    } 
    clearInput([ipExpense,ipAmount]);
    // console.log(entryList)
    
})

