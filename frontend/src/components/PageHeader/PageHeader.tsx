import * as React from "react";
import HeaderIcon from "../../assets/SvgComponents/HeaderIcon";

function PageHeader(props: React.SVGProps<SVGSVGElement>) {
    return (
        <div className="page__banner theme--charcoal margin-0 padding-4 display--flex">
            <HeaderIcon width={100} height={100} />
            <h1 className="margin-left-3 h2">NewsAPI Search Engine Mockup</h1>
        </div>
    );
}

export default PageHeader;