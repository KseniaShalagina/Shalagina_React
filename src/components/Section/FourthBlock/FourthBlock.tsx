import '../../../assets/styles/FourthBlock.css'
import People from '../../../assets/image/Frame 427320330.svg'
function FourthBlock(){
    return(
        <section className="fourth_block">
            <div className="connect">
                <img src={People} className="fourth_img"/>
                <div className="fourth_txt">
                    <h2 className="name_blok">Connect With Recruiter</h2>
                    <p className="cardtxt"> Get instant access to a curated pool of top creative & tech talent actively
                        seeking
                        their next role. Find highly qualified job!</p>
                </div>
            </div>
        </section>
    );
}

export default FourthBlock;