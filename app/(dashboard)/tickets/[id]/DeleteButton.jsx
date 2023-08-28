"use client"

import { TiDelete } from 'react-icons/ti'
import { deleteTicket } from '../actions'
import { useTransition } from 'react';

export default function DeleteButton({id}) {
    const [isPending, startTransition] =  useTransition();
  return (
    <button
        className="btn-primary" 
        onClick={()=>startTransition(()=>deleteTicket(id))}
        disabled={isPending}
    >
        {isPending && (
            <>
            <TiDelete />
            Deleting....
            </>
        )}
        {!isPending && (
            <>
            <TiDelete />
            Delete Ticket
            </>
        )}
    </button>
  )
}
