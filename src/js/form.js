let RMariage = document.querySelector('#R-mariage')
let RDJ = document.querySelector('#R-DJ')
let RVideo = document.querySelector('#R-videos')
let RAssociation = document.querySelector('#R-association')

let LMariage = document.querySelector('#L-mariage')
let LDJ = document.querySelector('#L-DJ')
let LVideos = document.querySelector('#L-videos')
let LAssociation = document.querySelector('#L-association')

let RST = document.querySelector('#R-ST')
let RDL = document.querySelector('#R-DL')
let RDJST = document.querySelector('#R-DJST')
let RDJDL = document.querySelector('#R-DJDL')

let LST = document.querySelector('#L-ST')
let LDL = document.querySelector('#L-DL')
let LDJST = document.querySelector('#L-DJST')
let LDJDL = document.querySelector('#L-DJDL')

let RPR = document.querySelector('#R-pro')
let RPA = document.querySelector('#R-particulier')

let LPR = document.querySelector('#L-pro')
let LPA = document.querySelector('#L-particulier')

let formInfos = document.querySelector('.form__infos')
let formDomaines = document.querySelector('.form__domaines')
let formMariage = document.querySelector('.form__mariage')
let formPro = document.querySelector('.form__pro')
let formComm = document.querySelector('.form__commentaire')

RMariage.addEventListener('click', ()=>{
    LMariage.style.backgroundColor = "#960000"
    LDJ.style.backgroundColor = "#202020"
    LVideos.style.backgroundColor = "#202020"
    LAssociation.style.backgroundColor = "#202020"

    formInfos.style.height = "20%"
    formDomaines.style.height = "20%"
    formMariage.style.display = "block"
    setTimeout(function (){
        formMariage.style.height = "20%"
    }, 20)
    formPro.style.height = "20%"
    formComm.style.height = "20%"

    RST.value = " en formule standard"
    RDL.value = " en formule deluxe"
    RDJST.value = " en formule standard avec DJ"
    RDJDL.value = " en formule deluxe avec DJ"
})
RDJ.addEventListener('click', ()=>{
    LMariage.style.backgroundColor = "#202020"
    LDJ.style.backgroundColor = "#960000"
    LVideos.style.backgroundColor = "#202020"
    LAssociation.style.backgroundColor = "#202020"

    formInfos.style.height = "25%"
    formDomaines.style.height = "25%"
    formMariage.style.height = "0%"
    setTimeout(function (){
        formMariage.style.display = "none"
    }, 300)
    formPro.style.height = "25%"
    formComm.style.height = "25%"

    RST.value = ""
    RDL.value = ""
    RDJST.value = ""
    RDJDL.value = ""
})
RVideo.addEventListener('click', ()=>{
    LMariage.style.backgroundColor = "#202020"
    LDJ.style.backgroundColor = "#202020"
    LVideos.style.backgroundColor = "#960000"
    LAssociation.style.backgroundColor = "#202020"

    formInfos.style.height = "25%"
    formDomaines.style.height = "25%"
    formMariage.style.height = "0%"
    setTimeout(function (){
        formMariage.style.display = "none"
    }, 300)
    formPro.style.height = "25%"
    formComm.style.height = "25%"

    RST.value = ""
    RDL.value = ""
    RDJST.value = ""
    RDJDL.value = ""
})
RAssociation.addEventListener('click', ()=>{
    LMariage.style.backgroundColor = "#202020"
    LDJ.style.backgroundColor = "#202020"
    LVideos.style.backgroundColor = "#202020"
    LAssociation.style.backgroundColor = "#960000"

    formInfos.style.height = "25%"
    formDomaines.style.height = "25%"
    formMariage.style.height = "0%"
    setTimeout(function (){
        formMariage.style.display = "none"
    }, 300)
    formPro.style.height = "25%"
    formComm.style.height = "25%"

    RST.value = ""
    RDL.value = ""
    RDJST.value = ""
    RDJDL.value = ""
})

RST.addEventListener('click',()=>{
    LST.style.backgroundColor = "#960000"
    LDL.style.backgroundColor = "#202020"
    LDJST.style.backgroundColor = "#202020"
    LDJDL.style.backgroundColor = "#202020"
})
RDL.addEventListener('click',()=>{
    LST.style.backgroundColor = "#202020"
    LDL.style.backgroundColor = "#960000"
    LDJST.style.backgroundColor = "#202020"
    LDJDL.style.backgroundColor = "#202020"
})
RDJST.addEventListener('click',()=>{
    LST.style.backgroundColor = "#202020"
    LDL.style.backgroundColor = "#202020"
    LDJST.style.backgroundColor = "#960000"
    LDJDL.style.backgroundColor = "#202020"
})
RDJDL.addEventListener('click',()=>{
    LST.style.backgroundColor = "#202020"
    LDL.style.backgroundColor = "#202020"
    LDJST.style.backgroundColor = "#202020"
    LDJDL.style.backgroundColor = "#960000"
})

RPR.addEventListener('click',()=>{
    LPR.style.backgroundColor = "#960000"
    LPA.style.backgroundColor = "#202020"
})
RPA.addEventListener('click',()=>{
    LPR.style.backgroundColor = "#202020"
    LPA.style.backgroundColor = "#960000"
})

let userTel = document.querySelector('#userTel')
let inputValue = "";
userTel.addEventListener("input", function(event) {
    if (!/^[0-9.]*$/.test(event.target.value)) event.target.value = inputValue;
    inputValue = event.target.value;
})
function auto(){
    var nb = document.getElementById('userTel').value;
    if(document.getElementById('userTel').value.length == 2 
    || document.getElementById('userTel').value.length == 5
    || document.getElementById('userTel').value.length == 8
    || document.getElementById('userTel').value.length == 11){
      document.getElementById('userTel').value = nb + ".";
    }
  }