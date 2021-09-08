import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

function HomePage() {
    const recommendedMovies = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAxOGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-rhfsjjrlrc-portrait.jpg",
            title: "Shang-Chi and the Legend of the Ten Rings",
            subtitle: "Action / Adventure / Fantasy",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-zbbswydmwv-portrait.jpg",
            title: "Fast and Furious 9",
            subtitle: "Action / Adventure / Crime / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-gukaentnqs-portrait.jpg",
            title: "Bell Bottom",
            subtitle: "Action / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjclICAxMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00102880-eudztbwuwx-portrait.jpg",
            title: "Chehre",
            subtitle: "Mystery / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00127662-lbqutjnxvj-portrait.jpg",
            title: "Chal Mera Putt 2",
            subtitle: "Comedy / Drama",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-djhnmgmtvw-portrait.jpg",
            title: "The Conjuring: The Devil made Me Do It",
            subtitle: "Horror / Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00309402-zcusbgfzak-portrait.jpg",
            title: "The Sucide Squad",
            subtitle: "Action / Adventure / Comedy / SciFi"
        }
    
    ];

    const premierMovies = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            title: "The Balkan Line",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137316-unmwlqfqvd-portrait.jpg",
            title: "The Nest",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg",
            title: "Resistance",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title: "The Secrets We Keep",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137455-pxtjxgdyua-portrait.jpg",
            title: "Capone",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302306-xxwtjnexzz-portrait.jpg",
            title: "Proximity",
            subtitle: "English",
        },
    ];

    const onlineStreamEvents = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCA2IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-xqqvejluju-portrait.jpg",
            title: "FrontRow Open Mics",
            subtitle: "Watch on Zoom",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00131881-dqbugcwsup-portrait.jpg",
            title: "Vipul Goyal Live",
            subtitle: "Watch on Zoom",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg",
            title: "The Nest",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAzMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304004-cpfnbdagcz-portrait.jpg",
            title: "Data Science",
            subtitle: "Online Streaming",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAzMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304005-lnegmxafyd-portrait.jpg",
            title: "MBA",
            subtitle: "Online Streaming",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314100-jpqwejyphf-portrait.jpg",
            title: "Reclaim the Saaz",
            subtitle: "Watch on YouTube",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCA3IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313022-ecbcdmnjgg-portrait.jpg",
            title: "FrontRow VIP: Humor Writing Worshop",
            subtitle: "Watch o Zoom"
        }
    ];

    return (
        <>
            <HeroCarousel />

            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
                    The best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>

            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider
                    title="Recommended Movies"
                    subtitle="List of recommended movies"
                    posters={recommendedMovies}
                    isDark={false}
                />
            </div>

            <div className="bg-premier-800 py-12">
                <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img
                            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="Rupay"
                            className="w-full h-full"
                        />
                    </div>
                    <PosterSlider
                        title="Premiers"
                        subtitle="Brand new releases every Friday"
                        posters={premierMovies}
                        isDark={true}
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider
                    title="Online Streaming Event"
                    subtitle=""
                    posters={onlineStreamEvents}
                    isDark={false}
                />
            </div>
        </>
    );
}
export default HomePage;