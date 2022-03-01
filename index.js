import * as wasm from "wasm_prolog";

const button = document.getElementById("execute");
button.addEventListener("click", _ => {
    const code = document.getElementById('code').value;
    const r = wasm.run(code);
    const result = document.getElementById('result');
    result.innerHTML = r;
})