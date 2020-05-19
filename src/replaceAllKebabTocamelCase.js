import { camelCase } from 'lodash';

const normalize = (document) =>
  document.body.getElementsByTagName('*')
    .forEach((el) => el.className = [...el.classList]
      .map((kebab) => camelCase(kebab)).join(' '));