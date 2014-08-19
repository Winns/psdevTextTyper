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

### Options

Name        | Type                            | Description
------------|---------------------------------| -------------
$el         | jQuery element select           | Container for a text
interval    | Integer                         | Interval between letters
text        | String                          | Text to print

### Methods

Name        | Example       | Description
------------- | ------------- | -------------
print         | `textTyper.print({ interval: 150, text: 'Hello world!' );`  | Start text printing
