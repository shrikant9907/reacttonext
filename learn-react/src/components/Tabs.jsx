import React, { useState } from 'react';

const Tabs = () => {


    const [activeTab, setActiveTab] = useState(0);

    const tabs = ["Tab 1", "Tab 2", "Tab 3"];
    const contents = [
        "Content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam neque quas beatae rerum vel? Tempore quibusdam minus maxime. Deserunt id dolorum nostrum tenetur nemo, culpa recusandae sapiente. Accusamus, sint numquam.",
        "Content 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam neque quas beatae rerum vel? Tempore quibusdam minus maxime. Deserunt id dolorum nostrum tenetur nemo, culpa recusandae sapiente. Accusamus, sint numquam.",
        "Content 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam neque quas beatae rerum vel? Tempore quibusdam minus maxime. Deserunt id dolorum nostrum tenetur nemo, culpa recusandae sapiente. Accusamus, sint numquam."
    ]


    return (
        <div className='mt-5 max-w-96 mx-auto'>
            <div className='flex justify-evenly items-center co'>
                {tabs.map(((tab, index) => <button
                    onClick={() => setActiveTab(index)}
                    key={`tab_${index}`}
                    className={`px-4 flex-1 border ${activeTab === index ? "bg-blue-800 text-white" : ""}  py-3 hover:bg-blue-500`}
                >{tab}</button>))}
            </div>


            <div className='flex flex-col mx-auto'>
                {contents && contents.map((content, index) => {
                    if (activeTab === index) {
                        return <div className='px-3 py-4 border' key={`content_${index}`}>{content}</div>
                    }
                    return null
                }
                )}

            </div>
        </div>
    )
}

export default Tabs
