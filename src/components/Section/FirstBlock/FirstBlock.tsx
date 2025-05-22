import '../../../../src/assets/styles/FirstBlock.css'
function FirstBlock() {
    return (
        <section className=" first_block">
            <h1 className="main_name"> Candidates with Creative & Engineering Backgrounds</h1>
            <p className="main_description"> This is the place to show yourself and land entry level jobs at cutting-edge
                companies. Launch your career here.</p>

            {/* <button className="join" onClick={openBackdrop}> Join Now</button> */}
            <button className="join"> Join Now</button>
            <p className="text_button">Looking for candidate’s? <span className="blue"><b> Hire now </b></span></p>
        </section>
    );
}
//  function closeBackdrop(el, ev) {
//   if (el == ev.target) el.classList.add("off1")
//   document.documentElement.style.overflow = "auto"
// }
// function openBackdrop() {
//     document.getElementsByClassName("backdrop")[0].classList.remove("off1");
//     document.documentElement.style.overflow = "hidden"
// }
export default FirstBlock;