'use client'
import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const RichTextEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [firstImageUrl, setFirstImageUrl] = useState<string | null>(null);

   
 const updateFirstImageUrl = (htmlContent: string) => {
   const tempDiv = document.createElement('div');
   tempDiv.innerHTML = htmlContent;
   const img = tempDiv.querySelector('img');
   if (img) {
     setFirstImageUrl(img.src);
   }
 };

  useEffect(() => {
    if (editorRef.current  && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
         toolbar: {
            container: [
              [{ 'header': [1, 2, 3,4,5,6,7] }],
              [{ 'font': [] }],
              ['bold', 'italic', 'underline'],
              ['link', 'image'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'align': [] }],
            ],
            handlers: {
              image: imageHandler,
            },
          },
        },
      });

      quillRef.current.on('text-change', () => {
         const htmlContent = quillRef.current!.root.innerHTML;
         setContent(htmlContent);
         updateFirstImageUrl(htmlContent);
       });
    }
  }, []);

  const imageHandler = () => {
   const input = document.createElement('input');
   input.setAttribute('type', 'file');
   input.setAttribute('accept', 'image/*');
   input.click();

   input.onchange = async () => {
     const file = input.files ? input.files[0] : null;
     if (file) {
       const formData = new FormData();
       formData.append('image', file);

       try {

         const imageUrl = 'https://via.placeholder.com/150'

         console.log('Image URL:', imageUrl); // Log the image URL

         const range = quillRef.current!.getSelection();
         if (range) {
           quillRef.current!.insertEmbed(range.index, 'image', imageUrl);
         } else {
           console.error('No selection range found');
         }
       } catch (error) {
         console.error('Error uploading image:', error);
       }
     }
   };
 };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quillRef.current) {
      const titleHtml = `<h1 style="font-size: 24px; font-weight: bold;">${title}</h1><br>`;
      const fullContent = titleHtml + quillRef.current.root.innerHTML;
      setContent(fullContent);
      console.log('Submitted content:', fullContent);
    }
    // Save content to MongoDB or any backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
        style={{ width: '100%', marginBottom: '20px', padding: '10px', fontSize: '16px' }}
      />
      <div ref={editorRef} style={{ height: '300px' }} />
      <button type="submit" style={{ marginTop: '20px' }}>Save Post</button>
    </form>
  );
};

export default RichTextEditor;
