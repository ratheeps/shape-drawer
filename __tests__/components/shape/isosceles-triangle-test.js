import React from 'react';
import IsoscelesTriangle from '../../../app/components/Shape/IsoscelesTriangle/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<IsoscelesTriangle properties={{height : 100, width:200}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
