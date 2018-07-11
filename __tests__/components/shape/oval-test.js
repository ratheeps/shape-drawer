import React from 'react';
import Oval from '../../../app/components/shape/oval/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Oval properties={{height : 100, width:200}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
