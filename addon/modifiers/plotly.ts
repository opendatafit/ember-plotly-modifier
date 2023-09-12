import Modifier from 'ember-modifier';

interface PlotlyModifierArgs {
  Args: {
    Named: {};
    Positional: [];
  }
}

export default class PlotlyModifier extends Modifier<PlotlyModifierArgs> {
  async modify(element: Element /*, positional, named*/) {}
}
