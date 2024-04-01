const Review = () => {
  return (
    <div>
      {/* component */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')",
        }}
      />
      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto" id="reviews">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                What people <br />
                are saying.
              </h1>
              <h3 className="text-xl mb-5 font-light">
                Discover What Others Have Experienced
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500" />
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
              </div>
            </div>
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="" alt />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Fen.B
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Jeze was fast to respon. He gae us a reasonable quote for
                      900sqft. He was able to complete the wall repairs and
                      paint in less than a day.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="" alt />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Eve E
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Love this company they are expertise and family owned hard
                      workers and take pride in their work
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="" alt />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Jack Yu.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Jezer and his team is absolute fantastic, I could not ask
                      for any better team than Jezer's. Marisa was very
                      responsive and kept me up-to-date with schedule and
                      progress. My house looks complete new with fresh coat of
                      paints and I could not thanks Jezer and his team for a
                      well done job!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                {/* <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=4" alt />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Charlie Howse.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto inventore voluptatum nostrum atque, corrupti,
                      vitae esse id accusamus dignissimos neque reprehenderit
                      natus, hic sequi itaque dicta nisi voluptatem! Culpa,
                      iusto.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div> */}
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="" alt />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Lorie Rivero.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      I reached out to Jezer Espinoza LLC to get a quote to get
                      my house painted along with our kitchen cabinets and to
                      repair our stairs. I spoke with Maritza who was extremely
                      responsive and professional and they were able to come out
                      that weekend to give me a quote. Throughout the whole
                      process, we walked through each room and they listened to
                      what our wants and needs were and respectfully gave
                      suggestions as they went along. Being a new homeowner, we
                      needed a little bit of guidance and they were able to do
                      just that. I can honestly say Jezer and his team were so
                      meticulous, respectful, attentive to detail, and clean!
                      The whole house was painted and fixed in 3 days. I am in
                      awe of how beautiful the house came out and what a huge
                      difference a paint job does. Jezer and his team take pride
                      in what they do and you’ll know immediately by the end
                      result and how hard they work. If you are looking for an
                      amazing group to paint your house, look no further. THIS
                      is your crew! Thank you Jezer Espinoza LLC for the amazing
                      work you did in our home!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                {/* <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=6" alt />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Kris Stanton.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem iusto, explicabo, cupiditate quas totam!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
