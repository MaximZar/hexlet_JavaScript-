const renderTasks = (tasks) => {
  const tasksWrap = document.querySelector('div[data-container="tasks"]');
  tasksWrap.innerHTML = '';
  const ul = document.createElement('ul');

  for (const task of tasks) {
    const li = document.createElement('li');
    li.append(task);
    ul.append(li);
  }
  if (tasks.length !== 0) tasksWrap.append(ul);
};
const renderLists = (lists) => {
  const listsWrap = document.querySelector('div[data-container="lists"]');
  listsWrap.innerHTML = '';
  const ul = document.createElement('ul');

  for (const list of lists) {
    const { name } = list;
    if (list.main) {
      const mainLi = document.createElement('li');
      const b = document.createElement('b');
      b.append(name);
      mainLi.append(b);
      ul.append(mainLi);

      renderTasks(list.tasks);
    } else {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', `#${name.toLowerCase()}`);
      a.append(name);
      // switch List
      a.addEventListener('click', (event) => {
        const value = event.target.textContent;
        lists.forEach((item) => item.name === value ? item.main = true : item.main = false);
        renderLists(lists);
      });
      li.append(a);
      ul.append(li);
    }
  }

  listsWrap.append(ul);
};


const app = () => {
  const lists = [{ name: 'General', main: true, tasks: [] }];
  const addNewList = (event) => {
    event.preventDefault();
    const form = event.target;
    const { value } = form.querySelector('input[type="text"]');
    lists.push({ name: value, main: false, tasks: [] });
    renderLists(lists);
  };
  const addNewTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const { value } = form.querySelector('input[type="text"]');
    const list = lists.filter((item) => item.main)[0];
    list.tasks.push(value);
    renderTasks(list.tasks);
  };

  // add Task
  document.querySelector('form[data-container="new-task-form"]')
    .addEventListener('submit', addNewTask);
  // add List
  document.querySelector('form[data-container="new-list-form"]')
    .addEventListener('submit', addNewList);

  renderLists(lists);
};
export default app;

app();