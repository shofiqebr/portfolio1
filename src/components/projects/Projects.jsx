

const Projects = () => {
    return (
        <div>
            <h1 className="flex justify-center items-center text-5xl font-bold p-10">Projects</h1>
        <div className="flex gap-20">

            <div>
                <h1 className="text-center text-xl font-medium p-5">Tourist guide</h1>
                <div className="flex gap-3">
                <img className="w-72 h-72" src="images/p1.png" alt="" />
                <img className="w-72 h-72" src="images/p2.png" alt="" />
                </div>

                <p>live link:https://tourist-guide-client-43eb6.web.app</p>
                <p>client side github link:https://github.com/shofiqebr/tourist-guide-client.git</p>
                <p>server side github link: https://github.com/shofiqebr/tourist-guide-server.git</p>

            </div>
            <div>
                <h1 className="text-center text-xl font-medium p-5">carpooling and ride sharing</h1>
                <div className="flex gap-3">
                <img className="w-72 h-72" src="images/p3.png" alt="" />
                <img className="w-72 h-72" src="images/p4.png" alt="" />
                </div>

                <p>live link: https://carpooling-ride-sharing-client.web.app</p>
                <p>client side github link:https://github.com/shofiqebr/carpooling-client.git</p>
                <p>server side github link:https://github.com/shofiqebr/carpooling-server.git</p>

            </div>
        </div>
            
        </div>
    );
};

export default Projects;