import Link from "next/link";
import {VscChevronRight, VscChevronDown} from "react-icons/vsc";
import { useModal } from "../utilities";

const SectionNav = ({value, alg, algs}) => {
    
    const {ref, toggled, setToggled} = useModal()

    return ( 
        <nav className="section-menu" ref={ref}>
            <div  
                className={
                toggled ?`menu-title border-title`:`menu-title`
                }
                onClick={() => setToggled(!toggled)}
            >
                <div className="svg-container" >
                    { toggled ? <VscChevronDown /> : <VscChevronRight/> }
                </div>
                <div>{alg.desc}</div>
            </div>

            {toggled && 
            <div className="menu-list">
                {Object.keys(algs).map(key => 
                <li key={key} onClick={() => setToggled(false)}>
                    <Link href={`/${value}/${key}`} >{algs[key].desc}</Link> 
                </li>
            )}</div>}
        </nav>
    );
}
 
export default SectionNav;