// TODO: Implement Helper SASS Classes and use FlexColumn.
import * as React from "react";
import '../BtHeader/styles.css';

function BtFooter(props: React.SVGProps<SVGSVGElement>) {
    return (
        <div className="bt-banner block">
            <p>Developed by Joseph Gribble - xx/04/21</p>
            <p>Copyright BT 2021 - Assets used with express written permission.</p>
            <p> Powered by <a className="link" href="https://newsapi.org">NewsAPI</a>.</p>
        </div>
    );
}

export default BtFooter;