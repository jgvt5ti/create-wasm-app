import * as wasm from "wasm_prolog";

const button = document.getElementById("execute");
button.addEventListener("click", _ => {
    const program = document.getElementById('program').value;
    const goal = document.getElementById('goal').value;
    const r = wasm.run(program, goal);
    const result = document.getElementById('result');
    result.innerHTML = r;
})