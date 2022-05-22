import { v4 as uuidv4 } from 'uuid';
import { Footer, Header, SectionNav} from "../../components";
import {range} from "../../utilities";
import {oll} from "../../data"


export const getStaticPaths = async () => {

    const data = oll()
    
    const paths = Object.values(data).map(i =>{
        return { params: {id: i.id} }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {
    
    const key = context.params.id
    
    const data = oll()

    return {props: {
        algs: data,
        alg: data[key]
    }}
}

function OLLAlgorithm({algs,alg}){

    const Squares = () => range(1,9,1).map(() => <div 
        className="oll-square"
        key={uuidv4()}>
    </div>)
    
    const Strips = ({name}) => range(1,3,1).map(() => <div 
        className={`oll-strips ${name}`}
        key={uuidv4()}>
    </div>)


    return (
        <div className="container">
            <Header value={'OLL'} />
            
            <section>
                <SectionNav value={'oll'} alg={alg} algs={algs} />
   
                <article className="algorithms">
                    {alg.algorithms.map((i,j) =>
                        <div key={j} className="oll-cube">
                            <div className="oll-grid-wrapper">
                                <div className={`oll-strip top-strip`}>
                                    <Strips name={i.name}/>
                                </div>
                                <div className={`oll-strip right-strip ${i.name}`}>
                                    <Strips name={i.name}/>
                                </div>
                                <div className={`oll-strip bottom-strip ${i.name}`}>
                                    <Strips name={i.name}/>
                                </div>
                                <div className={`oll-strip left-strip ${i.name}`}>
                                    <Strips name={i.name}/>
                                </div>
                                <div className={`oll-cube-face ${i.name}`}>
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

export default OLLAlgorithm
