import Link from "next/link"
import * as algorithms from '../data'


function Section({value}) {

    return ( 
        <section>
            <ul className="algorithms-menu">
                {Object.keys(algorithms[value]()).map(key => 
                <li key={key}>
                    <Link 
                        href={`/${value}/${key}`}
                    >{algorithms[value]()[key].desc}</Link> 
                </li>
            )}</ul>
        </section>
    );
}
 
export default Section;