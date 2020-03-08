import {SetStateAction, useEffect, useState} from "react"
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import {isMailValid} from "../../../../common/validators/account-validator";
import {isEmpty} from "../../../../common/utils/isEmpty";
import {ValidationResponse} from "../../../../common/types/validation-response";

export const useMailValidator = () => {


    const [mailValidation, setMailValidation] = useState<ValidationResponse>({isValid: false})
    const [mail, setEmail] = useState('')
    const [validationTimeout, setValidationTimeout] = useState()

    interface TData {
        isUserRegistered: boolean
    }

    const IS_MAIL_REGISTERED = gql`
        {
          isUserRegistered(email: "${mail}")
        }
    `

    useEffect(()=>{
        if(mail !== ''){
            validate()
        }
    }, [mail])


    useQuery(IS_MAIL_REGISTERED, {fetchPolicy: 'no-cache', skip: !isMailValid(mail).isValid, onCompleted: (d)=>{
        queryResolved(d)
    }})

    const queryResolved = (d: TData) =>{
        if(d.isUserRegistered){
            setMailValidation({isValid: true, errorMessage: 'Το email υπαρχει ηδη', formValidationStatus: 'warning'})
        }else{
            setMailValidation({isValid: false, errorMessage: '', formValidationStatus: 'success'})
        }
    }


    const validate = () =>{
        console.log('validate');
        const validationResponse = isMailValid(mail)
        setMailValidation(validationResponse)

    }

    return [mailValidation, setEmail] as const
}