import {useEffect, useState} from "react"
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import {isMailValid} from "../../../../common/validators/account-validator";
import {isEmpty} from "../../../../common/utils/isEmpty";
import {ValidationResponse} from "../../../../common/types/validation-response";
import {useThrottle} from "@umijs/hooks";

export const useMailValidator = () => {


    const [mailValidation, setMailValidation] = useState<ValidationResponse>({isValid: false})
    const [mail, setEmail] = useState('')
    const [mailRegistered, setMailRegistered] = useState(false)

    const IS_MAIL_REGISTERED = gql`
        {
          isUserRegistered(email: "${mail}")
        }
    `

    const validationResponse = isMailValid(mail)

    useQuery(IS_MAIL_REGISTERED, {fetchPolicy: 'no-cache', skip: !validationResponse.isValid, onCompleted: (r)=>{
        setMailRegistered(r.isUserRegistered)


    return [mailValidation, setEmail] as const
}