

function loadbody() {
  console.log('GET FIRESTORE DATA');
  const date = new Date();
  console.log(date);
  fs.collection('predictions').onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
          if (change.type == "added") {
              renderData(change.doc);
          }
          else if (change.type == 'removed') {
              let li = todoContainer.querySelector('[data-id=' + change.doc.id + ']');
              todoContainer.removeChild(li);
          }
      })
  })
}

// retriving todos
function renderData(individualDoc) {
  // https://github.com/HamzaAnwar1998/todoAppWithVanillaJS-Firebase-/blob/bd5ecdd476c9b377daed5be71e8c8796c670c057/public/users.js#L35
  // Here is where you add the table stuff
  const data = individualDoc.data();
  console.log(data);

  // parent div
  const container = document.getElementById('prediction-container');
  console.log(container);

  // Inner Box
  let innerBox = document.createElement('div');
  innerBox.className = "col-3 box d-flex justify-content-center align-items-center";

  let stack = document.createElement('p');
  // probable - plausible - preferable - possible
  console.log(data.future);
  switch (data.future) {
    case 'probable':
      innerBox.style.backgroundImage="url(./images/platewhite.png)";
      break;
    case 'plausible':
         stack.style.color="white";
      innerBox.style.backgroundImage="url(./images/platebrown.png)";
      break;
    case 'preferable':
      innerBox.style.backgroundImage="url(./images/plategreen.png)";
      break;
    case 'possible':
      stack.style.color="white";
      innerBox.style.backgroundImage="url(./images/plateblack.png)";
      break;
    default:
      break;
  }
  stack.innerHTML = `In the year <b>${data.year}</b> it is <b>${data.future}</b> we will <b>${data.effect}</b> because <b>${data.cause}</b>.`;

  innerBox.appendChild(stack);
  container.appendChild(innerBox);
}


// adding todos to firestore database
const form = document.getElementById('fs-form');
console.log(form);
form.addEventListener('submit', e => {
    e.preventDefault();
    const date = new Date();
    console.log('SAVING FIRESTORE DATA');
    const year = form['year'].value;
    const future = form['future'].value;
    const effect = form['effect'].value;
    const cause = form['cause'].value;
    fs.collection('predictions').doc().set({
      year,
      future,
      effect,
      cause,
      date,
    }).then(() => {
        console.log('predictions added');
    }).catch(err => {
        console.log(err.message);
    })
    form.reset();
})


