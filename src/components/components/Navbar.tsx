"use client"

import * as React from "react"
import { Button } from "../ui/button"
import { signOut, useSession } from "next-auth/react"

export function Navbar() {
    const session = useSession();

    return (
        <div className="flex justify-between p-4 mx-12">
            <div className="">
                <span className="font-semibold text-xl">Logo</span>
            </div>
            <ul className="list-none flex gap-x-2">
                {!session.data?.user ? <a href="/api/auth/signin"><Button>Signin</Button></a> : <Button onClick={() => signOut()}>Logout</Button> }
            </ul>
        </div>
    )
}
