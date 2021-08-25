export function findById(id, arrayOfProducts){
    for (let item of arrayOfProducts){
        if (item.id === id){
            return item;
        }
    }
}


