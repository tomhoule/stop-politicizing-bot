#!/bin/bash

set -ex

cargo +nightly build --target wasm32-unknown-unknown

wasm-bindgen --nodejs target/wasm32-unknown-unknown/debug/stop_politicizing_bot.wasm \
  --out-dir .
