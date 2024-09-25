'use client'
import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const OutputSection = ({ aiOutput }: { aiOutput: string | undefined }) => {
  const editorRef = useRef<Editor>(null);

  // Use effect to set the markdown when aiOutput changes
  useEffect(() => {
    if (editorRef.current && aiOutput !== undefined) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput); // Ensure you are calling setMarkdown properly
    }
  }, [aiOutput]); // Trigger effect when aiOutput changes

  const handleCopy = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      const markdownContent = editorInstance.getMarkdown();

      // Copy the markdown content to the clipboard
      navigator.clipboard.writeText(markdownContent);
      console.log('Content copied to clipboard:', markdownContent);
    }
  };

  return (
    <div className='shadow-lg border bg-white p-1 rounded-lg'>
      <div className='flex items-center justify-between p-2 sm:p-5'>
        <h2 className='text-xs'>Your Result</h2>
        <Button className='text-xs flex gap-2 ' onClick={handleCopy}>
          <Copy className='h-4 w-4' />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Result will appear here"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        height="600px"
      />
    </div>
  );
};

export default OutputSection;
