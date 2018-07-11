import React from 'react';
import Circle from '../../../app/components/Shape/Circle/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Circle properties={{radius : 100}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
