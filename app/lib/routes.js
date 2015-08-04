
Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/page1', {
    name: 'page1',
    controller: 'Page1Controller',
    where: 'client'
});

Router.route('/page2', {
    name: 'page2',
    controller: 'Page2Controller',
    where: 'client'
});