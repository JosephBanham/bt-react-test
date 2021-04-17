// TODO: Implement Helper SASS Classes and use FlexColumn.
import * as React from "react";

function BtFooter(props: React.SVGProps<SVGSVGElement>) {
    return (
        <div className="bt__banner theme--bt-purple display--block">
            <div className="margin-left-2 padding-3">
                <p className="margin-bottom-2">Developed by Joseph Gribble - xx/04/21</p>
                <p className="margin-bottom-2">Copyright BT 2021 - Assets used with express written permission.</p>
                <p> Powered by <a className="link" href="https://newsapi.org">NewsAPI</a>.</p>
            </div>
        </div>
    );
}

export default BtFooter;