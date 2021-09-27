import React from 'react'
import { Checkbox } from 'antd';

function CheckBox(prop) {
  const {text} =prop
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
 <Checkbox onChange={onChange}>{text}</Checkbox>
  )
}

export default CheckBox





