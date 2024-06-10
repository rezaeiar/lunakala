import Discounts from "./_components/templates/index/Discounts/Discounts";
import SliderShowcase from "./_components/templates/index/SliderShowcase/SliderShowcase";
import TripleBanners from "./_components/templates/index/TripleBanners/TripleBanners";
import FilterBoxes from "./_components/templates/index/FilterBoxes/FilterBoxes";
import CardBox from "./_components/templates/index/CardBox/CardBox";

export default function Home() {
    return (
        <main>
            <SliderShowcase />
            <Discounts />
            <TripleBanners />
            <FilterBoxes />
            <CardBox />
        </main>
    );
}
