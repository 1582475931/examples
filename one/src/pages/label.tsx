import * as React from 'react';
import { Label } from 'remax/one';
import './index.css';

export default function LabelDemo() {
  return (
    <Label
      id="label"
      for="label"
      className="label"
      style={{
        color: 'purple'
      }}
    >
      label
    </Label>
  );
}
