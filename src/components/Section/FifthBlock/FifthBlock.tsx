import '../../../assets/styles/FifthBlock.css'
import ITPeople from '../../../assets/image/Rectangle 15.svg'
function FifthBlock() {
    return (
        <section className=" fifth_block">
            <div className="prifile">
                <div className="blok_prifile">
                    <div className="blok_prifile_min">
                        <h2 className="fifth_name">Set up your profile.
                            Let jobs find you.</h2>
                        <button className="joins"> Join Now</button>
                    </div>
                </div>
                <img src={ITPeople} className="fifth_img"/>
            </div>
        </section>
    );
}
export default FifthBlock;