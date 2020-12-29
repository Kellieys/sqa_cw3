import React from 'react';
import ReactDom from 'react-dom';
import Button from '../button';

import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing" , () => {
    const div = document.createElement("div");
    ReactDom.render(<Button />, div);
});

it("renders button correctly", () => {
    const { getByTestId } = render(<Button label="hello" />);
    expect(getByTestId('button')).toHaveTextConetnt("hello")
});

it("matches snapshot", () => {
    const tree = renderer.create(<Button label="hello"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});