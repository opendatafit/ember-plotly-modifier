import Modifier, { ArgsFor, PositionalArgs, NamedArgs } from 'ember-modifier';
import Owner from '@ember/owner';
import { registerDestructor } from '@ember/destroyable';

import Plotly, { Data, Layout, Config } from 'plotly.js';

interface PlotlyModifierArgs {
  Args: {
    Named: {
      data: Data[];
      layout?: Partial<Layout>;
      config?: Partial<Config>;
      isVisible?: boolean;
    };
    Positional: [];
  };
}

export default class PlotlyModifier extends Modifier<PlotlyModifierArgs> {
  private _plotlyDom!: HTMLElement;

  constructor(owner: Owner, args: ArgsFor<PlotlyModifierArgs>) {
    super(owner, args);
    registerDestructor(this, this.destructor);
  }

  destructor() {
    if (this && this._plotlyDom) {
      Plotly.purge(this._plotlyDom);
    }
  }

  async modify(
    element: HTMLElement,
    []: PositionalArgs<PlotlyModifierArgs>,
    { data, layout, config, isVisible }: NamedArgs<PlotlyModifierArgs>
  ) {
    if (!element) {
      throw new Error('Modifier has no element');
    }

    if (!data) {
      console.warn('ember-plotly-modifier: no data passed to modifier');
      return;
    }

    if (!this._plotlyDom) {
      this._plotlyDom = element;
      await Plotly.newPlot(this._plotlyDom, data, layout, config);
    } else {
      await Plotly.react(this._plotlyDom, data, layout, config);
    }
  }
}
