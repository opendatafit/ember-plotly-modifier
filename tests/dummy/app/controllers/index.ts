import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import { Data, Config } from 'plotly.js';

import { DATA_1, DATA_2 } from '../utils/data';

export default class IndexController extends Controller {
  @tracked data: Data[];
  @tracked config: Config;

  constructor() {
    super(...arguments);

    this.config = {
      responsive: true,
    } as Config;
    this.data = DATA_1;
  }

  @action updateData() {
    console.log('update data');
    this.data = DATA_2;
  }
}
