import Link from "next/link";
import Head from 'next/head'
import * as algorithms from '../data'
import { useModal } from "../utilities";

function Header({value}) {
    
    const {mouseOver, ref, toggled, setToggled} = useModal()


    const SubList = ({name}) => value!==name.toUpperCase() &&
    <li>
        <span
            onClick={() => setToggled(name)}
            onMouseOver={() => mouseOver(name)}
        >{name.toUpperCase()}</span>
        {toggled===name && <ul>
            {Object.keys(algorithms[name]()).map(key => 
            <li 
                key={key}
                onClick={() => setToggled(false)}
            >
                <Link href={`/${name}/${key}`}>
                    {algorithms[name]()[key].desc}
                </Link>
            </li>
        )}</ul>}
    </li>
    
    
    return ( 
        <>
        <Head>
            <title>CFOP | {value}</title>
            <meta name="description" content="CFOP algorithms" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <div className="title">{value}</div>
            <nav className='header-nav' ref={ref}>
                {value!=='Cross' && <li>
                    <Link href="/cross">Cross</Link>
                </li>}

                <SubList name={'f2l'} />

                <SubList name={'oll'} />

                <SubList name={'pll'} />
            </nav>
        </header>
        </>
    );
}
 
export default Header;