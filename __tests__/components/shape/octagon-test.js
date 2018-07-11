import React from 'react';
import Hexagon from '../../../app/components/Shape/Hexagon/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Hexagon properties={{length : 100}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
