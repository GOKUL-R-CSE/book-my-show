import React from "react";

//Components
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4 my-10">
                <div className="w-full lg:flex lg:flex-row-reverse gap-4">
                    <div className="lg:w-3/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4">
                            Play in NCR Delhi
                        </h2>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00305723-wlbwzucsde-portrait.jpg"
                                    title="Poetry Storytelling aur Chai"
                                    subtitle="The Social house: Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314523-lychsakbav-portrait.jpg"
                                    title="TVK Presents Amarar Kalki in Sivagamiyin..."
                                    subtitle="Watch on BookMyShow"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                                    title="TVK cultural Presents Ponniyin Selavn"
                                    subtitle="Watch on BookMyShow"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314378-xwnmstfxfx-portrait.jpg"
                                    title="Ramayana Connectinh the Dots Online..."
                                    subtitle="Watch on Zoom"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxNiBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309928-tcvcsyvnuw-portrait.jpg"
                                    title="Aur Kab Tak"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314369-dkrtrffvbj-portrait.jpg"
                                    title="Weekend Open-Mic by True Soul Tales"
                                    subtitle="True Soul Tales: Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-ljzsabhngm-portrait.jpg"
                                    title="Ranga Shankara"
                                    subtitle="Multiple Venues"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlayFilters
                                title="Date"
                                tags={["Today", "Tomorrow", "This Weekend"]}
                            />
                        </div>
                        <div>
                            <PlayFilters
                                title="Language"
                                tags={["English", "Hindi", "Tamil", "Kannada", "Urdu"]}
                            />
                        </div>
                        <div>
                            <PlayFilters
                                title="Categories"
                                tags={["Theatre", "Story telling"]}
                            />
                        </div>
                        <div>
                            <PlayFilters
                                title="Genres"
                                tags={["Drama", "Adaptation", "Historiacal", "Online streaming plays"]}
                            />
                        </div>
                        <div>
                            <PlayFilters
                                title="More filters"
                                tags={["Online Streaming", "Kids Allowed", "Outdoor"]}
                            />
                        </div>
                        <div>
                            <PlayFilters
                                title="Price"
                                tags={["Free", "0-500", "501-2000", "Above 2000"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plays;