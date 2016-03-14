this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/todo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container" ng-controller="TodoCtrl as todo">\n  <div class="jumbotron">\n    <h1 align="center">Todo Application</h1>\n    <br>\n\n    <div id="todo-form" class="row">\n      <div class="col-sm-8 col-sm-offset-2 text-center">\n        <form ng-submit="addTodo()">\n          <input type="text" placeholder="Add Todo!" ng-model="value" />\n          <input type="submit" value="Add"/>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div id="todo-list" class="row">\n    <div class="col-sm-4 col-sm-offset-4">\n      <div class="checkbox" ng-repeat="singleTodo in todos">\n        <label>\n          <input type="checkbox" ng-click="todo.removeTodo(singleTodo)">\n          {{ singleTodo.value }}\n        </label>\n        <button ng-click="removeTodo(singleTodo)">Remove</button>\n      </div>\n    </div>\n  </div>\n</div>\n';

}
return __p
};