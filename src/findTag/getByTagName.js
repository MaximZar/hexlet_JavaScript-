const search = (document, tag) => {
  const searchInner = (item) => {
    const downLevel = [...item.children].map(el => searchInner(el)).flat();
    return item.tagName.toLowerCase() === tag ? [item, ...downLevel] : downLevel;
  };

  const top = document.documentElement;
  if (top.tagName.toLowerCase() === tag) return [top];

  return searchInner(top);
};

// export default search;


console.log(search(document, 'html')) //.toEqual([document.documentElement]);
console.log(search(document, 'body')) //.toHaveLength(1);
// console.log(search(document, 'td')) //.toHaveLength(2);
// console.log(search(document, 'ul')) //.toHaveLength(2);
// console.log(search(document, 'li')) //.toHaveLength(4);
// console.log(search(document, 'div')) //.toHaveLength(2);
// console.log(search(document, 'title')) //.toEqual([document.head.firstElementChild]);
// code without getElementsByTagName