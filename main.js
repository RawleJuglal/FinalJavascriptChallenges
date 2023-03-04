import './style.css'

const panicInput = document.getElementById('panic-input');
const panicBtn = document.getElementById('panic-btn');
let panicValue = panicInput.value;

panicInput.addEventListener('change', ()=> panicValue = document.getElementById('panic-input').value)
panicBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  let output = panic(panicValue);
  renderOutput(output, e.target.dataset.output)
})

function panic(str){
  let strArr = str.toUpperCase().split(' ')
  strArr = strArr.join(' 😱 ').concat('!')
  return strArr;
}

/*END OF PANIC*/
const whisperInput = document.getElementById('whisper-input');
const whisperBtn = document.getElementById('whisper-btn');
let whisperValue = whisperInput.value;

whisperInput.addEventListener('change', ()=> whisperValue = document.getElementById('whisper-input').value)
whisperBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  let output = whisper(whisperValue);
  renderOutput(output, e.target.dataset.output)
})

function whisper(str){
  const quiet = 'shh...'
  if(str.endsWith('!')){
      str = str.slice(0,-1)
  }
  return quiet.concat(str).toLowerCase()
}

/*END OF WHISPER*/

function renderOutput(output, loc){
  const locationOutput = document.getElementById(loc);
  locationOutput.textContent = output;
  locationOutput.style.display = 'block';
}