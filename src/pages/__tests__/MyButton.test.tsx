import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import MyButton from "../MyButton";

describe('组件测试', () => {
    test("MyButton render", () => {
        render(<MyButton />);
        const linkElement = screen.getByText("这是一个按钮");
        expect(linkElement).toBeInTheDocument();
    });
})
