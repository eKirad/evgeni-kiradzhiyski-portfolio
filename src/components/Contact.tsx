// React imports
import * as React from "react";

// Ant design imports
import { Card} from 'antd';

interface IProps { }

const Contact: React.FC<IProps> = (props) => {
    return(
        <div style={{padding: "10px", margin: "5px"}}>
            <Card></Card>
         </div>
    );
}

export default Contact;