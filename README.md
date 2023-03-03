# hello-wasm-rs

Rust to WebAssembly example

## Building package

```sh
# install wasm-pack first
cargo install wasm-pack

# build @cgojin/hello-wasm
wasm-pack build --scope cgojin
```

## Publishing package

```sh
# https://www.npmjs.com/signup
npm adduser

cd pkg
npm publish --access=public
```

## Running example

```sh
cd site

# Installing dependencies first
npm install

# start http server
npm start
```

## References

[Compiling from Rust to WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm)
