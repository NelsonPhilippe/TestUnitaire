export default (array) => {

    if(typeof array !== 'object'){
        return [];
    }
    if(array.length === 0){
        return [];
    }

    return array.sort((a, b) => a - b);


}