import React from 'react';
import ScaleneTriangle from '../../../app/components/Shape/ScaleneTriangle/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<ScaleneTriangle properties={{height : 100, width: 150}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
