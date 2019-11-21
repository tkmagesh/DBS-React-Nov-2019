(function(){
    function addSync(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`);
        var result= x + y;
        console.log(`   [@Service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@Client] triggering the service`);
        var result = addSync(x, y);
        console.log(`[@Client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient;

    function addAsync(x, y, callback) {
        console.log(`   [@Service] processing ${x} and ${y}`);
        setTimeout(function(){
            var result = x + y;
            console.log(`   [@Service] returning result`);
            if (typeof callback === 'function')
                callback(result);
        }, 4000);
    }

    function addAsyncClient(x, y) {
        console.log(`[@Client] triggering the service`);
        addAsync(x, y, function(result){
            console.log(`[@Client] result = ${result}`);
        });
    }

    window['addAsyncClient'] = addAsyncClient;

    function addAsyncPromise(x, y) {
        console.log(`   [@Service] processing ${x} and ${y}`);
        var p = new Promise(function(resolve, reject){
            setTimeout(function () {
                var result = x + y;
                console.log(`   [@Service] returning result`);
                resolve(result);
            }, 4000);
        });
        return p;
    }

    window['addAsyncPromise'] = addAsyncPromise;
})();