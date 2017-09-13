# Strings Collections parsing

## Usage Instructions
* clone the repo and install Node.js modules
```shell
$ git clone https://github.com/elenamorton/parser_ldc_js.git
$ cd parser_ldc_js
$ npm install
```
* run tests
```shell
$ npm test
```
* start up the CLI Node application
```shell
$ npm start
```
### Used Technologies
* Vanilla JavaScript ES6
* NodeJS v6.11.2
* Npm v3.10.10
* Test suite based on Mocha(v3.5.3), Chai(v4.1.2)

### Requirements

Write a program with unit-tests to process a collection of string values which are passed to a method which returns a collection of processed strings. Code should be test-driven, efficient, re-usable and loosely coupled.

#### Headline specifications

 * The input strings may be any length and can contain any character;
 * Contiguous duplicate characters in the same case should be reduced to a single character in the same case; 
 * Underscores (_) and number 4 should be removed;
 * Dollar sign ($) should be replaced with a pound sign (£); 
 * Output strings must not be null or empty string;
 * Output strings should be truncated to max length of 15 chars. 

## Program design

### Assumptions

### Implementation