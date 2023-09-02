'use strict'


const searchIssue = () =>{
    let searchList = document.getElementById("searchList");
    searchList.innerHTML =`
    <ul id="myUl" type="none">
    <li><a href="https://www.google.com">Cardio</a></li>
    <li><a href="https://www.google.com">Muscular</a></li>
    <li><a href="https://www.google.com">Dumbbell</a></li>
    <li><a href="https://www.google.com">Workout Plans</a></li>
    <li><a href="https://www.google.com">Biceps</a></li>
    <li><a href="https://www.google.com">Triceps</a></li>
    <li><a href="https://www.google.com">Push Ups </a></li>
</ul>
    `;
    searchList.classList.remove('activeSearch');
   
    let filter = document.getElementById("myInput").value.toUpperCase();

 
    let ul = document.getElementById("myUl");
    let li = ul.getElementsByTagName('li');

    for (var i=0; i< li.length; i++){
        let a =li[i].getElementsByTagName('a')[0];

        let textValue = a.textContent;

        if(textValue.toUpperCase().indexOf(filter) > -1){
        li[i].style.display ='';

        }else{
        li[i].style.display ='none';
}

}
}