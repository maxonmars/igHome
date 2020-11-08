import React, {useState} from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

export const Request = () => {

    const [checkValue, setCheckValue] = useState(false)
    const [responseData, setResponseData] = useState('')

    const requestAPI = async () => {
        try {
            const res = await fetch('https://neko-cafe-back.herokuapp.com/auth/test', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({success: checkValue})
                }
            )
            const {errorText, info} = await res.json()
            if (!res.ok){
                throw new Error(errorText)
            }
            console.log(info)
            setResponseData(errorText)
        } catch (e) {
            console.log(e);
            setResponseData(e.message)
        }

    }

    return <div>
        <SuperButton id={'requestBtn'} onClick={requestAPI} children={"on button"}/>
        <SuperCheckbox onChangeChecked={setCheckValue}/>
        <div>{responseData}</div>
    </div>
}