import React, {useState} from 'react';
import {Rifm} from "rifm";

const PhoneNumberInput = (props) => {
    const [dateTime, setDateTime] = useState('');

    const handleDateTimeChange = (formattedValue) => {
        setDateTime(formattedValue);
    };

    return (
        <div>
            <label>날짜 및 시간:</label>
            <Rifm
                value={dateTime}
                onChange={handleDateTimeChange}
                format={(str) => {
                    // 입력 값을 "YYYY-MM-DD HH:mm" 형식에 맞게 변환
                    const cleaned = str.replace(/[^\d:-]/g, ''); // 숫자, 콜론(:), 대시(-)만 허용
                    const match = cleaned.match(/^(\d{0,4})(:?)(\d{0,2})(:?)(\d{0,2})(:?)(\d{0,2})?(:?)(\d{0,2})?$/);

                    if (match) {
                        const year = match[1] || '';
                        const month = match[3] || '';
                        const day = match[5] || '';
                        const hour = match[7] || '';
                        const minute = match[9] || '';

                        return `${year}-${month}-${day} ${hour}:${minute}`;
                    }
                    return '';
                }}
            >
                {({value, onChange}) => (
                    <input
                        type="text"
                        value={value}
                        onChange={onChange}
                    />
                )}
            </Rifm>
        </div>
    );
}


export default PhoneNumberInput;