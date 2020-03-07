import React from 'react';
import style from '../auth.module.scss'
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Row, Col, Input } from 'antd';
import logo from "../../../assets/images/logo2.svg";
import tag from "../../../assets/images/tag.svg";
import FormItem from "antd/es/form/FormItem";
import {PasswordInput} from "antd-password-input-strength";



const Login = () => {
    return (
        <Row className={style.container}>
            <Col span={24} className={'text-center'}>
                <Row>
                    <Col span={24} className={'mt-4'}>
                        <img src={logo} style={{width: '3rem'}} alt=""/>
                    </Col>
                    <Col span={24}>
                        <img src={tag} style={{width: '6.5rem'}} alt=""/>
                    </Col>
                </Row>


                <Row>
                    <Form>
                        <Col className={style.authForm} offset={9} span={6} >
                            <Row className='text-center'>
                                <h1 className={style.headingTitle}>Είσοδος</h1>
                            </Row>
                            <Row className={`m-0`}>
                                <FormItem hasFeedback className={'mb-2'}>
                                <Input className={style.authInput} placeholder="Το email σας" />
                            </FormItem>
                            </Row>
                            <Form.Item>
                                <Input.Password placeholder="Κώδικος" />
                            </Form.Item>
                        </Col>
                    </Form>
                </Row>
            </Col>
        </Row>
    );
};

export default Login;