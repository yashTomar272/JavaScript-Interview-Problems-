// Debounce

function search() {
  console.log("API Call");
}
function debounce(fn,delay){
let timer 
return function(){
    clearTimeout(timer)
    timer=setTimeout(()=>{
        fn()
    },delay)
}
}
let handleSearch = debounce(search, 500);

handleSearch();
handleSearch();
handleSearch();
