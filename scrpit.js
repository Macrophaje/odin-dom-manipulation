const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I’m red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const heading = document.createElement('h3');
heading.textContent = "I’m a blue h3!";
heading.style.color = "blue";

container.appendChild(heading);

const div = document.createElement('div');
div.style.borderStyle = "solid";
div.style.backgroundColor = "pink";

const heading2 = document.createElement('h1');
heading2.textContent = "I’m in a div";

const paragraph2 = document.createElement('p');
paragraph2.textContent = "ME TOO!"

div.appendChild(heading2);
div.appendChild(paragraph2);

container.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction(event) {
    if(event.shiftKey){
        alert("YAY! YOU DID IT!");
    }
} 

// btn.onclick = alertFunction;

// btn.addEventListener('click', alertFunction);

// btn.addEventListener('click', function (e) {
//     console.log(e);
//   });

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
      button.addEventListener('click', () => {
          alert(button.id)
      });
  });