import React from 'react';
import EquilateralTriangle from '../../../app/components/Shape/EquilateralTriangle/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<EquilateralTriangle  properties={{length : 100}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
