import { Button, message } from "antd";
import { useCallback } from "react";

const MyButton = () => {
    const showMessage = useCallback(() => {
        message.info(`展示一个提示`);
    }, []);

    return (
        <div>
            <Button type="primary" onClick={showMessage}>
                这是一个按钮
            </Button>
        </div>
    );
}

export default MyButton