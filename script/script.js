// sort-tab




function sort__tab(a){
    document.querySelector(".content__title-sort-list").innerHTML = a.innerHTML;
       
}

var sort__tab_content = document.getElementsByClassName("content__title-sort-list");

var sort__tab_list = document.getElementsByClassName('sort__tab-list');

console.log(sort__tab_content.outerText);
console.log(sort__tab_list);


for (let i of sort__tab_list){
    console.log(i);
    if(i.innerHTML === sort__tab_content.innerHTML){
        i.style.fontWeight ='600';
    }
}
//sort-tab