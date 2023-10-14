function answer(){
  const box = document.getElementById('a');
  const ansDiv= document.getElementById('ans');
  const answer =box.value;
  if(answer == 'coffee'){
    ansDiv.innerHTML = 'correct';
  }
  
  if (answer != 'coffee'){
    ansDiv.innerHTML = 'wrong';
  }
}

window.answer=answer;
