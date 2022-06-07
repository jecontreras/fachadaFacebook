async function init() {
  let ruta= window.location.pathname;
  let redirect;
    console.log("*****", ruta)
  if( ruta ==  "/1" ){
    redirect = "https://bit.ly/3MSHZj2";
  }
  if( ruta ==  "/2" ){
    redirect = "https://bit.ly/3vwCDnz";
  }
  if( ruta ==  "/3" ){
    redirect = "https://bit.ly/3MSHZj2";
  }
  if( ruta ==  "/4" ){
    //redirect = "https://bit.ly/3PUwCJT";
  }


  setTimeout(()=>{
      console.log("****", redirect )
      if( redirect ) openUrl( redirect );
  }, 4000 );
}

function openUrl( url ){
    let targetURL = url;
    let newURL = document.createElement('a');
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}

init();