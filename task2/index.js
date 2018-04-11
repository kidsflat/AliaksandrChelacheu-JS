{
    function makeBuffer() {
        var savedBuff = "";
        return function (buff) {
            buff == undefined ? buff = "" : {};
            return savedBuff = savedBuff + buff;
        }
    }

    var buffer = makeBuffer();
    buffer("Замыкания");
    buffer(" Использовать");
    buffer(" Нужно!");
    
    alert(buffer()); // Замыкания Использовать Нужно!

    buffer = makeBuffer();
    buffer(0);
    buffer(1);
    buffer(0);

    alert(buffer()); // 010
}
 
//1
{
    let arr = ["Red", "Green", "Purple", "Violet", "Black", "Vermeil"];
    console.log(arrToString(arr, "++"));

    function arrToString(array, separator) {
        let string = array[0];
        for (let i = 1; i < array.length; i++) {
            string += separator + array[i];
        }
        return string;
        //return array.join(separator);
    }
}


//2
{
    let str = "The Quick Brown Fox";

    String.prototype.replaceAt = function (index, string) {
        return this.substr(0, index) + string + this.substr(index + 1);
    }

    console.log(swapCase(str));

    function swapCase(string) {
        //
        for (let i = 0; i < string.length; i++) {
            string[i] === string[i].toLowerCase() ?
                string = string.replaceAt(i, string[i].toUpperCase())
                : string = string.replaceAt(i, string[i].toLowerCase());
        }
        return string;
    }
}


//3
{
    let arr = [0, NaN, NaN, undefined, 0, 15, false, -22, '', undefined, undefined, 47, '', '', null, NaN, NaN, NaN, 210];
    console.log("\nМассив до удаления");
    console.log(arr);
    console.log("\nМассив после удаления");
    console.log(removeWrongValues(arr));

    function removeWrongValues(array) {
        array = array.filter(item => {
            return (item !== undefined) && (item !== null) && (item !== 0) && (item !== false) && (!isNaN(item)) && (item !== "");
        });
        return array;
    }
}

//4
{
    findPrimeNumber(100);
    function findPrimeNumber(max) {
        var arr = new Array(max);
        arr.fill(true);
        for (let i = 2; i < max; i++) {
            if (arr[i]) {
                for (let a = i*i; a < max; a += i){
                    arr[a] = false;
                    console.log("Число " + a + " составное");
                }
            }
        }
        var primeCounter = 0,
            complexCounter = 0;
        for (let i = 2; i < max; i++){
            if (arr[i]) {
                console.log("Число " + i + " простое");
                primeCounter++;
            } else
                complexCounter++;
        }
        console.log("\nВсего найдено простых чисел: " + primeCounter,
                    "\nВсего найдено составных чисел: " + complexCounter + "\n");
    }
}