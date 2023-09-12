import Modifier from 'ember-modifier';

import * as Plotly from 'plotly.js';

interface PlotlyModifierArgs {
  Args: {
    Named: {};
    Positional: [];
  }
}

export default class PlotlyModifier extends Modifier<PlotlyModifierArgs> {
  async modify(element: Element /*, positional, named*/) {
    console.log(Plotly);
  }
}
