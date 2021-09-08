import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.Component";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import Cast from "../components/Cast/Cast.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

const MoviePage = () => {
    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const cast = [
        {
            profile_path:
                "https://media.vanityfair.com/photos/5f6e0d388f3d1388648ddf94/4:3/w_1779,h_1334,c_limit/vin.jpg",
            original_name: "Vin Diesel",
            character: "Dominic Toretto",
        },
        {
            profile_path:
                "https://in.bmscdn.com/iedb/artist/images/website/poster/large/john-cena-1021-24-03-2017-15-43-30.jpg",
            original_name: "John Cena",
            character: "Jackob Toretto",
        },
        {
            profile_path:
                "https://in.bmscdn.com/iedb/artist/images/website/poster/large/tyrese-gibson-2671-24-03-2017-17-39-25.jpg",
            original_name: "Tyrese Gibson",
            character: "Roman Pearce",
        },
        {
            profile_path:
                "https://in.bmscdn.com/iedb/artist/images/website/poster/large/charlize-theron-410-21-05-2019-04-42-50.jpg",
            original_name: "Charlize Theron",
            character: "Cipher",
        },
        {
            profile_path:
                "https://in.bmscdn.com/iedb/artist/images/website/poster/large/nathalie-emmanuel-1055032-24-03-2017-16-16-15.jpg",
            original_name: "Nathalie Emmanuel",
            character: "Ramsey",
        },
        {
            profile_path:
                "https://in.bmscdn.com/iedb/artist/images/website/poster/large/helen-mirren-808-24-03-2017-12-36-16.jpg",
            original_name: "Helen Mirren",
            character: "Magdalene Shaw",
        },
        {
            profile_path:
                "https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-rodriguez-1471-13-10-2017-03-57-20.jpg",
            original_name: "Michelle Rodriguez",
            character: "Letty Ortiz",
        },
    ];

    const similarMovies = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-zbbswydmwv-portrait.jpg",
            title: "Fast and Furious 9",
            subtitle: "Action / Adventure / Crime / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAxOGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-rhfsjjrlrc-portrait.jpg",
            title: "Shang-Chi and the Legend of the Ten Rings",
            subtitle: "Action / Adventure / Fantasy",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00309402-zcusbgfzak-portrait.jpg",
            title: "The Sucide Squad",
            subtitle: "Action / Adventure / Comedy / SciFi"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-djhnmgmtvw-portrait.jpg",
            title: "The Conjuring: The Devil made Me Do It",
            subtitle: "Horror / Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-gukaentnqs-portrait.jpg",
            title: "Bell Bottom",
            subtitle: "Action / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00127662-lbqutjnxvj-portrait.jpg",
            title: "Chal Mera Putt 2",
            subtitle: "Comedy / Drama",
        },

    ];
    const bmsExclusive = [
        {
            src: "https://in.bmscdn.com/iedb/movies/images/website/poster/large/faactory-et00313885-31-08-2021-03-50-13.jpg",
            title: "Faactory",
            subtitle: "Action / Adventure / Crime / Thriller",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/website/poster/large/laabam-et00137405-25-08-2020-11-51-17.jpg",
            title: "Laabam",
            subtitle: "Action / Adventure / Fantasy",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/website/poster/large/chehre-et00102880-25-08-2021-07-26-46.jpg",
            title: "Chere",
            subtitle: "Action / Adventure / Comedy / SciFi"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-djhnmgmtvw-portrait.jpg",
            title: "The Conjuring: The Devil made Me Do It",
            subtitle: "Horror / Thriller"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/website/poster/large/ucha-pind-et00314226-25-08-2021-03-54-07.jpg",
            title: "Ucha Pind",
            subtitle: "Action / Thriller",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/website/poster/large/the-green-knight-et00311404-06-08-2021-02-20-29.jpg",
            title: "The Green Knight",
            subtitle: "Comedy / Drama",
        },

    ];

    return (
        <>
            <MovieHero />
            <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
                <div className="flex flex-col item-start gap-3">
                    <h1 className="text-gray-800 font-bold text-2xl">
                        About the movie
                    </h1>
                    <p>
                        Dom`s peaceful life with his wife Letty and son Brian is
                        shattered when Dom`s past catches up to him. The gang is
                        up against the most skilled assassin and
                        high-performance driver - his little brother Jakob
                    </p>
                </div>

                <div classname="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-3">
                        Applicable Offers
                    </h2>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex item-start gap-2 bg-yellow-100 p-3 border-ywllow-400 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcVisa className="w-fill h-fill" />
                            </div>
                            <div className="flex flex-col item-start">
                                <h3 className="text-gray-700 text-xl font-bold">
                                    Visa Stream Offer
                                </h3>
                                <p className="text-gray-600">
                                    Get 50% off up to INR 150 on all RuPay card*
                                    on BookMyShow Stream.
                                </p>
                            </div>
                        </div>
                        <div className="flex item-start gap-2 bg-yellow-100 p-3 border-ywllow-400 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcApplePay className="w-full h-full" />
                            </div>
                            <div className="flex flex-col item-start">
                                <h3 className="text-gray-700 text-xl font-bold">
                                    Filmy Pass
                                </h3>
                                <p className="text-gray-600">
                                    Get 50% off up to INR 150 on all RuPay card*
                                    on BookMyShow Stream.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">
                        Cast and Crew
                    </h2>
                    <Slider {...settingsCast}>
                        {cast.map((castData) => (
                            <Cast
                                image={castData.profile_path}
                                castName={castData.original_name}
                                role={castData.character}
                            />
                        ))}
                    </Slider>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <PosterSlider
                        config={settings}
                        title="You might also know"
                        posters={similarMovies}
                        isDark={false}
                    />
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <PosterSlider
                        config={settings}
                        title="BMS XCLUSIVE"
                        posters={bmsExclusive}
                        isDark={false}
                    />
                </div>
            </div>
        </>
    );
};

export default MoviePage;