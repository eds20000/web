//sort-tab start
function sort__tab(a){
    document.querySelector(".content__title-sort-selected").value = a.innerHTML;
    var sorttab = document.querySelectorAll(".sort__tab-list");
    for (let i of sorttab){
                 if(i.innerHTML === document.querySelector(".content__title-sort-selected").value){
                    i.classList.add("selected");
                    }
                else{
                    i.classList.remove("selected");

                    }
                }
            }
// sort-tab end//

//item start//

function favoritebutton(a){
    console.log(a.classList[1])
    if(a.classList[1]==='sort__item-takecart-disable'){
        a.classList.remove('sort__item-takecart-disable');
        a.classList.add('sort__item-takecart-enable');
    }
    else{
        a.classList.remove('sort__item-takecart-enable');
        a.classList.add('sort__item-takecart-disable');
    }
}

//item end//



