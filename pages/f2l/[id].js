import { v4 as uuidv4 } from 'uuid';
import {Footer, Header, SectionNav} from "../../components";
import {range} from "../../utilities";
import { f2l } from "../../data";

export const getStaticPaths = async () => {

    const data = f2l()
    
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
        
    const data = f2l()

    return {props: {
        algs: data,
        alg: data[key]
    }}
}

function F2LAlgorithm({algs,alg}){

    const Squares = () => range(1,9,1).map(() => <div 
        className="square"
        key={uuidv4()}>
    </div>)


    return (
        <div className="container">

            <Header value={'F2L'} />

            <section>
                <SectionNav value={'f2l'} alg={alg} algs={algs} />
                
                <article className="algorithms">
                    {alg.algorithms.map((i,j) =>
                        <div key={j}>
                            <div className="wrapper">
                                <div className={`cube ${i.hand} ${i.name}`}>
                                    <div className="side front">
                                        <Squares />
                                    </div>
                                    <div className="side left">
                                        <Squares />
                                    </div>
                                    <div className="side right">
                                        <Squares />
                                    </div>
                                    <div className="side top">
                                        <Squares />
                                    </div>
                                    <div className="side back"></div>
                                    <div className="side bottom"></div>
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

export default F2LAlgorithm
