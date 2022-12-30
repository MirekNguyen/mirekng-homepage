import Link from "next/link";
const AboutBox = () => {
  return (
    <>
      <div className="grid place-items-center text-center pt-6">
        <div className="bg-gray-100 dark:bg-neutral-700 rounded px-7 py-3">
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
        </div>
      </div>
    </>
  );
};
export default AboutBox;
