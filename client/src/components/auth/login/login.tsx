import React from 'react';
import style from '../auth.module.scss';
import '@ant-design/compatible/assets/index.css';
import { Row, Col, Input, Form, Button } from 'antd';
import GoogleLogin from 'react-google-login';
import googleIcon from '../../../assets/images/icon-google.svg';
import { useForm } from 'antd/es/form/util';
import AuthHeader from '../auth-header';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/authSlice';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const finished = () => {};
  const responseGoogle = (response: any) => {
    console.log(response);
  };
  const onMailChange = () => {};

  return (
    <Row className={style.container}>
      <Col span={24} className={'text-center'}>
        <AuthHeader targetLocation={'register'} />
        <Row>
          <Col
            className={style.authForm}
            xs={{ span: 20, offset: 2 }}
            md={{ span: 8, offset: 8 }}
            xl={{ span: 6, offset: 9 }}
            xxl={{ span: 4, offset: 10 }}
          >
            <Row className="text-center">
              <Col span={24}>
                <h1 className={` ${style.headingTitle}`}>Είσοδος λογαριασμού </h1>
              </Col>
            </Row>
            <div className={style.slideContainer}>
              <Col span={24} className={'mr-1 mt-4 text-left'}>
                <Form form={form} onFinish={finished}>
                  <Row>
                    <Col span={24}>
                      <Form.Item name="mail" hasFeedback>
                        <Input onChange={onMailChange} placeholder="Λογαριασμός email" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item name="mail" hasFeedback>
                        <Input.Password onChange={onMailChange} placeholder="Κώδικος" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row className="mt-5">
                    <Button htmlType={'submit'} block className={`${style.inputButton} auth-disabled`} type={'primary'}>
                      Σύνεχεια
                    </Button>
                  </Row>
                  <Row>
                    <Col span={24} className={'text-center'}>
                      Ή
                    </Col>
                  </Row>
                  <Row>
                    <GoogleLogin
                      clientId="315458143733-80m56pstigk1t5q22i3fdrpa0jbvd570.apps.googleusercontent.com"
                      render={renderProps => (
                        <Button
                          id={'registerEmailGButton'}
                          block
                          className={style.inputButton}
                          onClick={renderProps.onClick}
                        >
                          <img className={style.buttonIcon} src={googleIcon} alt="" />
                          <span className="ml-1">Σύνεχεια με Google</span>
                        </Button>
                      )}
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                  </Row>
                  <Row className={'mt-5 text-smaller text-center'}>
                    <Col span={24}>
                      <button
                        onClick={() => {
                          dispatch(login({ history }));
                        }}
                      >
                        Lowkey login
                      </button>
                      <hr />
                      <div className="mt-2">
                        Δέν έχετε λογαριασμό; <span className={'light-sky-blue'}>Εγγραφείτε</span>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Login;
