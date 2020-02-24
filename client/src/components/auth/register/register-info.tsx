import React, {RefObject, useEffect, useRef, useState} from 'react';
import style from "../auth.module.scss";
import {Button, Input, Row, Col, Form} from "antd";
import FormItem from "antd/es/form/FormItem";
import googleIcon from "../../../assets/images/icon-google.svg";
import {PasswordInput} from "antd-password-input-strength";
import {RegisterEmail} from "./register-email";
import {isFullNameValid, isMailValid, isPasswordValid} from "../../../../../common/validators/account-validator";
import ReCAPTCHA from "react-google-recaptcha";

interface RegisterInfoProps {
    mail: string,
    initView: boolean,
    form: any
}

const RegisterInfo: React.FC<RegisterInfoProps> = ({mail, initView, form}: RegisterInfoProps) => {

    const [formSubmitted, setFormSubmitted] = useState(false)
    const fullNameRef = useRef<any>(null)
    const {getFieldDecorator, setFieldsValue, isFieldTouched, getFieldsValue} = form;

    const mailValidation = isMailValid(getFieldsValue().mail)
    const fullNameValidation = isFullNameValid(getFieldsValue().fullName)
    const recaptchaRef:any = React.createRef<ReCAPTCHA>();

    useEffect(()=>{
        if(!initView){
            fullNameRef.current.focus()
            setFieldsValue({mail: mail})
        }
    }, [initView])




    const handleFieldChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setFieldsValue({[e.target.name]: getFieldsValue()[e.target.value]})
    }

    const handleSubmit = () =>{
        recaptchaRef.current.execute();
    }

    const isFormValid = ():boolean =>{
        if(isMailValid(getFieldsValue().mail).isValid && isPasswordValid(getFieldsValue().password).isValid && isFullNameValid(getFieldsValue().fullName).isValid){
            return true
        }
        return false
    }


    return (
        <Col span={24} className={'text-left'}>
            <Form onSubmit={handleSubmit}>
                <Row className={`m-0 mt-3`}>
                    <Form.Item hasFeedback validateStatus={isMailValid(getFieldsValue().mail).formValidationStatus} help={isFieldTouched('mail') ? mailValidation.errorMessage : ''} className={'mb-2'}>
                        {getFieldDecorator('mail')(
                            <Input onChange={handleFieldChange} className={style.authInput} placeholder="Το email σας" />
                        )}
                    </Form.Item>
                </Row>

                <Row className={`m-0 mt-1`}>
                    <Form.Item required hasFeedback validateStatus={isFieldTouched('fullName') || formSubmitted ? isFullNameValid(getFieldsValue().fullName).formValidationStatus : ''} help={isFieldTouched('fullName') ? fullNameValidation.errorMessage : ''} className={'mb-2'}>
                        {getFieldDecorator('fullName')(
                            <Input ref={fullNameRef} onChange={handleFieldChange} className={style.authInput} placeholder="Πλήρες όνομα" />
                        )}
                    </Form.Item>

                </Row>

                <div className="text-left mt-2">
                    <Form.Item required colon={false} label="Κώδικος" hasFeedback validateStatus={isFieldTouched('password') ? isPasswordValid(getFieldsValue().password).formValidationStatus : ''} help={isFieldTouched('password') ? isPasswordValid(getFieldsValue().password).errorMessage : ''}>
                        {getFieldDecorator('password',)(
                            <PasswordInput settings={{height: 4, alwaysVisible: true, colorScheme: {
                                    levels: ["#ff4033", "#fe7439", "#59eb29", "#5df32b", "#67ff2f"],
                                    noLevel: "lightgrey"
                                }}}
                            />
                        )}
                    </Form.Item>
                </div>

                <Row className="mt-5">
                    <Button type={'primary'} htmlType={'submit'} block className={`${style.inputButton} auth-disabled`} disabled={!isFormValid()} >Εγγράφη</Button>
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


                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6LfulNMUAAAAAEBEZb336ALlHtTRRO5a85Trf9n_"
                />
            </Form>

        </Col>
    );
};

export default Form.create<RegisterInfoProps>()(RegisterInfo);