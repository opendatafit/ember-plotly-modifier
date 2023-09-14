import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import { Data } from 'plotly.js';

import {
  DATA_1,
  DATA_2,
} from '../utils/data';

export default class IndexController extends Controller {
  @tracked data: Data[];

  constructor() {
    super(...arguments);

    this.data = DATA_1;
  }

  @action updateData() {
    console.log('update data');
    this.data = DATA_2;
  }
}
