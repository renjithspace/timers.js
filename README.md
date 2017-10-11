# Timer.js
Pure JavaScript timer plugin


## Installation
**Direct download** from [latest releases](https://github.com/renjithvk/timer.js/releases)

## Usage
**Include**
```js
<script src="src/js/timer.js"></script>
```
**Initialize**
```js
new Timer();
```

## Configuration
```js
new Timer({
    // Options here
    property: value,
    ...
});
```

## Options
| Property     | Description          | Available values          | Default value |
|--------------|----------------------|---------------------------|---------------|
| el           | Timer.js element     | Element selector (string) | '.timer'      |
| time.second  | Set initial second   | integer                   | 0             |
| time.minute  | Set initial minute   | integer                   | 0             |
| time.hour    | Set initial hour     | integer                   | 0             |
