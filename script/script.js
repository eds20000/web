// sort-tab




function sort__tab(a){
    document.querySelector(".content__title-sort-selected").innerHTML = a.innerHTML;
       
}

var sort__tab_content = document.getElementsByClassName("content__title-sort-selected");

var sort__tab_list = document.getElementsByClassName('sort__tab-list');

console.log(sort__tab_content.innerHTML);
console.log(sort__tab_list);


for (let i of sort__tab_list){
    console.log(i);
    if(i.innerHTML === sort__tab_content.innerHTML){
        i.classList.add('tab_selected') ='600';
    }
}
//sort-tab