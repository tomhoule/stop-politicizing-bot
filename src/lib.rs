#![feature(use_extern_macros)]

#[macro_use]
extern crate log;
extern crate failure;
extern crate pretty_env_logger;
extern crate rand;
#[macro_use]
extern crate wasm_bindgen;

use rand::prelude::*;
use wasm_bindgen::prelude::*;

const WORDS: &'static str = include_str!("words.txt");

pub fn random_word() -> &'static str {
    let words: Vec<&'static str> = WORDS.lines().collect();
    let mut rng = thread_rng();
    let word = rng.choose(&words).expect("words is empty");
    debug!("generated random word: {:?}", word);
    word
}

#[wasm_bindgen]
pub fn full_tweet() -> String {
    pretty_env_logger::init();
    format!("Stop policitizing {}", random_word())
}
