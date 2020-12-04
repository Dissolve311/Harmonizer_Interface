console.log("main.js working...");

function writeMelody(ev){
    console.log('User want to write a melody');
    const dropZoneElement = document.querySelector(".dropzone");
    dropZoneElement.classList.add("dropzone_dropped");
    const textElement = document.querySelector(".innerText")
    textElement.innerHTML = "Start writing with the pianoroll";
    const generateElement = document.querySelector(".bodybutton");
    generateElement.classList.add("bodybutton_show");
    openProll(ev);
}

function dropHandler(ev){
    console.log('File(s) dropped');
    const dropZoneElement = document.querySelector(".dropzone");
    dropZoneElement.classList.add("dropzone_dropped");
    const generateElement = document.querySelector(".bodybutton");
    generateElement.classList.add("bodybutton_show");
    const textElement = document.querySelector(".innerText")
    textElement.innerHTML = "File dropped!";

    //prevent default behavior
    ev.preventDefault();

    if(ev.dataTransfer.items){
        //Use DataTransferItemList interface to access the files(s)
        for (var i=0; i<ev.dataTransfer.items.length; i++){
            //If dropped items are not files, reject them
            if(ev.dataTransfer.items[i].kind === 'file'){
                var file = ev.dataTransfer.items[i].getAsFile();
                console.log('...file['+i+']).name = '+file.name);
            }
        }
    }
    else{
        //Use DataTransfer interface to access the file(s)
        for(var i=0; i<ev.dataTransfer.files.length;i++){
            console.log('...file['+i+']).name = '+ev.dataTransfer.files[i].name);
        }
    }
}

function dragOverHandler(ev){
    console.log('File(s) in drop zone');
    //Prevent default behavior
    ev.preventDefault();
    const dropZoneElement = document.querySelector(".dropzone");
    dropZoneElement.classList.add("dropzone_dragover");
}

function dragLeaveHandler(ev){
    console.log('File(s) leave drop zone');
    ev.preventDefault();
    const dropZoneElement = document.querySelector(".dropzone");
    dropZoneElement.classList.remove("dropzone_dragover");
}

//PAUSE AND PLAY

function showpause(ev){
    //find the playbutton and hide by adding class
    var playbutton = ev.target;
    playbutton.classList.add("hideplaybutton");
    //find the closest parent element
    var close_option = playbutton.closest(".optionleft");
    //find all children elements under optionleft, it is a list
    var close_pause=close_option.querySelectorAll(".iconpause")[0];
    close_pause.classList.add("showpause");   
}

function showplay(ev){
    var pausebutton = ev.target;
    pausebutton.classList.remove("showpause");
    var close_option = pausebutton.closest(".optionleft");
    var close_play = close_option.querySelectorAll(".ic-playbutton")[0];
    close_play.classList.remove("hideplaybutton");
}

//Show results based on selector


function generateResults(ev){

    const select = document.getElementById("num_gen_select");
    var select_val = select.value;
    const results = document.querySelectorAll(".results");
    switch(select_val){
        case '1':
            console.log('1 Result generated!')
            results[0].classList.add("results_show");
            //remove other results' class -- FIRST APPROACH
            results[1].classList.remove("results_show");
            results[2].classList.remove("results_show");

            break;

        case '2':
            console.log('2 Results generated!')
            results[0].classList.add("results_show");
            results[1].classList.add("results_show");
            //remove other results' class -- SECOND APPROACH
            if (results[2].classList.contains("results_show")){
                results[2].classList.remove("results_show");
            }
            break;

        case '3':
            console.log('3 Results generated!')            
            console.log(results);
            results.forEach(element => element.classList.add("results_show"));
            break;
    }  
    
}

//Open and close bottom editing region

function openNav() {
    document.getElementById("myBottomnav").style.height = "30%";
  }
  
function closeNav() {
    document.getElementById("myBottomnav").style.height = "0";
  }

//Open and close pianoroll


function openProll() {
    document.getElementById("myProllnav").style.height = "40%";
  }
  
  function closeProll() {
    document.getElementById("myProllnav").style.height = "0";
  }



