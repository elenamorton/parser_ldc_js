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
 * Each input string is processed independently;
 * A default output string is retured in case of null or emplty input string, set as '##@@$$__%__$$@@##' 

### Implementation
* This application contains a single class 'App', that defines one main method 'processInputStr', and three helper methods to allow incremental input processing: removal of duplicates 'removeDuplicateChars', removal of extra chars 'removeExtraChars', and replacing certain chars 'replaceChars';
* There are a set of const values to allow easy setup of the followings: 
    * output size limit as 'OUTPUT_SIZE';
    * an array of chars set to be additionally removed as 'OTHER_CHARS_TO_REMOVE', and 
    * default output string retured in case an empty/null input string is processed as 'DEFAULT_RESULT'.