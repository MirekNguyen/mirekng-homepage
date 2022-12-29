import Link from "next/link";
const AboutBox = () => {
  return (
    <>
      <div className="grid place-items-center text-center pt-6">
        <div className="bg-gray-100 dark:bg-neutral-700 rounded px-7 py-3">
          <div className="text-2xl">whoami</div>
          <p className="max-w-md">
            {" "}
            Mirek Nguyen Binh is my full name. Born in Czech Republic and having
            vietnamese parents. Currently studying computer science in
            university, aspiring to be a web developer. In my free time I try to
            code as much as possible, but also having hobbies. I like to work
            out in gym, lifting weights.{" "}
          </p>
          <div className="pb-5">
            <p className="text-2xl">Bio</p>
            <p className="text-left">
              <b>2001</b> Born in Prague, Czech Republic
            </p>
            <p className="text-left">
              <b>2018-2021</b> Part-time job in Marks & Spencer Food
            </p>
            <p className="text-left">
              <b>2021</b> Finished high school, Gymnázium Na Vítězné pláni
            </p>
            <p className="text-left">
              <b>2022-present</b> Czech University of Life Sciences -
              Informatics{" "}
            </p>
          </div>
          <Link href="/">
            <button className="bg-blue-100 px-7 py-2 rounded dark:text-black">
              Portfolio
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default AboutBox;
