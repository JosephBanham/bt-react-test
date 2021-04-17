// TODO: Implement Helper SASS Classes and use FlexColumn.
import * as React from "react";
import BtIcon from "../../assets/SvgComponents/BtIcon";

function BtHeader(props: React.SVGProps<SVGSVGElement>) {
    return (
        <div className="bt__banner theme--bt-purple margin-0 padding-4 display--flex">
            <BtIcon width={100} height={100} />
            <h1 className="margin-left-3">React + TypeScript Coding Test</h1>
        </div>
    );
}

export default BtHeader;