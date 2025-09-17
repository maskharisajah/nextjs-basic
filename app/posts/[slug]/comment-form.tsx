"use client";

import { createComment } from "@/app/action";
import { useActionState } from "react";

const initialState = {
  error: "",
};

export function CommentForm() {
  const [state, formAction, pending] = useActionState(
    createComment,
    initialState
  );

  return (
    <>
      <form action={formAction} className='flex flex-col w-72'>
        {state?.error && (
          <div className='text-red-500' role='alert'>
            {state.error}
          </div>
        )}
        <textarea
          placeholder='Tulis komentar'
          className='w-full bg-white text-black h-40 border border-white mb-2'
          name='comment'
        ></textarea>
        <button
          className='bg-blue-500 text-white py-2 px-4 rounded w-full'
          disabled={pending}
        >
          Kirim
        </button>
      </form>
    </>
  );
}
