import {
  ModalForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Register: React.FC = () => {
  const [form] = Form.useForm<{ name: string; company: string }>();
  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
      title="注册账户"
      trigger={
        // <Button type="primary">
        //   <PlusOutlined />
        //   新建表单
        // </Button>
        <a
          style={{
            float:"right"
          }}
        >
          注册账户
        </a>
      }
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('提交成功');
        return true;
      }}
      layout='vertical'
    >
      <ProFormText
          name="userName"
          label="用户名"
          placeholder="请输入用户名"
          width='md'
        />
        <ProFormText.Password
          name="password"
          label="密码"
          placeholder="请输入密码"
          width='md'
          rules={[
            {
              required: true,
              message: "请输入账号!",
            },
          ]}
        />
      <ProFormSelect
        request={async () => [
          {
            value: 'admin',
            label: '管理员',
          },
          {
            value: 'user',
            label: '普通用户',
          },
        ]}
        width="xs"
        name="useMode"
        label="合同约定生效方式"
      />

    </ModalForm>
  );
};

export default Register;