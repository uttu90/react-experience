import React from 'react';

export function Route1(props) {
  return (
    <h1> This is example 1</h1>
  )
}

export function Route2(props) {
  console.log(props.opacity)
  return (
    <h1> This is example 2</h1>
  )
}