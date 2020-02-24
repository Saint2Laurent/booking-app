import React, {useState, useRef} from 'react';
import {Col, Form, Row} from "antd";
import RegisterEmail from "./register-email";
import '../../../styles/global.scss'
import {CSSTransition} from 'react-transition-group';
import RegisterInfo from "./register-info";
import './register-transitions.scss'
import logo from '../../../assets/images/logo3.svg'
import style from '../auth.module.scss'
import tag from '../../../assets/images/tag.svg'
import '../auth.scss'

const Register = () => {
    const [initView, setInitView] = useState(true)
    const sliderRef: any = useRef<HTMLDivElement | null>(null);
    const scroll = (view: boolean) => view ? sliderRef.current.scrollTo(sliderRef.current.scrollWidth, 0) : sliderRef.current.scrollTo(0, 0);

    const [mail, setMail] = useState('')

    const swapView = () => {
        setInitView(!initView)
        setTimeout(() => scroll(initView), 200)
    }


    return (
        <Row className={style.container}>
            <Col span={24} className={'text-center'}>
                <Row type={'flex'} justify={"center"}>
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
                                <h1 className={style.headingTitle}>Δημιουρήστε έναν λογαριασμό</h1>
                            </Row>
                            <div className={style.slideContainer} ref={sliderRef}>
                                <CSSTransition appear timeout={600} in={initView} classNames='swapViews'>
                                    <RegisterEmail swapView={swapView} setMail={setMail} />

                                </CSSTransition>
                                <CSSTransition timeout={900} in={!initView} classNames={'swapViews'}>
                                    <RegisterInfo initView={initView} mail={mail} />

                                </CSSTransition>
                            </div>
                        </Col>
                    </Form>
                </Row>
            </Col>
        </Row>
    );
};

export default Register;