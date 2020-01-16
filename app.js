var insert = (arr, item, index) => {
    let temparr = [];
    for (let i = arr.length; i > 0; i--) {
        if (i > index) {
            temparr.push(arr.pop());
        }
    }
    let maxsno = arr[arr.length - 1].sno + 1;
    item.sno = maxsno;
    arr.push(item);
    for (let i = 0; i < temparr.length; i++) {
        maxsno += 1;
        let tempitem = temparr.pop();
        tempitem.sno = maxsno;
        arr.push(tempitem);
    }
    return arr;
}

var del = (arr, index) => {
    let temparr = [];
    for (let i = arr.length; i > 0; i--) {
        if (i > index + 1) {
            temparr.push(arr.pop());
        }
    }
    arr.pop(arr[index]);
    let maxsno = arr[arr.length - 1].sno;
    for (let i = 0; i < temparr.length; i++) {
        maxsno += 1;
        let tempitem = temparr.pop();
        tempitem.sno = maxsno;
        arr.push(tempitem);
    }
    return arr;
}


var add = (arr, item) => {
    let maxsno = arr[arr.length - 1].sno + 1;
    item.sno = maxsno;
    arr.push(item);
    return arr;
}


var a = [{ sno: 10, itemname: "ss" }, { sno: 13, itemname: "s2s" }];
console.log(insert(a, { sno: 12, itemname: "123" }, 1));

var b = [{ sno: 11, itemname: "ss" }, { sno: 12, itemname: "123" }, { sno: 13, itemname: "s2s" }];
console.log(del(b, 1));

var c = [{ sno: 10, itemname: "ss" }, { sno: 13, itemname: "s2s" }];
console.log(add(c, { sno: 12, itemname: "123" }, 1));