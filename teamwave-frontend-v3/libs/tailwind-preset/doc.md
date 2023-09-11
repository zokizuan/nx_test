
*ADD the shared preset in app/libs like this*

```js
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
// add the below line
const sharedTailwindConfig = require('../../libs/tailwind-preset/tailwind.config'); 

module.exports = {
  // add preset array
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};```