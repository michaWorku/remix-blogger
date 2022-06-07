import { Link, Links, LiveReload, Meta, Outlet } from "@remix-run/react";
import globalStylesUrl from './styles/global.css'

export const links = () =>[{rel: 'stylesheet', href: globalStylesUrl}]

export const meta = ()=>{
  const description = 'A cool blog built with Remix'
  const keywords = 'remix, react, javascript'

  return {
    description,
    keywords
  }
}

export default function App(){
  return (
   <Document>
     <Layout>
      <Outlet/>
     </Layout>
   </Document>
  )
}

function Document({children, title}){
  return (
    <html lang="en">
      <head>
        <Meta/>
        <Links/>
        <title>{title ? title: "Remix blog"}</title>
      </head>
      <body>
        {children}
        {
          process.env.NODE_ENV === 'development' ? <LiveReload/> : null
        }
      </body>
    </html>
  )
}

function Layout({children}) {
  return(
    <>
      <nav className="navbar">
        <Link to='/' className='logo'>Remix</Link>
        <ul>
          <li>
            <Link to='/posts' className='nav'>Posts</Link>
          </li>
          <li>
            <Link to='/auth/login' className='nav'>Login</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        {children}
      </div>
    </>
  )
}

export function ErrorBoundary({error}){
  console.log(error)
  return(
      <Document>
          <Layout>
            <h1>Error</h1>
            <pre>{error.message}</pre>
          </Layout>
      </Document>
  )
}