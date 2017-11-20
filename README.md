# Timers.js
Pure JavaScript timer plugin


## Installation
**NPM**
```sh
npm install timers.js --save
```
**In Node.js**
```js
require('pre.js')
```
**Direct download** from [latest releases](https://github.com/renjithvk/timer.js/releases)

## Usage
**Include**
```js
<script src="dist/js/timers.js"></script>
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
| isStoped     | Set timer status     | boolean                   | false         |

## Methods
<table>
    <tr>
        <th>Method</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>.get('second|minute|hour')</td>
        <td>Get the current time</td>
    </tr>
    <tr>
        <td>.set('second|minute|hour', value)</td>
        <td>Set time</td>
    </tr>
    <tr>
        <td>.pause()</td>
        <td>Pause the timer</td>
    </tr>
    <tr>
        <td>.stop()</td>
        <td>Stop the timer</td>
    </tr>
    <tr>
        <td>.start()</td>
        <td>Start the timer</td>
    </tr>
</table>
