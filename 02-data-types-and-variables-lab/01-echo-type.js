function echoType(param) {
    let type = typeof param;
    console.log(type);

    if (type = 'string' || type == 'number') {
        console.log(param);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

echoType(18);
// echoType(null);
// echoType(undefined);