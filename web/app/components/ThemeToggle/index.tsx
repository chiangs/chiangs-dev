type Props = {};

export const ThemeToggle: React.FC<Props> = () => {
    const componentId = `theme-toggle`;
    return (
        <div id={componentId} className={componentId} data-testid={componentId}>
            <button className="button-toggle" type="button">
                Toggle
            </button>
        </div>
    );
};
