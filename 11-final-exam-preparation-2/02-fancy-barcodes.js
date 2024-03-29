function fancyBarcodes(arr) {
    let digitPattern = /[0-9]/g;
    let barcodePattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;

    let barcodeCount = Number(arr.shift());

    for (let i = 0;  i < barcodeCount; i++) {
        let curBarcode = arr[i];
        
        if (barcodePattern.test(curBarcode)) {
            let digits = curBarcode.match(digitPattern);
            
            if (digits) {
                let productGroup = digits.join('');
                console.log(`Product group: ${productGroup}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log('Invalid barcode');
        }
    }
}

fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);