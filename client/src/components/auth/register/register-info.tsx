import React, {useEffect, useRef, useState} from 'react';
import style from "../auth.module.scss";
import {Button, Input, Row, Col, Form} from "antd";
import FormItem from "antd/es/form/FormItem";
import googleIcon from "../../../assets/images/icon-google.svg";
import {PasswordInput} from "antd-password-input-strength";

interface RegisterInfoProps {
    mail: string,
    initView: boolean
}

const RegisterInfo: React.FC<RegisterInfoProps> = ({mail, initView}: RegisterInfoProps) => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('');
    const fullNameRef = useRef<any>(null)

    useEffect(()=>{
        console.log('mail: ' + mail)
        if(!initView){
            fullNameRef.current.focus()
            setEmail(mail)
        }
    }, [initView])

    useEffect(()=>{
        console.log('info is init')
    }, [])



    const handleMailChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value);
    }

    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setFullName(e.target.value);
    }

    return (
        <Col span={24} className={'text-left'}>
            <Row className={`m-0 mt-3`}>
                <FormItem hasFeedback className={'mb-1'}>
                    <Input onChange={handleMailChange} value={email} className={style.authInput} placeholder="Το email σας" />
                </FormItem>
            </Row>

            <Row className={`m-0 mt-1`}>
                <FormItem hasFeedback validateStatus={'error'} help={'RE'} className={'mb-2'}>
                    <Input onChange={handleNameChange} value={fullName} className={style.authInput} placeholder="Πλήρες όνομα" ref={fullNameRef}/>
                </FormItem>
            </Row>



            <div className="text-left mt-2">
                <Form.Item label="Κώδικος">
                    <PasswordInput settings={{height: 4, alwaysVisible: true, colorScheme: {
                            levels: ["#ff4033", "#fe7439", "#ffd908", "#78e135", "#6ecc3a"],
                            noLevel: "lightgrey"
                        }}} />
                </Form.Item>
            </div>

            <Row className="mt-5">
                <Button type={'primary'} htmlType={'submit'} block className={style.inputButton} >Εγγράφη</Button>
            </Row>

            <Row className={'text-center'}>
                Ή
            </Row>
            <Row>
                <Button block className={style.inputButton}>
                    <img className={style.buttonIcon} src={googleIcon} alt=""/>
                    <span className="ml-1">Σύνεχεια με Google</span>
                </Button>
            </Row>
            <Row className={'mt-4 text-center text-smaller'}>
                <hr/>
                Έχετε ηδη λογαριασμό; <span className={'light-sky-blue'}>Σύνδεθειτέ</span>
            </Row>

        </Col>
    );
};

export default RegisterInfo;