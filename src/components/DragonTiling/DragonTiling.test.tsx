import React from "react";
import { render } from "@testing-library/react";
import DragonTiling from "./DragonTiling";
import "jest-canvas-mock";


describe('DragonTiling', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<DragonTiling/>);
        expect(baseElement).toBeTruthy();
    });
    }
);