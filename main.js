import './style.css'

let inputs = document.querySelectorAll('input');
inputs = Array.from(inputs);

let btns = document.querySelectorAll('button');
btns = Array.from(btns);

let inputValue = ''


inputs.map((input)=>{
  input.addEventListener('change', (e)=>{
    if(e.target.id === 'bonus-inputOne'){
      let fillplaceholder = document.getElementById('bonus-inputOne').value
      
      Array.from(document.getElementsByClassName('bonus-input-one')).map((span)=>{
        span.textContent = fillplaceholder
      })
    } else if(e.target.id === 'bonus-inputTwo'){
      let fillplaceholder = document.getElementById('bonus-inputTwo').value
      
      Array.from(document.getElementsByClassName('bonus-input-two')).map((span)=>{
        span.textContent = fillplaceholder
      })
    } else {
      return inputValue = document.getElementById(e.target.id).value
    }
  })
})

btns.map((btn)=>{
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    let output = '';
    if(e.target.dataset.func === 'panic'){
      output = panic(inputValue)
    } else if(e. target.dataset.func === 'whisper'){
      output = whisper(inputValue)
    } else if(e.target.dataset.func === 'caps'){
      output = caps(inputValue)
    } else if (e.target.dataset.func === 'title'){
      output = title(inputValue)
    } else if(e.target.dataset.func === 'bonus'){
      let bonus1 = document.getElementById('bonus-inputOne').value;
      let bonus2 = document.getElementById('bonus-inputTwo').value;
      output = bonus(bonus1, bonus2)
    } else if(e.target.dataset.func === 'emoji'){
      output = emojifyPhrase(inputValue)
    } else {
      console.log('Did not match anything')
    }
    Array.from(document.querySelectorAll('input')).map((input) => input.value = '');
    inputValue = ''
    renderOutput(output, e.target.dataset.output);
  })
})

function panic(str){
  console.log('entered panic')
  let strArr = str.toUpperCase().split(' ')
  strArr = strArr.join(' 😱 ').concat('!')
  console.log(strArr)
  return strArr;
}

/*END OF PANIC*/

function whisper(str){
  const quiet = 'shh...'
  if(str.endsWith('!')){
      str = str.slice(0,-1)
  }
  return quiet.concat(str).toLowerCase()
}

/*END OF WHISPER*/

function caps(str){
    return str.split('').map((letter, index) => {
        if(index % 2 === 0){
            return letter.toUpperCase();
        } else {
            return letter;
        }
    }).join('')
}


/* END OF CAPS */
function capitalizeWord(word){
  return (word.slice(0,1).toUpperCase()).concat(word.slice(1))
}

function title(str){
  return str.split(' ').map((word)=>{
     return capitalizeWord(word)
  }).join(' ')
}

/* END OF TITLE */

function bonus(val1, val2){
  let employeeArr = new Array(100).fill(0).map((item, index)=>{
      return {id: index + 1}
  }).map((item)=>{
      if(item.id % val1 === 0 && item.id % val2 === 0){
          return { id: item.id, bonus: 'JACKPOT! 1 Millon and a Yacht!'}
      } else if (item.id % val2 === 0){
          return { id: item.id, bonus: '$100,000 bonus!'}
      } else if (item.id % val1 === 0){
          return { id: item.id, bonus: 'Vacation!'}
      } else {
          return { id: item.id, bonus: ':('}
      }
  })
  let employeeText = ''
  employeeArr.map((item)=>{
      employeeText += `${item.id} - ${item.bonus}\n`
  })
  return employeeText;
}


/* END OF BONUS */

const emojis = {
  "smile": "😊",
  "angry": "😠",
  "party": "🎉",
  "heart": "💜",
  "cat":   "🐱",
  "dog":   "🐕"
}

function emojifyWord(word){
  let lookup = '';
  if(word.startsWith(':') && word.endsWith(':')){
      lookup = word.slice(1,-1)
      if(emojis[lookup]){
          return emojis[lookup]
      } else {
          return lookup;   
      }
  } else {
      return word;
  }  
}

function emojifyPhrase(phrase){
  return phrase.split(' ').map((part)=> emojifyWord(part)).join(' ')
}

function renderOutput(output, loc){
  const locationOutput = document.getElementById(loc);
  locationOutput.textContent = output;
  locationOutput.style.display = 'block';
}