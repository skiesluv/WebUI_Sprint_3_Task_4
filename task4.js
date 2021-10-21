const newComment = document.querySelector('.newComment1');
const textAreaMsg = document.querySelector('.messageTextarea');
const newDateMsg = document.querySelector('.newspanc1');

function trimfield(str) 
{ 
    return str.replace(/^\s+|\s+$/g,''); 
}

function validate()
{
    if(textAreaMsg.value == '') 
    {      
        alert("Please Provide Details!");
        textAreaMsg.focus();
        return false;       
    }
    else
    {
        setTime();
        return true;
    }
    
}


function getTimeStamp() {
       var now = new Date();
       return ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " " + now.getHours() + ':'
 + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now.getSeconds()) : (now.getSeconds())));
}

function setTime() {
    newDateMsg.innerHTML = getTimeStamp();
}

newComment.insertAdjacentHTML('beforebegin', `<hr />`);

document.querySelector('.sendMessage').addEventListener('click', () => {
    validate();
    let dataMessage = textAreaMsg.value;
    newComment.innerHTML = dataMessage;
    document.getElementById('textAreaId').value = '';
})