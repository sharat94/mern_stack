tasks = [];

function Task(data) {
  this.title = data.title || 'task name';
  this.status = 'open';
  this.createdAt = new Date();
  this.dueDate = data.dueDate || new Date();
  
  this.details = function(){
    return `${this.title} - ${this.status} - ${this.dueDate}`
  }
  this.markAsComplete = function(){
    this.status = 'closed';
  }

  this.isOverDue = function(){
    if (this.dueDate <  new Date){
      return true;
    }else{
      return false;
    }
  }
  this.save = function(){
    tasks.push(this);
    return this;
  }
  this.destroy = function(){
    var position = tasks.indexOf(this);
    if (position > -1){
      tasks.splice(position, 1);
    }
    return tasks;
  }
}

Task.listOverDue = function(){
  return tasks.filter(function(task){
    if (task.status == 'open' && task.dueDate < new Date){
      return task
    }
  });
}

Task.openTasks = function(){
  return tasks.filter(function(task){
    return task.status == 'open';
  });
}

Task.all = function() { //static methods
  return tasks;
}

Task.count = function() {
  return tasks.length;
}

var t1 = new Task({title: 'This is something', status: 'open'});
console.log(t1.save());

var t2 = new Task({title: 'This is something else', dueDate: new Date('05-29-2018')});
console.log(t2.save());

console.log('Tasks Total count', Task.count());

Task.all().forEach(function(task){
  console.log(task.details());
})

t1.markAsComplete();
Task.all().forEach(function(task){
  console.log(task.details());
})

console.log(t1.destroy());
Task.all().forEach(function(task){
  console.log(task.details());
})
