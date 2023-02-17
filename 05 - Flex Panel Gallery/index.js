const panels = document.querySelectorAll('.panel')
console.log(panels);

const toggleOpen = () => {
    console.log('Hello');
    this.classList.toggle('open')
}


// function toggleOpen() {
//     console.log('Hello');
//     this.classList.toggle('open');
//   }

panels.forEach(panel => panel.addEventListener("click", toggleOpen))

toggleOpen()