import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(_,{params}){
    const id = params.id;
    const res = await fetch(`http://localhost:4000/tickets/${id}`);
    const ticket = await res.json();

    if (!res.ok) {
        return NextResponse.json({error:"Cannot find ticket"},{
            status:400
        });
    }
    return NextResponse.json(ticket,{
        status:200
    })
}