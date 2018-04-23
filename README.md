<h1 align="center" style="margin-bottom: 2rem;">
  <img src="https://github.com/lol-russo/sheety/raw/master/logo.png" alt="sheety" title="sheety" width="200">
  <br>
  sheety
  <br>
  <br>
</h1>


```
yarn add sheety
```


## Usage

Sheety works with any framework, but this example uses React.

```jsx
import React from "react";
import css from "sheety";

const className = css`
  font-size: 6em;
  color: #333;
  text-align: center;
`;

const Title = props => {
  return (
    <h1 className={className}>sheety example 💩</h1>
  )
};

export default Title;

```

## Credit

`sheety` was bootstrapped following Kyle Hohenberger's article [Writing A CSS-in-JS Library From Scratch](https://medium.com/@tkh44/writing-a-css-in-js-library-from-scratch-96cd23a017b4). It's definitely an interesting exercise for anyone who is interested in CSS-in-JS and wants to learn more.

Looking for a more powerful solution? Check out [emotion](https://github.com/emotion-js/emotion).
