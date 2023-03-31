import React from 'react'
import {Form, Input, Button, message} from 'antd'

interface MyFormProps {
   [key: string]: any
}

const MyForm: React.FC<MyFormProps> = ({onFinish, onFinishFailed}) => {

    // const onFinish1 = (values: any) => {
    //     // message.success('Form submitted successfully!')
    //     // console.log('onFinish', values)
    // }

    // const onFinishFailed = ({ values, errorFields, outOfDate }: any) => {
    //     console.log('onFinishFailed', errorFields)
    // }

    return (
        <div>
            <Form
                data-testid="form-id"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary" 
                        htmlType="submit"
                        data-testid="submit-id"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default MyForm