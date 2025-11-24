import { forwardRef } from 'react';
import { MessageCircle } from 'lucide-react';
import Button from './Button';

const Sec6 = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="min-h-screen p-3 flex justify-center items-center overflow-hidden"
    >
      <section className="sm:gap-4 gap-8 my-14 flex sm:flex-row flex-col overflow-hidden">
        <div className="w-full  flex flex-col sm:gap-5 gap-4 p-3">
          <div className="flex flex-col sm:gap-3 gap-5">
            <MessageCircle className="sm:w-[5vw] w-[10vw] sm:h-[5vw] h-[10vw] text-[#9EB143]" />
            <h1 className="sm:text-[3.4vw] text-[8vw] leading-[8vw] font-semibold sm:leading-[4vw]">
              Book a free Demo from our expert right now!
            </h1>
            <p className="sm:w-2/3">
              Get hands-on guidance from our expert schedule your free demo today.
              Discover the full potential before you commit.
            </p>
          </div>
        </div>

        <div className="w-full sm:text-2xl text-xl flex flex-col gap-10">
          <form
            action=""
            className="text-xl p-3 rounded-lg flex flex-col gap-6 bg-zinc-100 hover:scale-95 transition-all duration-200 justify-center items-center"
          >
            <div className="flex sm:flex-row flex-col gap-3 w-full">
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="name">Full Name</label>
                <input
                  className="bg-white p-2 rounded-md outline-0"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="email">Business Email</label>
                <input
                  className="bg-white p-2 rounded-md outline-0"
                  type="text"
                  id="email"
                  name="email"
                />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-3 w-full">
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="phone">Phone</label>
                <input
                  className="bg-white p-2 rounded-md outline-0"
                  type="text"
                  id="phone"
                  name="phone"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="company">Company</label>
                <input
                  className="bg-white p-2 rounded-md outline-0"
                  type="text"
                  id="company"
                  name="company"
                />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-3 w-full">
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="job">Job Title</label>
                <input
                  className="bg-white p-2 rounded-md outline-0"
                  type="text"
                  id="job"
                  name="job"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="budget">Annual Advertising Budget</label>
                <input
                  className="bg-white p-2 rounded-md outline-0"
                  type="text"
                  id="budget"
                  name="budget"
                />
              </div>
            </div>

            <Button>Get Free Consultancy</Button>
          </form>
        </div>
      </section>
    </div>
  );
});

export default Sec6;
