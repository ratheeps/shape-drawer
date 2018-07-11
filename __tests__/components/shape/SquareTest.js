import React from 'react';
import Square from '../../../app/components/Shape/Square/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Square properties={{length : 100}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
