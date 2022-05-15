
function playSound(e){
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return; //stop function from running

  key.classList.add('playing')
  audio.currentTime = 0; //rewind to the start
  audio.play();
  
};  

function removeTransition(e){
  if(e.propertyName !== 'transform') return;//skip it if not a transform
  this.classList.remove('playing')
} 

const keys =  Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);



