import Head from 'next/head'
import Link from "next/link"
import { Footer } from '../../components'

function Cross(){

    return (
        <div className="container">
            <Head>
                <title>CFOP</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div className="title">Cross</div>
                <nav className='header-nav'>
                    <Link href="/f2l">F2L</Link>
                    <Link href="/oll">OLL</Link>
                    <Link href="/pll">PLL</Link>
                </nav>
            </header>
            <section>
                <p>Solve the cross with the white face down</p>
            </section>
            <Footer />
          
        </div>
    )
}

export default Cross