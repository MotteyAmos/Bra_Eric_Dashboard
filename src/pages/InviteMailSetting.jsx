import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";

const InviteMailSetting = () => {
  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className="">
      <div>
        <p className="text-primary-900 text-3xl mb-5 font-bold tracking-wide ">
          Invite Mail Settings
        </p>
        <p className="text-gray-500 mt-2 mb-7">
          Customise how message is delivered to invited users
        </p>
        <hr className="w-[80vw]" />
      </div>

      <div className="flex gap-10  ">
        <div>
          <div className="mt-5">
            <p className="text-primary-900 text-[18px] shadow-sm">Subject</p>
            <p className="border p-2 py-3 rounded-md bg-gray-50">
              Welcome to Freemind GPT Interface
            </p>

            <p className="mt-5 mb-2 text-primary-900 text-[18px] ">Message</p>
          </div>
          <div>
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="
          <p>
            <strong style=color:#0f172a;>You're now part of Freemind platform</strong>
            <p style=color:#4b5563;>
              Start by creating your profile, exploring the platform, and
              connecting with others.
            </p>
            <p style=color:#4b5563;>Thrilled to have you on board!</p>
          </p>
          "
              init={{
                height: 400,

                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "preview",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "Underline " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style: `
                  body { font-family: Helvetica, Arial, sans-serif; font-size: 16px; background-color: #f9fafb; }
                  .tox .tox-tbtn:hover, .tox .tox-tbtn.tox-tbtn--enabled:focus {
                    background-color: red !important; 
                  }
                `,
              }}
            />
            <p className="flex gap-5 justify-end mt-5">
              <button
                className="px-4 py-2 text-green-500 bg-gray-50 rounded-md active:scale-105 transition-all ease-in-out duration-300 delay-75"
                // onClick={() => }
              >
                cancel
              </button>
              <button
                className="px-4 py-2 text-white bg-green-600 rounded-md active:scale-105 transition-all ease-in-out duration-300 delay-75"
                // onClick={
              >
                Save changes
              </button>
            </p>
          </div>
        </div>
        <div className="mt-5  w-[40%]">
          <p className="text-primary-900 text-[18px]  font-bold tracking-wide">
            Preview
          </p>
          <p className="border p-2 py-3 font-semibold rounded-md bg-gray-50 w-full ">
            Welcome to Freemind GPT Interface
            
          </p>
          <p className="text-gray-400 text-md font-normal border p-5 grid gap-5 mt-5 rounded-md shadow-md">
             <p className="font-semibold text-primary-900 text-xl">You're now part of Freemind platform</p>
              Start by creating your profile, exploring the platform and connecting with others.
              <p>Thrilled to have you on board!</p>
            </p>
        </div>
      </div>
    </div>
  );
};

export default InviteMailSetting;
