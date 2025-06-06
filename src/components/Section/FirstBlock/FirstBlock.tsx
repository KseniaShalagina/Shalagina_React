import { useState } from 'react'
import '../../../../src/assets/styles/FirstBlock.css'
import Form from '../Form/Form';
function FirstBlock() {
    const [open, setOpen] = useState(false);
    const clickOpen = () => {
        setOpen(true);
    }
    return (
        <>
            <section className=" first_block">
                <h1 className="main_name"> Candidates with Creative & Engineering Backgrounds</h1>
                <p className="main_description"> This is the place to show yourself and land entry level jobs at cutting-edge
                    companies. Launch your career here.</p>

                <button className="join" onClick={clickOpen}> Join Now</button>
                <p className="text_button">Looking for candidate’s? <span className="blue"><b> Hire now </b></span></p>
            </section>
            <Form active={open} setActive={setOpen} />
        </>
    );
}
export default FirstBlock;