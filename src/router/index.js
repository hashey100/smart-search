import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Person from '../views/Person.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about/',
    name: 'About',
    component: About,
  },
  {
    path: '/person',
    name: 'Person',
    component: Person,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
