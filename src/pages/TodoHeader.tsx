import React, { useCallback,useState } from "react";
import { Button, message, Input } from "antd";

interface TodoHeaderProps {
    // 待办事项的标题
    title: string

    // 图标的链接
    iconUrl?: string;

    children?: React.ReactElement

    // 点击标题的事件
    onClickTitle?: (title: string) => void;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({
    title,
    iconUrl,
    children,
    onClickTitle,
}) => {
    const [currentTitle, setCurrentTitle] = useState<string>(title);

    // 点击标题的方法
    const clickTitleFn = useCallback(() => {
        onClickTitle?.(title);
    }, [onClickTitle, title]);

    return (
        <div>
            {iconUrl && <img src={iconUrl} />}

            <span
                data-testid="todo-header-title"
                onClick={clickTitleFn}
            >
                {currentTitle}
            </span>

            <Input
                type="text"
                style={{ width: 300, display: "flex" }}
                value={currentTitle}
                onChange={e => setCurrentTitle(e.target.value)}
            />

            {children}
        </div>
    );
}

export default TodoHeader