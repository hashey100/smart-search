import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import PaginationHubList from '@/components/pagination-hub-list/pagination-hub-list.vue';

Vue.use(Vuetify);

const localVue = createLocalVue();

localVue.use(Vuex);

describe('pagination-hub-list.vue', () => {
  let getters; let store; let wrapper; let actions;

  beforeEach(() => {
    getters = {
      paginationNumber: () => 1,
      people: () => [
        {
          name: 'Jack',
          age: '28',
          gender: 'male',
          eyeColor: 'green',
          preferences: {
            pet: 'dog',
            fruit: 'orange',
          },
        },
        {
          name: 'Rob',
          age: '22',
          gender: 'male',
          eyeColor: 'blue',
          preferences: {
            pet: 'bird',
            fruit: 'banana',
          },
        },
      ],
    };

    actions = {
      setPaginationNumber: jest.fn(),
    };

    store = new Vuex.Store({
      getters,
      actions,
    });

    wrapper = shallowMount(PaginationHubList, { store, localVue });
  });

  it('Renders Pagination Component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Renders a table row', () => {
    expect(wrapper.find('tr').exists()).toBe(true);
  });

  it('Outputs person into table row', () => {
    expect(wrapper.find('tbody tr:first-child > td:first-child').text()).toBe('Jack');
  });

  it('Test paginatedData object matches', () => {
    expect(wrapper.vm.paginatedData).toMatchObject(getters.people());
  });

  it('Test searchQuery', () => {
    wrapper.setData({ search: 'Jack' });
    expect(wrapper.vm.searchQuery).toMatchObject([getters.people()[0]]);
  });
});
