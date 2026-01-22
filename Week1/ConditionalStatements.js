let browserName = "firefox";

if(browserName == "chrome")
{
    console.log("Launching Chrome browser");
}
else if(browserName == "firefox")
{
    console.log("Launching Firefox browser");
}
else
{
    console.log("Launching default browser");
}

let testType = "regression"

switch(testType)
{
    case "regression":
        console.log("Running regression tests...");
        break;
    case "smoke":
        console.log("Running smoke tests..");
        break;
    case "sanity":
        console.log("Running sanity tests...");
        break;
    default:
        console.log("Running default Smoke tests...");
}