import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = "desiged by 周文浩 谭红琼 谢华燕";

  const currentYear = new Date().getFullYear();

  return (
    <>
      <DefaultFooter
        copyright={`${currentYear} ${defaultMessage}`}
        links={[
          {
            key: 'github',
            title: (<GithubOutlined />),
            href: 'https://github.com/BlaineRan/ExamControllerSys',
            blankTarget: true,
          }
        ]}
      />
    </>
  );
};

export default Footer;
