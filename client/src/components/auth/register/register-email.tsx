import React, {useEffect, useRef, useState} from 'react';
import '../../../styles/global.scss'
import style from '../auth.module.scss'
import {Button, Col, Input, Row, Form, Icon} from "antd";
import googleIcon from "../../../assets/images/icon-google.svg";
import FormItem from "antd/es/form/FormItem";
import {isMailValid} from "../../../../../common/validators/account-validator";
import { FormComponentProps } from "antd/lib/form";


declare const ValidateStatuses: ["success", "warning", "error", "validating", ""];


interface RegisterEmailProps {
    swapView(): any,
    setMail(email: string): any,
    form: any
}

export const RegisterEmail: React.FC<RegisterEmailProps> = ({swapView, setMail, form}: RegisterEmailProps) => {
    const [email, setEmail] = useState('');
    const [mailValidState, setMailValidState] = useState<typeof ValidateStatuses[number]>("");
    const [validationTimeout, setValidationTimeout] = useState()

    const mailRef = useRef<any>(null)
    const {getFieldDecorator, setFieldsValue, isFieldTouched, getFieldsValue} = form;


    const nextStep = () => {
        setMail(email)
        swapView()
    }


    const mailValidation = isMailValid(getFieldsValue().mail)

    console.log(mailValidation)


    const handleMailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // setEmail(e.target.value);
        setFieldsValue({mail: e.target.value})
        setMailValidState('validating')
        setValidationTimeout(clearInterval(validationTimeout))

        setValidationTimeout(setTimeout((e:React.ChangeEvent<HTMLInputElement>)=>{
            if(isMailValid(getFieldsValue().mail).isValid){

                setMailValidState('success')
            }else{
                setMailValidState('error')
            }
        }, 400))
    };



    return (
        <Col span={24} className={'mr-1 mt-4'}>
            <Form>
                <Row className={`m-0`}>
                    <Form.Item hasFeedback validateStatus={mailValidState} help={isFieldTouched('mail') ? mailValidation.errorMessage : ''} className={'mb-2'}>
                        {getFieldDecorator('mail')(
                            <Input ref={mailRef} onChange={handleMailChange} className={style.authInput} placeholder="Το email σας" />
                        )}
                    </Form.Item>
                </Row>
                <Row className={'pb-5 text-left'}>
                    <p className="small-text">
                        Με την εγγραφή σας, επιβεβαιονετε οτι έχετε διαβάσει και αποδέχεσθαι τους <span className="light-sky-blue">Όρους</span> και την <span className="light-sky-blue">Πολιτική Αποριτού</span>.
                    </p>
                </Row>
                <Row className="mt-5">
                    <Button htmlType={'submit'} block className={style.inputButton} onClick={nextStep} disabled={!mailValidation.isValid}>Σύνεχεια</Button>
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
                <Row className={'mt-5 text-center text-smaller'}>
                    <hr/>
                    <div className="mt-2">
                        Έχετε ηδη λογαριασμό; <span className={'light-sky-blue'}>Σύνδεθειτέ</span>
                    </div>
                </Row>
            </Form>
        </Col>
    );
}

export default Form.create<RegisterEmailProps>()(RegisterEmail);