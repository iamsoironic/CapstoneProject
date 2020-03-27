import React from 'react'
import NavBar from "./navigation/navbar"
import Footer from "./navigation/footer"
import Image3 from "../assets/images/logo.jpg"
import Image4 from "../assets/images/smoke.jpg"
import Image5 from "../assets/images/trapped.jpg"

export default function about() {
    return (
        <div className="about-wrapper">
            <NavBar />

            <div className="img-about">
                <img src={Image3} alt=""/>
            </div>

            <div className="page-container">
                <div className="content-wrapper">
                    <img src="#" alt="Featured Chef" id="soironic"/>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit enim repellat explicabo architecto, impedit ad eos vero nostrum, minus quidem magni, expedita itaque nisi nihil. Aspernatur ullam ut ea, impedit optio reprehenderit, corrupti repellat itaque eligendi molestias alias. Aliquid veniam quod unde inventore. Tempora fugit vel fugiat magnam nulla laborum ipsa hic, dicta iure consequatur minus in minima nihil itaque, aliquam incidunt unde saepe, corrupti necessitatibus odit delectus totam voluptatum? Quod sit vitae commodi! Similique quisquam omnis voluptatibus optio! Laborum, consequuntur nemo amet eos sunt nulla iusto excepturi maxime. Distinctio veritatis tempora tempore maiores rem modi voluptate odit, facere, eligendi sunt dicta, earum officia perspiciatis quas laboriosam reprehenderit consequatur minima beatae. Quae libero commodi sint, veritatis ab eligendi exercitationem iure consequuntur cum assumenda numquam ad deleniti neque perferendis maiores voluptatem velit? Rem deleniti illum maiores nulla ducimus! Nesciunt praesentium, sint aliquam ab sequi ratione quisquam commodi minima blanditiis assumenda, numquam quidem fugiat aspernatur dicta doloribus molestias explicabo incidunt? Aspernatur sequi accusamus nam enim temporibus pariatur soluta laboriosam optio sint fuga voluptatibus repudiandae voluptate eius porro quam ab vitae eos dolore est ratione sed, iure quis amet. Dignissimos doloremque quos alias, eos voluptatum deleniti quas magnam voluptas illo tempora dolorum? Neque.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iste reiciendis temporibus quod sapiente fugit nemo, animi repudiandae aut suscipit explicabo ullam, quibusdam dicta est! Maxime laudantium, omnis assumenda minus nihil debitis quo. Iure minus delectus, ea vel maiores, porro dolor explicabo, id dolorem dignissimos inventore. Hic laboriosam sint sequi cupiditate in ipsum nam, quos cum modi excepturi officia voluptatum ipsam est labore itaque sapiente aut, ratione voluptates corporis harum impedit saepe deleniti assumenda. Libero, reprehenderit autem culpa quidem ratione ipsa non aperiam officiis architecto sed commodi, blanditiis vero! Neque quis dignissimos accusantium quos possimus in fuga nisi, voluptas est commodi odio fugiat, aperiam, illo alias excepturi exercitationem quia minus animi. Iusto deleniti, asperiores hic illum nisi fuga temporibus, quod delectus alias rem ratione velit? Repudiandae, at praesentium temporibus, eius voluptates maiores placeat distinctio nemo quidem corrupti cum sapiente asperiores. Libero, doloremque quidem repudiandae minima fugit animi ullam blanditiis fuga dolore numquam rem impedit laudantium ipsum quas dolores ipsam. Eius eligendi sunt ut corrupti nesciunt, maiores quo ducimus impedit aperiam necessitatibus, error quos vitae, pariatur autem esse optio distinctio dolor placeat iusto suscipit libero iure tenetur blanditiis reprehenderit! Voluptates nostrum cupiditate doloribus numquam? Eaque voluptatem facilis minima, quia sint asperiores ipsam unde molestiae totam temporibus fugit laborum harum, aut debitis nam illum nisi. Voluptatibus odio consequuntur dicta ex accusamus vel vero repudiandae quod facilis voluptas distinctio, laboriosam fugit ab aspernatur consequatur quasi. In officia nulla cupiditate necessitatibus ipsam odio enim et natus repudiandae ratione eaque perspiciatis architecto dolores placeat, dolorum impedit magnam, debitis tempore pariatur. Suscipit voluptate ea delectus eos consequatur aspernatur at, aliquid autem, accusantium fuga doloremque totam dignissimos reprehenderit exercitationem cumque beatae. Officiis possimus eius obcaecati nam architecto deserunt eveniet id harum, fuga praesentium dolorem, distinctio et natus doloribus. Voluptatum, voluptatem fugiat consectetur consequatur necessitatibus eius. Ut alias atque eaque molestiae cum. Tempora nulla accusamus illo atque magnam quasi enim quia quaerat culpa, doloribus dolorem pariatur optio harum animi! A fugiat ea est ipsam odio accusamus, quis vel ipsa possimus tempore velit maxime minima consectetur recusandae sunt! Quos, maiores? Sapiente vitae maxime nulla doloribus laborum, dolorem porro eos.</p>
            </div>
        </div> 

        <div className="spacer50"></div>

        <div className="squares-wrapper">
            <div className="squares">
                <div className="square">
                    <div className="img-wrapper">
                        <img src={Image5} alt=""/>
                    </div>

                    <div className="square-text-wrapper">
                        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem commodi, adipisci delectus et asperiores dolorem minima aliquid nesciunt incidunt alias laborum vel a magni quas laudantium omnis sequi ipsum repudiandae explicabo saepe minus pariatur expedita tempora. Sit, ut? Temporibus maiores cupiditate atque totam in eligendi assumenda deserunt, optio ducimus a.</p>
                    </div>
                </div>
                <div className="square">
                    <div className="square-text-wrapper">
                        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem commodi, adipisci delectus et asperiores dolorem minima aliquid nesciunt incidunt alias laborum vel a magni quas laudantium omnis sequi ipsum repudiandae explicabo saepe minus pariatur expedita tempora. Sit, ut? Temporibus maiores cupiditate atque totam in eligendi assumenda deserunt, optio ducimus a.</p>
                    </div>

                    <div className="img-wrapper">
                        <img src={Image4} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}
