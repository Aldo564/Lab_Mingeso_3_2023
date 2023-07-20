import { CodeBlock, dracula } from "react-code-blocks";

function MyCoolCodeBlock({code}) {
    return (
        <CodeBlock
            text={code}
            language={"python"}
            showLineNumbers={true}
            startingLineNumber={1}
            theme={dracula}
        />
    );
}

export default MyCoolCodeBlock;