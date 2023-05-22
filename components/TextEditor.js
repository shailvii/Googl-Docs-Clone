import dynamic from "next/dynamic";
import { useState } from "react"; //It enables state management in functional components.
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; //react-draft-wysiwyg is imported for creating the text editor
import { EditorState } from "draft-js"; //represents the state of the text edito
import Drawer from "../components/Drawer";


const Editor = dynamic( // dynamica enables the component to be loaded asynchronously, which improves the performance of the initial page load.
    ()=> import("react-draft-wysiwyg").then((module) => module.Editor),
    {
        ssr: false,
    }
);


function TextEditor(){ //initializes the editorState using the useState hook and sets it to an empty editor state
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange =(editorState) =>{ //defined to handle changes in the editor state
        setEditorState(editorState);
    }
    return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
        <Editor 
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !justify-centre mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
        />
    <Drawer/> 

    </div>
    );
}

export default TextEditor;