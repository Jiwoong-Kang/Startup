import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Deleting() {
    const navigate = useNavigate();
    const [codeInfo, setCodeInfo] = useState({
        subject: 'subject that you entered',
        code: 'show code',
        explanation: 'show explanation',
    });

    useEffect(() => {
        const showCode = localStorage.getItem("current_code");
        if (showCode) {
            const showCodeParse = JSON.parse(showCode);
            setCodeInfo({
                ...codeInfo,
                subject: showCodeParse.subject,
                code: showCodeParse.code,
                explanation: showCodeParse.explanation,
            });
        }
    }, []);

    const keep = () => {
        navigate('/mypage');
    };

    const remove = async () => {
        const showCode = localStorage.getItem("current_code");
        const showCodeParse = JSON.parse(showCode);
        const realID = showCodeParse.ID;
        await fetch(`/api/delete?ID=${realID}`, {
            method: 'DELETE',
        }).then(()=>(navigate('/mypage')));
    };

    return (
        <main className='container-fluid bg-secondary text-center'>
            <h1>Are you really deleting this code?</h1>
            <h2 id="subject2">{codeInfo.subject}</h2>
            <div id="new_outer">
                <div id="new_outer2" style={{ whiteSpace: "pre" }}>
                    {codeInfo.code}
                </div>
                <div id="new_outer3">{codeInfo.explanation}</div>
                <div><button className="btn btn-primary" id="save" onClick={keep}>Keep</button></div>
                <div><button className="btn btn-primary" id="delete" onClick={remove}>Delete</button></div>
            </div>
        </main>
    );
}
