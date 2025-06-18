import { useSearchParams } from "react-router-dom";
import CardList from '../components/CardList/CardList'
import '../assets/styles/CardName.css'
import { useLocation } from "react-router";

const CARDS_LIMIT = 10;

function CardsPage() {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const limit = searchParams.get('limit') || CARDS_LIMIT;
    return (
        <>
            <div className='cardName'>КАРТОЧКИ</div>
            <CardList limit={limit} />
        </>
    );

}
export default CardsPage;

