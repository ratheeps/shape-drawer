import React from 'react';
import Shape from '../../../app/components/shape/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Shape data={{shape: null}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
