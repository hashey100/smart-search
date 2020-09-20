import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import PaginationHub from '@/components/pagination-hub/pagination-hub.vue';

Vue.use(Vuetify);

const localVue = createLocalVue();

localVue.use(Vuex);

describe('pagination-hub.vue', () => {
  let store; let wrapper; let actions;

  beforeEach(() => {
    actions = {
      setPaginationNumber: jest.fn(),
    };

    store = new Vuex.Store({
      actions,
    });

    wrapper = shallowMount(PaginationHub, {
      store,
      localVue,
      propsData: { pageSize: 12, current: 1 },
    });
  });

  it('Renders Pagination Hub', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('test getPageNumber next function', () => {
    expect(wrapper.vm.getPageNumber('next')).toBe(2);
  });

  it('test onInput function', () => {
    expect(wrapper.vm.onInput('next')).toBe(2);
  });
});
