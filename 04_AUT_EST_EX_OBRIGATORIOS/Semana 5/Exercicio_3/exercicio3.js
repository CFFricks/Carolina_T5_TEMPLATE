let input = document.getElementById("lista_desorganizada")
let result = document.getElementById("vem")
let sortedList

function ordena_lista() {
    let list = input.value.split(",")
    list = list.map(item => parseInt(item))
    sortedList= sort(list)
    let li = document.createElement("li")

    li.innerHTML = `${
        sortedList
        
    }`
    result.appendChild(li)
}

function sort(list) {
    let temp
    for (
        let i = 0;
        i < list.length;
        i++

    ) {
        for (
            let j = 0;
            j < list.length - i - 1;
            j++
        ) {
            if (
                list[j] > list[j + 1]

            ) {
                temp = list[j] 
                list[j] = list[j+1]
                list[j+1]= temp

            }
        }
    }
    return list
}

function achar_valor_foco(){
    let foco=document.getElementById("valor-foco").value
    for(i=0; i<sortedList.length -1 ; i++){
        if(foco == sortedList[i]){
            return alert("indice do valor foco é: " + i)
        }
    }
}