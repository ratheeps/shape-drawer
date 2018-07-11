import React from 'react';
import Heptagon from '../../../app/components/shape/heptagon/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Heptagon  properties={{radius : 100}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
