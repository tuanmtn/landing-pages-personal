import { HeadContent, Scripts, createRootRoute, useLocation } from "@tanstack/react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { LanguageProvider } from "../context/LanguageContext"

import appCss from "../styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "VNF - Vietnam Food",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/logo_dark.png",
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const isEcosystem = pathname.startsWith('/ecosystem')

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col min-h-screen">
        <LanguageProvider>
          {!isEcosystem && <Header />}
          <main className="flex-grow">
            {children}
          </main>
          {!isEcosystem && <Footer />}
        </LanguageProvider>
        <Scripts />
      </body>
    </html>
  )
}
