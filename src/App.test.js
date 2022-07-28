import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RewardPage from "./Pages/RewardPage/index.js"
import App from './App';

describe ( `RewardPage`, ()=> {
  it('should match snapshot', () => {
    })
    const { asFragment } = render(<RewardPage > SnapShot Rewardpage </RewardPage>);
    expect(asFragment()).toMatchSnapshot();
})
