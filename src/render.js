const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    counterDOM.innerHTML = state.value;
    counterDOM.style.backgroundColor = state.color;

}