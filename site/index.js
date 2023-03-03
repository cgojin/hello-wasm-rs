// const js = import("@cgojin/hello-wasm");
const js = import("../pkg");

js.then(rust_module => {
    rust_module.greet("WebAssembly");
});
