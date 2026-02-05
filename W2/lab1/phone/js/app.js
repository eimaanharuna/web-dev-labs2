const accepted = document.querySelector('#acceptButton')
const decline = document.querySelector('#declineButton')
const message = document.querySelector('#messageButton')
const cstatus = document.querySelector('#callStatus')
accepted.addEventListener('click' , (evt) => {
    cstatus.textContent = 'Call Accepted!';
    cstatus.className = 'accepted'
})
decline.addEventListener('click' , (evt) => {
    cstatus.textContent = 'Call Declined';
    cstatus.className = 'declined'
})
message.addEventListener('click' , (evt) => {
    cstatus.textContent = 'Sending Message...'
    cstatus.className = 'message' 
    setTimeout(() => {
 alert("I will call you later"); // Show alert after update
}, 500);
})

