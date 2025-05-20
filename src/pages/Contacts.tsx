import WidgetAOS from "@/lib/WidgetTransition";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { SiGithub, SiTwitch } from "react-icons/si";

const Contacts = () => {
  return (
    <div className="min-h-3/5 flex flex-col mt-10">
      <section role="header">
        <WidgetAOS animation="fade-up">
          <div className="flex font-semibold text-[32px]">
            <span className="text-turquoise">/</span>
            <h3>contacts</h3>
          </div>
          <p className="text-base mt-3.5">Who am i?</p>
        </WidgetAOS>
      </section>

      <section className="mt-12">
        <WidgetAOS animation="fade-up">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2">
              <div>
                I’m interested in freelance opportunities. However, if you have
                other request or question, don’t hesitate to contact me
              </div>
              <div className="gap-3 flex flex-col md:flex-row">
                <div className="p-4 border-2 border-cadet-blue h-fit space-y-2">
                  <div className="text-white">Support me here</div>
                  <div className="text-cadet-blue">4149500120690030</div>
                </div>
                <div className="flex-1 p-4 border-2 border-cadet-blue h-fit">
                  <div className="text-white">Message me here</div>
                  <div className="text-cadet-blue mt-4 space-y-2">
                    <div className="gap-1.5 flex items-center">
                      <MdLocationOn size={20} />
                      <span>Nha Trang, Viet Nam</span>
                    </div>
                    <div className="gap-1.5 flex items-center">
                      <MdPhone size={20} />
                      <a href="tel:+84903496008">+84 903 496 008</a>
                    </div>
                    <div className="gap-1.5 flex items-center flex-wrap wrap-break-word">
                      <MdEmail size={20} />
                      <a href="mailto:tam.hoang.developer@gmail.com">
                        tam.hoang.developer@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WidgetAOS>
      </section>

      <section className="mt-12 mb-20">
        <WidgetAOS animation="fade-up">
          <div className="flex font-semibold text-[32px]">
            <span className="text-turquoise">#</span>
            <h3>all-media</h3>
          </div>
          <div className="flex gap-6 mt-6">
            <div className="gap-1.5 flex items-center">
              <SiTwitch size={20} />
              <span>tam.hoang.developer</span>
            </div>
            <div className="gap-1.5 flex items-center">
              <SiGithub size={20} />
              <span>tam.hoang.developer</span>
            </div>
          </div>
        </WidgetAOS>
      </section>
    </div>
  );
};

export default Contacts;
