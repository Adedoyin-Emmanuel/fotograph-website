
import React from "react";
import {Link, useNavigate} from "react-router-dom";

interface DownloadProps {
    
}

const Download:React.FC = (): JSX.Element => {
    const navigateTo = useNavigate();
    return (
        <React.Fragment>
            <h1>Download works!</h1>
        </React.Fragment>
    );  
}

export default Download;
    