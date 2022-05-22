import { v4 as uuidv4 } from 'uuid';
import { Footer, Header, SectionNav } from "../../components";
import {range} from "../../utilities";
import { pll } from "../../data";

export const getStaticPaths = async () => {

    const data = pll()
    
    const paths = Object.values(data).map(i =>{
        return {
            params: {id: i.id}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {
    
    const key = context.params.id
    
    const data = pll()
    
    return {props: {
        algs: data,
        alg: data[key]
    }}
    
}

function PLLAlgorithm({algs,alg}){

    const Squares = () => range(1,9,1).map(() => <div 
        className="pll-square"
        key={uuidv4()}>
    </div>)
    
    const Strips = ({name}) => range(1,3,1).map(() => <div 
        className={`pll-strips ${name}`}
        key={uuidv4()}>
    </div>)

    return (
        <div className="container">
            <Header value={'PLL'}/>
    
            <section>
                <SectionNav value={'pll'} alg={alg} algs={algs} />
                
                <article className="algorithms">
                    {alg.algorithms.map((i,j) =>
                        <div key={j} className="pll-cube">
                            <div className="pll-grid-wrapper">
                                <div className={`pll-top-strip strip`}>
                                    <Strips name={i.name}/>
                                </div>
                                <div className={`pll-right-strip strip`}>
                                    <Strips name={i.name}/>
                                </div>
                                <div className={`pll-bottom-strip strip`}>
                                    <Strips name={i.name}/>
                                </div>
                                <div className={`pll-left-strip strip`}>
                                    <Strips name={i.name}/>
                                </div>
                                <div className={`pll-cube-face ${i.name}`}>
                                    <Squares />
                                </div>
                            </div>
                            <div className="alg-name">{i.alg}</div>
                        </div>
                    )}
                </article>
            </section>

            <Footer />
        </div>
    )
}

export default PLLAlgorithm
