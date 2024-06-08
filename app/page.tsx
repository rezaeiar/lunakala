import Discounts from "./_components/templates/index/Discounts/Discounts";
import SliderShowcase from "./_components/templates/index/SliderShowcase/SliderShowcase";
import TripleBanners from "./_components/templates/index/TripleBanners/TripleBanners";

export default function Home() {
    return (
        <main>
            <SliderShowcase />
            <Discounts />
            <TripleBanners />
        </main>
    );
}
