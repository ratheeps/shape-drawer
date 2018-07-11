import React from 'react';
import Square from '../../../app/components/shape/square/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Square properties={{length : 100}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
