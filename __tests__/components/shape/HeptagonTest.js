import React from 'react';
import Heptagon from '../../../app/components/Shape/Heptagon/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Heptagon  properties={{length : 100}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
