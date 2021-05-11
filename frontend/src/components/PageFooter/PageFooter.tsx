import * as React from "react";

function PageFooter(props: React.SVGProps<SVGSVGElement>) {
    return (
        <div className="page__banner theme--charcoal display--block">
            <div className="margin-left-2 padding-3">
                <p className="margin-bottom-2">Developed by Joseph Gribble - 11/05/21</p>
                <p className="margin-bottom-2"> Powered by <a className="link" href="https://newsapi.org">NewsAPI</a>.</p>
                <p> Credit to <a className="link" href="https://tablericons.com/">TablerIcons</a> for the SVG logo.</p>
            </div>
        </div>
    );
}

export default PageFooter;