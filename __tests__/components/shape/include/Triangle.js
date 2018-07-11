import React from 'react';
import Triangle from '../../../../app/components/Support/Triangle/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Triangle />).toJSON();
    expect(rendered).toBeTruthy();
});
