import React from 'react';
import Rectangle from '../../../app/components/Shape/Rectangle/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Rectangle properties={{height : 100, width: 150}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
