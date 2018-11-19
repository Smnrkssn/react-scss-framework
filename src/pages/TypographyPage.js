import React, {Component} from "react";
import Segment from "../components/Segment";
import MainMenu from "../site-components/MainMenu";

class TypographyPage extends Component {
    render() {
        return (
            <div id="page">
                <div className="flex block-md">
                    <MainMenu/>
                    <div className="column">
                        <Segment.List>
                            <Segment>
                                <h2 className="mb-0">Typography</h2>
                            </Segment>
                            <Segment>
                                <h2>Headings</h2>
                                <h2 className="display-1">Display 1</h2>
                                <h2 className="display-2">Display 2</h2>
                                <h2 className="display-3">Display 3</h2>
                                <h2 className="display-4">Display 4</h2>
                                <h2 className="display-5">Display 5</h2>
                                <h2 className="display-6">Display 6</h2>
                                <h1>Heading 1</h1>
                                <h2>Heading 2</h2>
                                <h3>Heading 3</h3>
                                <h4>Heading 4</h4>
                                <h5>Heading 5</h5>
                                <h6>Heading 6</h6>
                            </Segment>
                            <Segment>
                                <h2>Blockquotes</h2>
                                <blockquote>
                                    This is a blockquote
                                </blockquote>
                            </Segment>
                            <Segment>
                                <h2>Text</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Quisque ut pharetra lorem. Morbi turpis augue, porttitor
                                    gravida placerat vitae, <a href="#page">link</a> pretium
                                    nec lectus.
                                </p>
                            </Segment>
                            <Segment>
                                <h2>Code</h2>
                                <code>
                                    const helloWorld = () => "Hello World";
                                </code>
                            </Segment>
                            <Segment>
                                <h2>Preformatted text</h2>
                                <pre>
                                    This text is preformatted
                                </pre>
                            </Segment>
                            <Segment>
                                <h2>Unordered List</h2>
                                <ul>
                                    <li>List item 1</li>
                                    <li>List item 2</li>
                                    <ul>
                                        <li>Nested List item 1</li>
                                        <li>Nested List item 2</li>
                                    </ul>
                                    <li>List item 3</li>
                                </ul>
                            </Segment>
                            <Segment>
                                <h2>Ordered List</h2>
                                <ol>
                                    <li>List item 1</li>
                                    <li>List item 2</li>
                                    <ol>
                                        <li>Nested List item 1</li>
                                        <li>Nested List item 2</li>
                                    </ol>
                                    <li>List item 3</li>
                                </ol>
                            </Segment>
                        </Segment.List>
                    </div>
                </div>
            </div>
        );
    }
}

export default TypographyPage;