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

//item 
