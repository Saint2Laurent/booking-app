import {isEmpty} from "../utils/isEmpty";
import {ValidationResponse} from "../types/validationResponse";

export const isMailValid = (mail: string): ValidationResponse => {
    if(isEmpty(mail)){
        return {
            isValid: false,
            errorMessage: 'Η διευθυνσή email δεν μπορεί να είναι κενη',
            formValidationStatus: 'error'
        }
    }

    if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(mail)){
        return {
            isValid: false,
            errorMessage: 'Η διευθυνσή email δεν εχεί σωστη μορφή',
            formValidationStatus: 'error'
        }
    }

    return {
        isValid: true,
        formValidationStatus: 'success'
    }

}