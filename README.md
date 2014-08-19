# psdevTextTyper
==============

Script that print text slowly, letter by letter.

### Usage
```
var textTyper = new psdevTextTyper({
    $el: $( '#output' ),
    interval: 50
});

textTyper.print( 'Hello world!' );
```

### Methods

Method        | Example       | Description
------------- | ------------- | -------------
print         | `textTyper.print({ interval: 150, text: 'Hello world!' );`  | start text printing
