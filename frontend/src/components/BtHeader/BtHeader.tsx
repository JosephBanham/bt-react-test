// TODO: Implement Helper SASS Classes and use FlexColumn.
import * as React from "react";
import './styles.css';
import BtIcon from "../../assets/SvgComponents/BtIcon";

function BtHeader(props: React.SVGProps<SVGSVGElement>) {
    return (
        <div className="bt-banner">
            <BtIcon width={100} height={100} />
            <h1 className="bt-header__text">React + TypeScript Coding Test</h1>
        </div>
    );
}

export default BtHeader;