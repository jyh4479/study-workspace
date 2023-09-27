import React, {useState} from 'react';
import {Rifm} from "rifm";

const PhoneNumberInput = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const formatPhoneNumber = (str) => {
        const cleaned = str.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{0,3})(\d{0,4})(\d{0,4})$/);
        if (match) {
            return `${match[1]}-${match[2]}-${match[3]}`;
        }
        return '';
    };

    const handlePhoneNumberChange = (formattedValue) => {
        setPhoneNumber(formattedValue);
    };

    return (
        <div>
            <label>휴대폰 번호:</label>
            <Rifm
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                format={formatPhoneNumber}
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

// export default PhoneNumberInput;
//
// import React, { useState } from 'react';
// import { Rifm } from 'rifm';
//
// function PhoneNumberInput() {
//     // 휴대폰 번호 상태 초기화
//     const [phoneNumber, setPhoneNumber] = useState('');
//
//     // 'Rifm'의 'onChange' 핸들러
//     const handlePhoneNumberChange = (formattedValue) => {
//         // 형식화된 값을 상태에 저장
//         setPhoneNumber(formattedValue);
//     };
//
//     return (
//         <div>
//             <label>휴대폰 번호:</label>
//             <Rifm
//                 value={phoneNumber}
//                 onChange={handlePhoneNumberChange}
//                 format={(str) => {
//                     // 입력 값을 "010-1234-5678" 형식에 맞게 변환
//                     const cleaned = str.replace(/[^\d-]/g, ''); // 숫자와 대시(-)만 허용
//                     const match = cleaned.match(/^(\d{0,3})(-?)(\d{0,4})(-?)(\d{0,4})?$/);
//
//                     if (match) {
//                         const firstPart = match[1] || '';
//                         const secondPart = match[3] || '';
//                         const thirdPart = match[5] || '';
//
//                         return `${firstPart}${match[2]}${secondPart}${match[4]}${thirdPart}`;
//                     }
//                     return '';
//                 }}
//             >
//                 {({ value, onChange }) => (
//                     <input
//                         type="text"
//                         value={value}
//                         onChange={(e) => onChange(e.target.value)}
//                     />
//                 )}
//             </Rifm>
//         </div>
//     );
// }
//
// export default PhoneNumberInput;