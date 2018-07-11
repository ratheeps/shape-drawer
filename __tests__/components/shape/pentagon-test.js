import React from 'react';
import Pentagon from '../../../app/components/shape/pentagon/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Pentagon properties={{length : 100}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
