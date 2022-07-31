const designFileUrl = `https://www.figma.com/file/d7dPcBdKZghY6jwQQWmHLo/Project?node-id=0%3A1`;
const projectTaskBoardUrl = `https://chiangs.notion.site/`;
const storybookUrl = `https://storybook.chiangs.dev`;

export const Construction: React.FC = () => (
    <section className="container">
        <h1>
            <span className="highlighted">THIS</span> is what happens
            <br />
            ¯\_(ツ)_/¯
        </h1>
        <section className="content">
            <p className="subtitle">
                As I grow and look back, I can't resist the urge to re-design or re-write my code.
            </p>
            <p className="message">
                Please excuse the construction and come back again later to see how things are
                developing! You can also check the Figma file and Notion development tracker to see
                how things are tracking via the links below.
            </p>
            <ul className="list--footer--links list--nostyle">
                <li className="footer--link">
                    <a
                        href={designFileUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Figma design file"
                        aria-label="click to open new tab to the Figma design file"
                    >
                        Figma file
                    </a>
                </li>
                <li className="footer--link">
                    <a
                        href={storybookUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Storybook"
                        aria-label="click to open new tab to my deployed Storybook"
                    >
                        Storybook
                    </a>
                </li>
                <li className="footer--link">
                    <a
                        href={projectTaskBoardUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Notion project development tasks board"
                        aria-label="click to open new tab to my Notion file to see the status of development"
                    >
                        Development status
                    </a>
                </li>
            </ul>
        </section>
    </section>
);
