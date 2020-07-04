import _ from 'lodash';

const makeLink = (branch) => {
  const [ key, nodes ] = branch;
  if (!nodes) {
    return { key: [parent] };
  }
  return {
    key: nodes.reduce()
  }
};

const combine = (...branches) => {

};
export default combine;