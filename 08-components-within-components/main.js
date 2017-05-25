Vue.component('task-list', {
  template: `<div>
      <task v-for="task in tasks">{{ task.description }}</task>
    </div>`,

  data() {
    return {
      tasks: [
        { description: 'Go shoping', completed: true },
        { description: 'Buy Ethereum', completed: true },
        { description: 'Cook dinner', completed: false },
        { description: 'Learn composability', completed: false }
      ]
    };
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root'
});