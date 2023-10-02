import slcVideo from "./video/scl.mp4"; // Assuming "images" is the correct folder name

const Third = () => {
  return (
    <div className="w-screen h-3/4 bg-white flex justify-evenly items-center gap-8 mt-24">
      <div className="flex justify-center items-center flex-col w-2/4">
        <h1 className="text-2xl text-violet-700 font-semibold pr-[250px]">
          WHY CHOOSE KAORAID MEDHA BIKASH hIGH SCHOOL?
        </h1>
        <div className=" text-lg text-gray-600 mt-8">
          We offer a range of training packages in a range of subject areas and
          can offer blended learning opportunities to best meet your needs. If
          sitting in a room with a trainer and having the opportunity for
          discussion with other learners sounds good to you then we can offer
          this. If you prefer to study in your own time and at your own speed
          then one of our world class facilities.
        </div>
        <div className=" text-lg text-gray-600 mt-8">
          If you prefer to study in your own time and at your own speed then one
          of our e-learning packages may be right up your street. There is a
          third option, which is you like the sound of both but perhaps can’t
          attend all training sessions, this is when blended learning comes into
          its own.
        </div>
      </div>
      <div>
        <video src={slcVideo} autoPlay loop muted className="w-96"></video>
      </div>
    </div>
  );
};

export default Third;
