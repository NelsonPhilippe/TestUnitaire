export default (value, device) => {
    if(value > 0) {
        if(device === '$'){
            return value  * 1.07;
        }
    }
    return 0;
}