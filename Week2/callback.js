let browser = "Chrome";

function checkBrowserVersion(callback){

    setTimeout(()=>{
        console.log("Checking browser version... 2 seconds passed");
    },2000);

    callback(browser);
}

function showVersion(){
    console.log("Browser version using callback:",browser);
}

checkBrowserVersion(showVersion);