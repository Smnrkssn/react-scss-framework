import React, {Component} from "react";
import {Page} from "../site-components/Page";

class ArticlePage extends Component {
    render() {
        return (
            <Page>
                <h2>Article</h2>
                <hr/>
                <article>
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
                    <ul>
                        <li>List item 1</li>
                        <li>List item 2</li>
                        <ul>
                            <li>Nested List item 1</li>
                            <li>Nested List item 2</li>
                        </ul>
                        <li>List item 3</li>
                    </ul>
                    <ol>
                        <li>List item 1</li>
                        <li>List item 2</li>
                        <ol>
                            <li>Nested List item 1</li>
                            <li>Nested List item 2</li>
                        </ol>
                        <li>List item 3</li>
                    </ol>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
                        pharetra lorem. Morbi turpis augue, porttitor gravida placerat
                        vitae, <a href="#page">link</a> pretium nec lectus.
                    </p>
                </article>
            </Page>
        );
    }
}

export default ArticlePage;