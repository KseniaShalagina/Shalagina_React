import '../../assets/styles/Preloader.css'
function Preloader() {
    return (<div id="preloader">
        <div className="spinner">
            <div className="preloader-5"></div>
        </div>
    </div>);
}

// document.addEventListener('DOMContentLoaded', () => {
//   setTimeout(() => {
//     const spinner = document.querySelector('.spinner');

//     Preloader.style.opacity = '0';

//     Preloader.addEventListener('transitionend', () => {
//       preloader.style.display = 'none';
//       document.body.classList.add('content-loaded');
//     });

//     spinner.innerHTML = '';
//   }, 2000);
// });

export default Preloader;