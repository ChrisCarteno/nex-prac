"use client";

import { SessionProvider } from "next-auth/client";

function Provider({ children, session }) {
  return (
    <SessionProvider sessoin={session}>
        {children}
    </SessionProvider>
  )
}

export default Provider