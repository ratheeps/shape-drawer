import React from 'react';
import Parallelogram from '../../../app/components/Shape/Parallelogram/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Parallelogram properties={{height : 100, width:200}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
