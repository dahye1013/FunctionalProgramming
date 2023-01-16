export const forEach = function (collection, callback) {
    if(!Array.isArray(collection)) throw new Error('배열 인스턴스를 첫 번째 인자로 넣어주세요.')
    for (let index = 0; index < collection.length; index++) {
        const el = collection[index];
        callback(el, index, collection)
    }
};

export const map = function(collection, callback) {
    const result = []
    forEach(collection, (element) => {
        result.push(callback(element))
    })
    return result;
}

export const filter = function(collection, callback) {
    const result = [];
    forEach(collection, (element) =>{
        if(callback(element)) {
            result.push(element)
        }
        return result;
    })
}
