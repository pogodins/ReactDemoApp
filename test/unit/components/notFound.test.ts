import { expect } from "chai";
import NotFound from "../../../src/components/NotFound";

describe('Not found', function () {
    it('Should return div element with "Not Found" header text', function () {
        const notFound = NotFound();
        expect(notFound).to.have.property('type', 'div');
        const childrenProps = notFound.props.children;
        expect(childrenProps).to.have.property('type', 'h2');
        expect(childrenProps).to.have.nested.property('props.children', 'Page Not Found');
    });
});